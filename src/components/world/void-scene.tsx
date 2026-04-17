"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { MeshDistortMaterial, Float } from "@react-three/drei"
import * as THREE from "three"

const Particles = ({ count = 1200 }: { count?: number }) => {
  const mesh = useRef<THREE.Points>(null)

  const [positions, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const siz = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 0] = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10
      siz[i] = Math.random() * 0.04 + 0.01
    }
    return [pos, siz]
  }, [count])

  useFrame((_, delta) => {
    if (!mesh.current) return
    mesh.current.rotation.y += delta * 0.02
    mesh.current.rotation.x += delta * 0.005
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#00D1FF"
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

const CoreOrb = () => {
  const mesh = useRef<THREE.Mesh>(null)

  useFrame((_, delta) => {
    if (!mesh.current) return
    mesh.current.rotation.x += delta * 0.3
    mesh.current.rotation.y += delta * 0.2
  })

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.8}>
      <mesh ref={mesh} scale={1.4}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color="#00D1FF"
          emissive="#003d4d"
          emissiveIntensity={0.8}
          distort={0.3}
          speed={2}
          roughness={0.1}
          metalness={0.9}
          wireframe
        />
      </mesh>
    </Float>
  )
}

const AmbientRing = () => {
  const mesh = useRef<THREE.Mesh>(null)
  useFrame((_, delta) => {
    if (!mesh.current) return
    mesh.current.rotation.z += delta * 0.1
    mesh.current.rotation.x += delta * 0.05
  })
  return (
    <mesh ref={mesh} scale={2.2}>
      <torusGeometry args={[1, 0.008, 8, 120]} />
      <meshBasicMaterial color="#00D1FF" transparent opacity={0.15} />
    </mesh>
  )
}

export const VoidScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60 }}
      style={{ background: "transparent" }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.2} />
      <pointLight position={[0, 0, 3]} intensity={2} color="#00D1FF" />
      <pointLight position={[-5, 5, -5]} intensity={0.5} color="#BF5FFF" />
      <Particles />
      <CoreOrb />
      <AmbientRing />
    </Canvas>
  )
}
