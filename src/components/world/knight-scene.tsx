"use client"

import { useRef, useEffect, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, useAnimations } from "@react-three/drei"
import * as THREE from "three"

// ─── Knight GLB ────────────────────────────────────────────────────────────────
function KnightModel() {
  const group = useRef<THREE.Group>(null)
  const { scene, animations } = useGLTF("/stelae_knight.glb")
  const { actions, names } = useAnimations(animations, group)

  // Play first animation if the model has any
  useEffect(() => {
    if (names.length > 0) {
      console.log("[Knight] animations found:", names)
      actions[names[0]]?.reset().fadeIn(0.4).play()
    } else {
      console.log("[Knight] no animations — using procedural idle")
    }
  }, [actions, names])

  // Subtle idle motion when no animation is available
  useFrame(({ clock }) => {
    if (!group.current) return
    const t = clock.getElapsedTime()
    // gentle slow sway
    group.current.rotation.y = Math.sin(t * 0.22) * 0.12
    // micro breathing bob
    group.current.position.y = -1.5 + Math.sin(t * 0.55) * 0.025
  })

  return (
    <group ref={group} position={[0.7, -1.5, 0]} scale={1.15}>
      <primitive object={scene} />
    </group>
  )
}

// ─── Elden Ring–style lighting ─────────────────────────────────────────────────
function EldenLights() {
  return (
    <>
      {/* Near-black ambient — deep shadows */}
      <ambientLight intensity={0.25} color="#1C0E00" />

      {/* Golden key light — upper left, mimics the golden order sun */}
      <directionalLight
        position={[-2.5, 5, 3]}
        intensity={3.8}
        color="#D4A017"
      />

      {/* Cold blue rim light — right side, metallic sheen */}
      <directionalLight
        position={[4, 2, -2]}
        intensity={1.4}
        color="#3355BB"
      />

      {/* Warm ember fill — ground level */}
      <pointLight position={[0, -0.5, 2.5]} intensity={1.8} color="#FF7700" distance={7} />

      {/* Soft golden halo above the model */}
      <pointLight position={[-0.5, 3.5, 1]} intensity={1.0} color="#FFD700" distance={12} />
    </>
  )
}

// ─── Fallback while GLB loads ──────────────────────────────────────────────────
function KnightFallback() {
  return (
    <mesh position={[0.7, -0.5, 0]}>
      <capsuleGeometry args={[0.15, 0.8, 4, 8]} />
      <meshStandardMaterial color="#2a1800" roughness={0.8} />
    </mesh>
  )
}

// ─── Exported canvas ───────────────────────────────────────────────────────────
export function KnightScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0.4, 3.6], fov: 48, near: 0.1, far: 50 }}
      gl={{
        alpha: true,               // transparent — Elden Ring bg shows through
        antialias: true,
        powerPreference: "high-performance",
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.5,
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <EldenLights />
      <Suspense fallback={<KnightFallback />}>
        <KnightModel />
      </Suspense>
    </Canvas>
  )
}
