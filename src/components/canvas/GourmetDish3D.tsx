import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, ContactShadows } from '@react-three/drei'
import * as THREE from 'three'
import { useReducedMotion } from '@/hooks/useReducedMotion'

/**
 * Procedural Fine-Dining Entrée Plating:
 * - Handcrafted matte-black stoneware ceramic coupe plate
 * - Pan-seared glazed salmon / wagyu fillet with caramelized crust & lacquer sheen
 * - Saucier's golden saffron-butternut purée swirl
 * - Charred baby asparagus spears & wild mushroom caps
 * - Ruby reduction glaze pearls
 * - Fresh microgreen herb garnishes
 * - Subtle warm aromatic thermal steam wisps
 *
 * Designed intentionally for ARO's premium culinary aesthetic.
 * Cleanly modular to allow easy replacement with external GLTF/USDZ assets in future stages.
 */

// Steam particle configuration: subtle rising culinary vapors
const STEAM_PARTICLE_COUNT = 24
const STEAM_DATA = (() => {
  const data = []
  for (let i = 0; i < STEAM_PARTICLE_COUNT; i++) {
    data.push({
      x: (Math.sin(i * 1.7) * 0.45),
      z: (Math.cos(i * 2.3) * 0.45),
      baseY: 0.15 + (i / STEAM_PARTICLE_COUNT) * 0.9,
      speed: 0.15 + ((i % 5) * 0.04),
      offset: (i * 0.25) % (Math.PI * 2),
      size: 0.05 + ((i % 4) * 0.02),
    })
  }
  return data
})()

