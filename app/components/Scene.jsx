"use client"
import { Canvas } from "@react-three/fiber"
import { Model } from "./Model"
import { Perf } from "r3f-perf"
import { Environment, OrbitControls } from "@react-three/drei"
import { useControls } from "leva"

export default function Scene() {
  const modelProps = useControls("Model Props", {
    rotation: { value: 1, min: 0.0, max: 10 },
  })

  return (
    <Canvas dpr={[1, 2]} style={{ backgroundColor: "#141414" }}>
      <Perf position={"bottom-left"} />
      {/* <directionalLight position={[0, 3, -2]} intensity={3} /> */}
      {/* <Environment preset="night" /> */}
      <OrbitControls makeDefault />
      <Model {...modelProps} />
    </Canvas>
  )
}
