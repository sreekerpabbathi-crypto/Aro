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
    <div className="relative w-full h-full min-h-[460px] sm:min-h-[540px] lg:min-h-[620px] rounded-3xl overflow-hidden glass-panel border border-white/10 flex items-center justify-center">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#ff5733]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-amber-500/10 rounded-full blur-[90px] pointer-events-none" />

      <Suspense fallback={<ThreeFallback subtitle="Preparing culinary viewport..." />}>
        <GourmetDish3D />
      </Suspense>
    </div>
  )
}

export default Hero3DContainer