function GourmetPlatingScene() {
  const groupRef = useRef<THREE.Group>(null)
  const steamGroupRef = useRef<THREE.Group>(null)
  const pointerTarget = useRef({ x: 0, y: 0 })
  const prefersReduced = useReducedMotion()

  // Track pointer on window to tilt the plate subtly towards cursor
  React.useEffect(() => {
    const handlePointerMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = -(e.clientY / window.innerHeight) * 2 + 1
      pointerTarget.current = { x: x * 0.35, y: y * 0.25 }
    }
    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [])

  // Curve geometry for the saucier swirl
  const saucierCurveMesh = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.95, -0.42, 0.45),
      new THREE.Vector3(-0.55, -0.41, 0.85),
      new THREE.Vector3(0.25, -0.42, 0.8),
      new THREE.Vector3(0.75, -0.43, 0.3),
      new THREE.Vector3(0.85, -0.44, -0.2),
    ])
    return new THREE.TubeGeometry(curve, 48, 0.045, 12, false)
  }, [])

  useFrame((state, delta) => {
    if (!groupRef.current) return

    if (!prefersReduced) {
      // Gentle floating turntable rotation
      groupRef.current.rotation.y += delta * 0.18

      // Subtle responsive tilt to pointer with smooth damping
      const targetRotX = 0.45 - pointerTarget.current.y * 0.4
      const targetRotZ = pointerTarget.current.x * 0.3
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, delta * 2.5)
      groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, targetRotZ, delta * 2.5)

      // Animate delicate rising steam wisps
      if (steamGroupRef.current) {
        const time = state.clock.elapsedTime
        steamGroupRef.current.children.forEach((child, idx) => {
          const config = STEAM_DATA[idx]
          if (config) {
            const currentY = ((config.baseY + time * config.speed) % 1.2) - 0.2
            child.position.y = currentY
            child.position.x = config.x + Math.sin(time * 1.5 + config.offset) * 0.08
            child.position.z = config.z + Math.cos(time * 1.2 + config.offset) * 0.08

            // Fade in as it leaves the plate, fade out as it dissolves in air
            const mesh = child as THREE.Mesh<THREE.BufferGeometry, THREE.MeshBasicMaterial>
            const progress = (currentY + 0.2) / 1.2
            if (mesh.material) {
              mesh.material.opacity = Math.sin(progress * Math.PI) * 0.22
            }
          }
        })
      }
    } else {
      groupRef.current.rotation.x = 0.45
      groupRef.current.rotation.y = 0.2
      groupRef.current.rotation.z = 0
    }
  })

  return (
    <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.25}>
      <group ref={groupRef} position={[0, -0.15, 0]}>
        {/* ================================================================= */}
        {/* 1. ARTISANAL CERAMIC COUPE PLATE                                  */}
        {/* ================================================================= */}
        {/* Deep coupe plate rim */}
        <mesh position={[0, -0.65, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[1.75, 1.45, 0.22, 64]} />
          <meshStandardMaterial
            color="#14161a"
            roughness={0.4}
            metalness={0.15}
            envMapIntensity={0.8}
          />
        </mesh>

        {/* Satin ceramic well inlay (the eating surface) */}
        <mesh position={[0, -0.53, 0]} receiveShadow>
          <cylinderGeometry args={[1.48, 1.48, 0.04, 64]} />
          <meshStandardMaterial
            color="#1a1d24"
            roughness={0.3}
            metalness={0.1}
          />
        </mesh>

        {/* Subtle handcrafted gold ceramic rim accent */}
        <mesh position={[0, -0.53, 0]}>
          <torusGeometry args={[1.72, 0.012, 16, 64]} />
          <meshStandardMaterial
            color="#d4af37"
            metalness={0.85}
            roughness={0.25}
          />
        </mesh>

        {/* ================================================================= */}
        {/* 2. MAIN ENTRÉE: PAN-SEARED GOURMET FILLET                          */}
        {/* ================================================================= */}
        <group position={[-0.1, -0.38, -0.05]} rotation={[0, 0.35, 0]}>
          {/* Fillet Body (Tender salmon/steak interior) */}
          <mesh position={[0, 0, 0]} castShadow receiveShadow>
            <boxGeometry args={[0.72, 0.22, 0.48]} />
            <meshStandardMaterial
              color="#e06242"
              roughness={0.4}
              metalness={0.05}
            />
          </mesh>

          {/* Golden caramelized seared crust on top */}
          <mesh position={[0, 0.115, 0]} castShadow>
            <boxGeometry args={[0.74, 0.02, 0.5]} />
            <meshStandardMaterial
              color="#782d16"
              roughness={0.2}
              metalness={0.1}
            />
          </mesh>

          {/* Caramelized glaze lacquer shine layer */}
          <mesh position={[0, 0.126, 0]}>
            <boxGeometry args={[0.68, 0.005, 0.44]} />
            <meshStandardMaterial
              color="#d46538"
              roughness={0.08}
              metalness={0.3}
              transparent
              opacity={0.8}
            />
          </mesh>

          {/* Sear marks across the crust */}
          {[-0.2, -0.05, 0.1, 0.25].map((pos, idx) => (
            <mesh key={idx} position={[pos, 0.13, 0]} rotation={[0, 0.2, 0]}>
              <boxGeometry args={[0.025, 0.005, 0.4]} />
              <meshStandardMaterial color="#2a0d05" roughness={0.9} />
            </mesh>
          ))}

          {/* Fresh dill & microgreen herb sprig atop fillet */}
          <group position={[0.05, 0.15, -0.05]} rotation={[0.2, -0.4, 0.3]}>
            <mesh>
              <cylinderGeometry args={[0.008, 0.008, 0.22, 8]} />
              <meshStandardMaterial color="#2e6930" roughness={0.5} />
            </mesh>
            {[-0.06, 0, 0.06].map((p, i) => (
              <mesh key={i} position={[0, p, 0]} rotation={[0, 0, Math.PI / 3]}>
                <boxGeometry args={[0.08, 0.015, 0.005]} />
                <meshStandardMaterial color="#4ade80" roughness={0.4} />
              </mesh>
            ))}
          </group>
        </group>

        {/* ================================================================= */}
        {/* 3. SAUCIER PURÉE SWIRL & REDUCTION GLOSS                          */}
        {/* ================================================================= */}
        <mesh geometry={saucierCurveMesh} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#f59e0b"
            emissive="#ea580c"
            emissiveIntensity={0.25}
            roughness={0.12}
            metalness={0.15}
          />
        </mesh>

        {/* Ruby glaze reduction drops alongside the swirl */}
        {[
          { pos: [-0.65, -0.47, 0.55], r: 0.04 },
          { pos: [-0.4, -0.47, 0.95], r: 0.032 },
          { pos: [0.1, -0.47, 0.98], r: 0.038 },
          { pos: [0.65, -0.47, 0.5], r: 0.03 },
          { pos: [0.85, -0.47, 0.05], r: 0.025 },
        ].map((drop, i) => (
          <mesh key={i} position={drop.pos as [number, number, number]}>
            <sphereGeometry args={[drop.r, 16, 16]} />
            <meshStandardMaterial
              color="#991b1b"
              roughness={0.05}
              metalness={0.2}
            />
          </mesh>
        ))}

        {/* ================================================================= */}
        {/* 4. CHARRED ASPARAGUS SPEARS & WILD MUSHROOMS                      */}
        {/* ================================================================= */}
        {/* Asparagus spear 1 */}
        <mesh position={[0.3, -0.43, -0.25]} rotation={[0.08, 0.7, 0.05]} castShadow>
          <cylinderGeometry args={[0.026, 0.034, 0.85, 12]} />
          <meshStandardMaterial color="#365314" roughness={0.45} />
        </mesh>

        {/* Asparagus spear 2 (crossing slightly) */}
        <mesh position={[0.36, -0.41, -0.18]} rotation={[-0.05, 0.85, -0.04]} castShadow>
          <cylinderGeometry args={[0.024, 0.032, 0.8, 12]} />
          <meshStandardMaterial color="#4d7c0f" roughness={0.45} />
        </mesh>

        {/* Charred tips */}
        <mesh position={[0.62, -0.41, 0.06]} rotation={[0.08, 0.7, 0.05]}>
          <cylinderGeometry args={[0.022, 0.026, 0.15, 12]} />
          <meshStandardMaterial color="#1a2e05" roughness={0.7} />
        </mesh>

        {/* Sautéed King Oyster Mushroom Cap */}
        <group position={[-0.6, -0.42, -0.2]} rotation={[0.2, 0.4, -0.1]}>
          <mesh castShadow>
            <cylinderGeometry args={[0.16, 0.14, 0.08, 24]} />
            <meshStandardMaterial color="#d4b996" roughness={0.5} />
          </mesh>
          <mesh position={[0, 0.045, 0]}>
            <cylinderGeometry args={[0.165, 0.165, 0.015, 24]} />
            <meshStandardMaterial color="#854d0e" roughness={0.3} />
          </mesh>
        </group>

        {/* Roasted baby carrot with butter glaze */}
        <mesh position={[-0.45, -0.44, 0.2]} rotation={[0, -0.6, 0.05]} castShadow>
          <coneGeometry args={[0.05, 0.55, 16]} />
          <meshStandardMaterial
            color="#ea580c"
            roughness={0.2}
            metalness={0.1}
          />
        </mesh>

        {/* ================================================================= */}
        {/* 5. AROMATIC STEAM PARTICLES (Delicate hot food vapors)            */}
        {/* ================================================================= */}
        <group ref={steamGroupRef} position={[0, -0.3, 0]}>
          {STEAM_DATA.map((item, idx) => (
            <mesh key={idx} position={[item.x, item.baseY, item.z]}>
              <sphereGeometry args={[item.size, 12, 12]} />
              <meshBasicMaterial
                color="#ffffff"
                transparent
                opacity={0.15}
                depthWrite={false}
              />
            </mesh>
          ))}
        </group>
      </group>
    </Float>
  )
}

