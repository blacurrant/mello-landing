"use client"

import { useMemo, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

const COUNT = 360

export const Trees = () => {
  const trunkRef = useRef<THREE.InstancedMesh>(null)

  const dummy = useMemo(() => new THREE.Object3D(), [])

  const treeData = useMemo(() => {
    const data: { x: number; z: number; height: number; radius: number; lean: number }[] = []
    const rng = (min: number, max: number) => Math.random() * (max - min) + min

    for (let i = 0; i < COUNT; i++) {
      let x: number
      do {
        x = rng(-22, 22)
      } while (Math.abs(x) < 1.8)

      data.push({
        x,
        z: rng(-4, -110),
        height: rng(9, 24),
        radius: rng(0.08, 0.28),
        lean: rng(-0.04, 0.04),
      })
    }
    return data
  }, [])

  // set instance matrices once
  useMemo(() => {
    if (!trunkRef.current) return
    treeData.forEach((t, i) => {
      dummy.position.set(t.x, t.height / 2, t.z)
      dummy.rotation.z = t.lean
      dummy.scale.set(t.radius, t.height / 2, t.radius)
      dummy.updateMatrix()
      trunkRef.current!.setMatrixAt(i, dummy.matrix)
    })
    trunkRef.current.instanceMatrix.needsUpdate = true
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [treeData])

  // slight ambient sway
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    treeData.forEach((tree, i) => {
      dummy.position.set(tree.x, tree.height / 2, tree.z)
      dummy.rotation.z = tree.lean + Math.sin(t * 0.3 + i * 0.5) * 0.008
      dummy.scale.set(tree.radius, tree.height / 2, tree.radius)
      dummy.updateMatrix()
      trunkRef.current!.setMatrixAt(i, dummy.matrix)
    })
    trunkRef.current!.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={trunkRef} args={[undefined, undefined, COUNT]} castShadow receiveShadow>
      <cylinderGeometry args={[1, 1.3, 2, 8]} />
      <meshStandardMaterial
        color="#0E1A0F"
        roughness={0.95}
        metalness={0}
        envMapIntensity={0.1}
      />
    </instancedMesh>
  )
}
