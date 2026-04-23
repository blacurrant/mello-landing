"use client"

import React, { useRef, useEffect, forwardRef, ReactNode } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { EffectComposer, Bloom, Vignette, Noise } from "@react-three/postprocessing"
import { BlendFunction, KernelSize } from "postprocessing"
import * as THREE from "three"
import { Trees } from "./trees"
import { Character } from "./character"

class ErrorBoundary extends React.Component<
  { children: ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: ReactNode }) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("[ErrorBoundary] Caught error:", error.message)
    console.error("[ErrorBoundary] Component stack:", errorInfo.componentStack)
  }

  render() {
    if (this.state.hasError) {
      return <div style={{ color: "red", padding: "20px" }}>Error: {this.state.error?.message}</div>
    }
    return this.props.children
  }
}

const TOTAL_PAGES = 6
const CAMERA_Z_END = -85

const lerp = (a: number, b: number, t: number) => a + (b - a) * t

const CameraRig = ({ scrollRef, scrollSpeed }: {
  scrollRef: React.MutableRefObject<number>
  scrollSpeed: React.MutableRefObject<number>
}) => {
  const { camera } = useThree()
  const prevProgress = useRef(0)

  useFrame((_, delta) => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight
    const raw = maxScroll > 0 ? scrollRef.current / maxScroll : 0
    const progress = Math.max(0, Math.min(1, raw))

    scrollSpeed.current = lerp(scrollSpeed.current, (progress - prevProgress.current) / delta, 0.1)
    prevProgress.current = progress

    const targetZ = progress * CAMERA_Z_END
    const targetY = lerp(1.6, 3.2, progress)
    const breathX = Math.sin(Date.now() * 0.0004) * 0.12

    camera.position.z = lerp(camera.position.z, targetZ, 0.06)
    camera.position.y = lerp(camera.position.y, targetY, 0.04)
    camera.position.x = lerp(camera.position.x, breathX, 0.03)
    camera.lookAt(camera.position.x * 0.3, camera.position.y - 0.3, camera.position.z - 8)
  })

  return null
}

const CharacterRig = ({ scrollRef, scrollSpeed }: {
  scrollRef: React.MutableRefObject<number>
  scrollSpeed: React.MutableRefObject<number>
}) => {
  const { camera } = useThree()
  const groupRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (!groupRef.current) return
    groupRef.current.position.z = lerp(groupRef.current.position.z, camera.position.z - 1.8, 0.04)
    groupRef.current.position.y = 0
  })

  return (
    <group ref={groupRef}>
      <Character scrollSpeed={scrollSpeed} />
    </group>
  )
}

const SunMesh = forwardRef<THREE.Mesh>((_, ref) => (
  <mesh ref={ref} position={[12, 28, -30]}>
    <planeGeometry args={[4, 4]} />
    <meshBasicMaterial color="#C8F0D8" transparent opacity={0.9} side={THREE.DoubleSide} />
  </mesh>
))
SunMesh.displayName = "SunMesh"

const Ground = () => (
  <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, -50]} receiveShadow>
    <planeGeometry args={[60, 120]} />
    <meshStandardMaterial color="#070F08" roughness={1} metalness={0} />
  </mesh>
)

const Lights = () => (
  <>
    <ambientLight intensity={0.12} color="#1A3A28" />
    <directionalLight
      position={[14, 30, -20]}
      intensity={2.8}
      color="#C8F0D8"
      castShadow
      shadow-mapSize={[512, 512]}
    />
    <pointLight position={[0, 2, -5]} intensity={0.3} color="#4AFF91" distance={20} />
    <pointLight position={[-6, 4, -40]} intensity={0.4} color="#2A6A4A" distance={30} />
    <pointLight position={[8, 6, -70]} intensity={0.5} color="#C8F0D8" distance={40} />
  </>
)

const Scene = ({ scrollRef, scrollSpeed }: {
  scrollRef: React.MutableRefObject<number>
  scrollSpeed: React.MutableRefObject<number>
}) => {
  const sunRef = useRef<THREE.Mesh>(null)

  return (
    <>
      <color attach="background" args={["#060C08"]} />
      <fog attach="fog" args={["#0A1A10", 18, 70]} />
      <Lights />
      <Ground />
      <Trees />
      <SunMesh ref={sunRef} />
      <CharacterRig scrollRef={scrollRef} scrollSpeed={scrollSpeed} />
      <EffectComposer>
        <Bloom
          intensity={1.6}
          luminanceThreshold={0.15}
          luminanceSmoothing={0.9}
          kernelSize={KernelSize.MEDIUM}
          blendFunction={BlendFunction.ADD}
        />
        <Noise opacity={0.035} blendFunction={BlendFunction.SOFT_LIGHT} />
        <Vignette darkness={0.75} offset={0.25} blendFunction={BlendFunction.NORMAL} />
      </EffectComposer>
    </>
  )
}

export const ForestScene = () => {
  const scrollRef = useRef(0)
  const scrollSpeed = useRef(0)

  useEffect(() => {
    const onScroll = () => { scrollRef.current = window.scrollY }
    const onError = (event: ErrorEvent) => {
      console.error("[ForestScene] Global error:", event.message, event.filename, event.lineno, event.colno)
      console.error("[ForestScene] Stack:", event.error?.stack)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("error", onError)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("error", onError)
    }
  }, [])

  return (
    <ErrorBoundary>
      <Canvas
        shadows
        dpr={[1, 1.5]}
        camera={{ position: [0, 1.6, 0], fov: 72, near: 0.1, far: 200 }}
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.2, powerPreference: "high-performance" }}
        style={{ width: "100%", height: "100%" }}
        onCreated={({ gl }) => {
          const canvas = gl.domElement
          const handleContextLost = (e: Event) => {
            e.preventDefault()
            console.warn("WebGL context lost – waiting for browser to restore it")
          }
          canvas.addEventListener("webglcontextlost", handleContextLost)
        }}
      >
        <Scene scrollRef={scrollRef} scrollSpeed={scrollSpeed} />
        <CameraRig scrollRef={scrollRef} scrollSpeed={scrollSpeed} />
      </Canvas>
    </ErrorBoundary>
  )
}
