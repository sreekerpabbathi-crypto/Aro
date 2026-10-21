import React from 'react'

interface DoodleProps {
  className?: string
  color?: string
}

/**
 * Hand-drawn energetic double-pass scribble underline
 */
export const ScribbleUnderline: React.FC<DoodleProps> = ({
  className = 'w-full h-4 text-[#FF650D]',
  color = 'currentColor',
}) => {
  return (
    <svg
      viewBox="0 0 240 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M3 12.5C45 4.5 95 16.5 140 10.5C180 5.2 215 14.8 237 9"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 15.5C58 8.5 110 18 155 12C192 7 222 15 235 13"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.75"
      />
    </svg>
  )
}

/**
 * Hand-drawn curved arrow pointing to CTAs
 */
export const HandDrawnArrow: React.FC<{
  className?: string
  color?: string
  direction?: 'down-right' | 'down-left' | 'up-right'
  label?: string
}> = ({
  className = 'w-24 h-16 text-[#121212]',
  color = 'currentColor',
  direction = 'down-right',
  label,
}) => {
  const isLeft = direction === 'down-left'

  return (
    <div className={`relative inline-flex flex-col items-center select-none ${className}`}>
      {label && (
        <span className="font-['Caveat'] text-lg font-bold text-[#121212] tracking-wide -rotate-3 mb-1">
          {label}
        </span>
      )}
      <svg
        viewBox="0 0 80 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-full ${isLeft ? '-scale-x-100' : ''}`}
        aria-hidden="true"
      >
        <path
          d="M8 8C24 4 48 12 56 34C58 39 60 42 62 43"
          stroke={color}
          strokeWidth="2.8"
          strokeLinecap="round"
        />
        {/* Hand-drawn arrowhead */}
        <path
          d="M48 38L62 44L63 30"
          stroke={color}
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

/**
 * Hand-drawn hot chilli doodle with flame accents
 */
export const ChilliDoodle: React.FC<DoodleProps> = ({
  className = 'w-8 h-8 text-[#EF4444]',
  color = 'currentColor',
}) => {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Stem */}
      <path
        d="M26 6C28 10 27 14 24 16"
        stroke="#10B981"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M23 16C21 13 23 11 25 10"
        stroke="#10B981"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Chilli body */}
      <path
        d="M23 16C32 20 34 32 26 40C20 47 11 41 12 33C13 25 18 17 23 16Z"
        fill="#EF4444"
        stroke="#121212"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Highlight reflection */}
      <path
        d="M17 25C16 30 18 36 21 38"
        stroke="#FFFFFF"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.8"
      />
      {/* Little spice spark */}
      <path
        d="M34 16L38 12M38 20L42 19"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

/**
 * Hand-drawn Biryani Handi / Pot with aromatic steam curls
 */
export const BiryaniPotDoodle: React.FC<DoodleProps> = ({
  className = 'w-10 h-10 text-[#FF650D]',
  color = 'currentColor',
}) => {
  return (
    <svg
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Rising aromatic steam */}
      <path
        d="M20 14C19 11 22 8 20 5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M28 15C27 10 30 7 28 3"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M36 14C35 11 38 8 36 5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Pot Lid Handle */}
      <circle cx="28" cy="18" r="2.5" fill="#121212" />
      {/* Pot Lid Rim */}
      <ellipse
        cx="28"
        cy="22"
        rx="18"
        ry="3.5"
        fill="#FFD13B"
        stroke="#121212"
        strokeWidth="2.2"
      />
      {/* Pot Body Handi Shape */}
      <path
        d="M11 23C8 32 12 45 28 46C44 45 48 32 45 23"
        fill="#FFF0D5"
        stroke="#121212"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      {/* Side handles */}
      <path
        d="M9 28C6 28 5 33 8 35"
        stroke="#121212"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M47 28C50 28 51 33 48 35"
        stroke="#121212"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* Base ring */}
      <path
        d="M19 46C22 49 34 49 37 46"
        stroke="#121212"
        strokeWidth="2.2"
      />
    </svg>
  )
}

/**
 * Hand-drawn retro 4-point star / sparkle burst
 */
export const StarSparkleDoodle: React.FC<DoodleProps> = ({
  className = 'w-6 h-6 text-[#FFD13B]',
  color = 'currentColor',
}) => {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M16 2C16 10 10 16 2 16C10 16 16 22 16 30C16 22 22 16 30 16C22 16 16 10 16 2Z"
        fill={color}
        stroke="#121212"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/**
 * Hand-drawn crossed fork and spoon
 */
export const ForkSpoonDoodle: React.FC<DoodleProps> = ({
  className = 'w-8 h-8 text-[#121212]',
  color = 'currentColor',
}) => {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Fork */}
      <path
        d="M11 6L11 16M8 6L8 13C8 15 14 15 14 13L14 6M11 16L11 34"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Spoon */}
      <path
        d="M26 6C23 6 22 10 23 15C24 18 28 18 29 15C30 10 29 6 26 6ZM26 18L26 34"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/**
 * Hand-drawn Washi / Masking Tape Sticker
 */
export const WashiTape: React.FC<{
  className?: string
  angle?: string
  text?: string
}> = ({
  className = 'bg-[#FFF4C2]/90 border border-black/30',
  angle = '-3deg',
  text,
}) => {
  return (
    <div
      className={`inline-flex items-center justify-center px-3 py-1 shadow-sm font-['Caveat'] text-xs font-bold text-[#121212] tracking-wider select-none backdrop-blur-[2px] ${className}`}
      style={{
        transform: `rotate(${angle})`,
        clipPath: 'polygon(0% 12%, 4% 0%, 96% 2%, 100% 14%, 98% 88%, 94% 100%, 3% 97%, 0% 86%)',
      }}
    >
      {text || 'EST. HYDERABAD'}
    </div>
  )
}

/**
 * Hand-drawn irregular sketch circle around numbers or badges
 */
export const SketchCircle: React.FC<{
  className?: string
  color?: string
  children: React.ReactNode
}> = ({ className = 'w-12 h-12 text-[#FF650D]', color = 'currentColor', children }) => {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        <path
          d="M30 6C16 5 5 18 6 32C7 46 19 55 33 54C47 53 55 42 54 28C53 14 42 6 28 6C18 6 9 14 8 26"
          stroke={color}
          strokeWidth="2.8"
          strokeLinecap="round"
        />
      </svg>
      <span className="relative z-10">{children}</span>
    </div>
  )
}

/**
 * Curved Hand-Drawn Dashed Step Connector for "How It Works"
 */
export const StepConnectorArrow: React.FC<{
  className?: string
  color?: string
}> = ({ className = 'w-24 h-12 text-[#121212]', color = '#121212' }) => {
  return (
    <svg
      viewBox="0 0 100 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M5 22C30 8 70 8 92 24"
        stroke={color}
        strokeWidth="2.4"
        strokeDasharray="5 4"
        strokeLinecap="round"
      />
      {/* Arrowhead */}
      <path
        d="M82 18L93 25L86 31"
        stroke={color}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