export const GourmetDish3D: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[460px] sm:min-h-[540px] lg:min-h-[620px] relative select-none">
      <Canvas
        camera={{ position: [0, 1.1, 3.4], fov: 40 }}
        dpr={[1, 1.8]} // Optimized DPR for buttery 60fps
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.1,
        }}
        shadows
      >
        {/* Studio Food Photography Lighting Setup */}
        {/* Soft Warm Ambient */}
        <ambientLight intensity={0.7} color="#fff8f0" />

        {/* Key Overhead Softbox (Warm culinary light creating gentle shadows) */}
        <directionalLight
          position={[3.5, 6, 4]}
          intensity={2.2}
          color="#fff4e6"
          castShadow
          shadow-mapSize={[1024, 1024]}
          shadow-bias={-0.0001}
        />

        {/* Cool Rim Light (Emphasizing plate rim and glazed edges) */}
        <directionalLight
          position={[-4, 3, -3]}
          intensity={1.2}
          color="#93c5fd"
        />

        {/* Front-fill Warm Specular Accent */}
        <pointLight position={[0, 1.5, 2.5]} intensity={1.5} color="#ffedd5" distance={6} />

        {/* Subtle Underplate Warmth */}
        <pointLight position={[0, -1.5, 0]} intensity={0.4} color="#ea580c" distance={4} />

        {/* Plated Culinary Sculpture */}
        <GourmetPlatingScene />

        {/* Ground Contact Shadow */}
        <ContactShadows
          position={[0, -0.85, 0]}
          opacity={0.65}
          scale={4.5}
          blur={1.8}
          far={2.2}
          color="#000000"
        />
      </Canvas>

      {/* Subtle Culinary Craft Badge */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#121418]/80 backdrop-blur-md text-[11px] text-[#f3f4f6]/70 border border-white/10 flex items-center gap-2 pointer-events-none tracking-wide">
        <span className="w-1.5 h-1.5 rounded-full bg-[#ff5733] animate-pulse" />
        <span>Artisanal Seared King Salmon • Saffron Reduction</span>
      </div>
    </div>
  )
}

export default GourmetDish3D
