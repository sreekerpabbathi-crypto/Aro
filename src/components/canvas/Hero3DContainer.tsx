import React, { Suspense, lazy, useState } from 'react'
import { ThreeFallback } from './ThreeFallback'
import { checkWebGLSupport } from '@/lib/utils'

const GourmetDish3D = lazy(() => import('./GourmetDish3D'))

export const Hero3DContainer: React.FC = () => {
  const [hasWebGL] = useState<boolean>(() => checkWebGLSupport())

  if (!hasWebGL) {
    return <ThreeFallback />
  }

  return (
    <div className="relative w-full h-full min-h-[460px] sm:min-h-[540px] lg:min-h-[620px] rounded-2xl overflow-hidden bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] shadow-[3px_3px_0px_rgba(56,53,47,0.12)] flex items-center justify-center">
      {/* Background paper lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[var(--dp-color-highlight)]/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-[var(--dp-color-accent)]/5 rounded-full blur-[80px] pointer-events-none" />

      <Suspense fallback={<ThreeFallback subtitle="Preparing culinary viewport..." />}>
        <GourmetDish3D />
      </Suspense>
    </div>
  )
}

export default Hero3DContainer
