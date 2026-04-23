"use client"

import { useRef, useEffect, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, useAnimations } from "@react-three/drei"
import * as THREE from "three"

const lerp = (a: number, b: number, t: number) => a + (b - a) * t

function interpolate(p: number, keys: [number, number][]): number {
  for (let i = 0; i < keys.length - 1; i++) {
    const [p0, v0] = keys[i]
    const [p1, v1] = keys[i + 1]
    if (p <= p1) {
      const t = Math.max(0, Math.min(1, (p - p0) / (p1 - p0)))
      return v0 + (v1 - v0) * t
    }
  }
  return keys[keys.length - 1][1]
}

// ── Scroll keyframes ───────────────────────────────────────────────
//    Each entry: [scrollProgress 0→1, value]
//
//    HERO     0.00 – 0.20  centered, facing camera, mysterious
//    ABOUT    0.20 – 0.40  turns away, shifts left (makes room for text)
//    SKILLS   0.40 – 0.60  full side profile, steps closer
//    WORK     0.60 – 0.80  turns back, slight retreat
//    CONTACT  0.80 – 1.00  spins to face you, fills frame

const ROT_Y:  [number, number][] = [
  [0.00,  0.0 ],
  [0.20,  0.0 ],
  [0.40,  0.8 ],
  [0.60,  1.55],
  [0.80,  1.55],
  [1.00, -0.1 ],
]

const SCALE:  [number, number][] = [
  [0.00, 1.15],
  [0.20, 1.20],
  [0.40, 1.10],
  [0.60, 1.35],
  [0.80, 1.20],
  [1.00, 1.65],
]

const POS_X:  [number, number][] = [
  [0.00,  0.5 ],
  [0.20,  0.5 ],
  [0.40, -0.5 ],
  [0.60,  0.1 ],
  [0.80,  0.9 ],
  [1.00,  0.0 ],
]

const POS_Y:  [number, number][] = [
  [0.00, -1.50],
  [0.40, -1.50],
  [0.60, -1.45],
  [1.00, -1.35],
]

const ROT_X:  [number, number][] = [
  [0.00,  0.00],
  [0.60,  0.00],
  [0.80,  0.04],
  [1.00, -0.06],
]

function KnightModel({ scrollProgress }: { scrollProgress: React.MutableRefObject<number> }) {
  const group = useRef<THREE.Group>(null)
  const { scene, animations } = useGLTF("/stelae_knight.glb")
  const { actions, names } = useAnimations(animations, group)

  useEffect(() => {
    if (names.length > 0) {
      actions[names[0]]?.reset().fadeIn(0.4).play()
    }
  }, [actions, names])

  useFrame(({ clock }) => {
    if (!group.current) return
    const p = scrollProgress.current
    const t = clock.getElapsedTime()

    const targetRotY  = interpolate(p, ROT_Y)
    const targetScale = interpolate(p, SCALE)
    const targetPosX  = interpolate(p, POS_X)
    const targetPosY  = interpolate(p, POS_Y)
    const targetRotX  = interpolate(p, ROT_X)

    const speed = 0.05
    group.current.rotation.y = lerp(group.current.rotation.y, targetRotY + Math.sin(t * 0.22) * 0.05, speed)
    group.current.rotation.x = lerp(group.current.rotation.x, targetRotX, speed)
    group.current.scale.setScalar(lerp(group.current.scale.x, targetScale, speed))
    group.current.position.x = lerp(group.current.position.x, targetPosX, speed)
    group.current.position.y = lerp(group.current.position.y, targetPosY + Math.sin(t * 0.55) * 0.022, speed)
  })

  return (
    <group ref={group} position={[0.5, -1.5, 0]} scale={1.15}>
      <primitive object={scene} />
    </group>
  )
}

function EldenLights({ scrollProgress }: { scrollProgress: React.MutableRefObject<number> }) {
  const goldRef  = useRef<THREE.DirectionalLight>(null)
  const blueRef  = useRef<THREE.DirectionalLight>(null)
  const emberRef = useRef<THREE.PointLight>(null)

  useFrame(() => {
    const p = scrollProgress.current
    // Gold intensifies on contact section
    const goldBoost = lerp(3.8, 5.5, Math.max(0, (p - 0.8) / 0.2))
    const blueBoost = lerp(1.4, 0.6, Math.max(0, (p - 0.8) / 0.2))
    const emberBoost = lerp(1.8, 3.5, Math.max(0, (p - 0.8) / 0.2))
    if (goldRef.current)  goldRef.current.intensity  = goldBoost
    if (blueRef.current)  blueRef.current.intensity  = blueBoost
    if (emberRef.current) emberRef.current.intensity = emberBoost
  })

  return (
    <>
      <ambientLight intensity={0.25} color="#1C0E00" />
      <directionalLight ref={goldRef}  position={[-2.5, 5, 3]}   intensity={3.8} color="#D4A017" />
      <directionalLight ref={blueRef}  position={[4, 2, -2]}     intensity={1.4} color="#3355BB" />
      <pointLight       ref={emberRef} position={[0, -0.5, 2.5]} intensity={1.8} color="#FF7700" distance={7} />
      <pointLight                      position={[-0.5, 3.5, 1]} intensity={1.0} color="#FFD700" distance={12} />
    </>
  )
}

function KnightFallback() {
  return (
    <mesh position={[0.5, -0.5, 0]}>
      <capsuleGeometry args={[0.15, 0.8, 4, 8]} />
      <meshStandardMaterial color="#2a1800" roughness={0.8} />
    </mesh>
  )
}

export function KnightScene() {
  const scrollProgress = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      scrollProgress.current = max > 0 ? window.scrollY / max : 0
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0.4, 3.6], fov: 48, near: 0.1, far: 50 }}
      gl={{
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.5,
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <EldenLights scrollProgress={scrollProgress} />
      <Suspense fallback={<KnightFallback />}>
        <KnightModel scrollProgress={scrollProgress} />
      </Suspense>
    </Canvas>
  )
}
