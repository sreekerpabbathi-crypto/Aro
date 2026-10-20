import fs from 'fs';
import path from 'path';

const scratchDir = path.resolve('scratch');
const files = fs.readdirSync(scratchDir);

for (const f of files) {
  if (f.endsWith('.js')) {
    let content = fs.readFileSync(path.join(scratchDir, f), 'utf8');
    content = content.replace(/require\('\.\/([a-zA-Z0-9_]+)'\)/g, "require('./$1.cjs')");
    const target = path.join(scratchDir, f.replace(/\.js$/, '.cjs'));
    fs.writeFileSync(target, content, 'utf8');
    fs.unlinkSync(path.join(scratchDir, f));
    console.log(`Converted ${f} -> ${path.basename(target)}`);
  }
}
