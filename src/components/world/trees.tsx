"use client"

import { useEffect, useMemo, useRef } from "react"
import * as THREE from "three"

const COUNT = 200

export const Trees = () => {
  console.log("[Trees] component mounted")
  const trunkRef = useRef<THREE.InstancedMesh>(null)

  const dummy = useMemo(() => {
    console.log("[Trees] creating dummy Object3D")
    return new THREE.Object3D()
  }, [])

  const treeData = useMemo(() => {
    console.log("[Trees] generating treeData…")
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
    console.log(`[Trees] treeData ready, count=${data.length}`)
    return data
  }, [])

  // set instance matrices once after mount (useEffect so trunkRef.current is populated)
  useEffect(() => {
    console.log("[Trees] useEffect starting, treeData:", treeData)
    const mesh = trunkRef.current
    console.log("[Trees] useEffect matrix init — trunkRef.current:", mesh)
    if (!mesh) {
      console.warn("[Trees] useEffect matrix init skipped: ref is still null after mount!")
      return
    }
    if (!treeData || !Array.isArray(treeData)) {
      console.error("[Trees] ERROR: treeData is invalid:", treeData)
      return
    }
    console.log("[Trees] setting instance matrices for", treeData.length, "trees")
    try {
      treeData.forEach((t, i) => {
        if (!t) {
          console.error(`[Trees] ERROR: tree at index ${i} is null/undefined`)
          return
        }
        dummy.position.set(t.x, t.height / 2, t.z)
        dummy.rotation.z = t.lean
        dummy.scale.set(t.radius, t.height / 2, t.radius)
        dummy.updateMatrix()
        mesh.setMatrixAt(i, dummy.matrix)
      })
      if (!mesh.instanceMatrix) {
        console.error("[Trees] ERROR: mesh.instanceMatrix is null after setMatrixAt calls")
        return
      }
      mesh.instanceMatrix.needsUpdate = true
      console.log("[Trees] instance matrices set ✓")
    } catch (e) {
      console.error("[Trees] ERROR during matrix setup:", e)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [treeData])

  // sway via shader (avoid per-frame matrix updates)

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
