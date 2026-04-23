"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"
import * as THREE from "three"

/*
  GLTF CHARACTER:
  ───────────────────────────────────────────────────────
  Add /public/models/character.glb to enable a real model.
  Good free sources:
  • sketchfab.com → search "cloaked anime figure" or "low poly character" → Free + Downloadable
  • mixamo.com → download any character as .glb (requires free account)
  • quaternius.com → free low-poly character packs
  ───────────────────────────────────────────────────────
*/
const HAS_GLTF = false

const ProceduralFigure = ({ scrollSpeed }: { scrollSpeed: React.MutableRefObject<number> }) => {
  const legLRef = useRef<THREE.Mesh>(null)
  const legRRef = useRef<THREE.Mesh>(null)
  const bodyRef = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    const speed = Math.abs(scrollSpeed.current)
    const swing = speed > 0.001 ? Math.sin(t * 8) * 0.4 : 0

    if (legLRef.current) legLRef.current.rotation.x = swing
    if (legRRef.current) legRRef.current.rotation.x = -swing
    if (bodyRef.current) bodyRef.current.rotation.z = speed > 0.001 ? Math.sin(t * 8) * 0.02 : 0
  })

  const mat = <meshStandardMaterial color="#050D07" roughness={1} metalness={0} />

  return (
    <group ref={bodyRef}>
      {/* cloak/body */}
      <mesh position={[0, 0.28, 0]}>
        <coneGeometry args={[0.12, 0.44, 6]} />
        {mat}
      </mesh>
      {/* head */}
      <mesh position={[0, 0.56, 0]}>
        <sphereGeometry args={[0.1, 6, 6]} />
        {mat}
      </mesh>
      {/* hood brim */}
      <mesh position={[0, 0.58, 0.04]} rotation={[0.3, 0, 0]}>
        <coneGeometry args={[0.12, 0.16, 6]} />
        {mat}
      </mesh>
      {/* legs */}
      <mesh ref={legLRef} position={[-0.05, 0.08, 0]}>
        <capsuleGeometry args={[0.03, 0.18, 2, 4]} />
        {mat}
      </mesh>
      <mesh ref={legRRef} position={[0.05, 0.08, 0]}>
        <capsuleGeometry args={[0.03, 0.18, 2, 4]} />
        {mat}
      </mesh>
    </group>
  )
}

export const Character = ({ scrollSpeed }: { scrollSpeed: React.MutableRefObject<number> }) => {
  return (
    <group position={[0, 0, -1.8]} scale={0.55}>
      {HAS_GLTF ? (
        <GltfCharacter />
      ) : (
        <ProceduralFigure scrollSpeed={scrollSpeed} />
      )}
    </group>
  )
}

const GltfCharacter = () => {
  const { scene } = useGLTF("/models/character.glb")
  return <primitive object={scene} scale={0.01} />
}
