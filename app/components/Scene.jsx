"use client"
import { Canvas } from "@react-three/fiber"
import { Shape1 } from "./Shape1"
import { Perf } from "r3f-perf"
import { Environment, OrbitControls } from "@react-three/drei"
import { useControls } from "leva"

export default function Scene() {
  const lightProps = useControls("Light Props", {
    position: { value: [-3, -2, 0.8], step: 0.1 },
    intensity: { value: 10, step: 0.1 },
  })

  return (
    <Canvas dpr={[1, 2]} style={{ backgroundColor: "transparent" }}>
      <Perf position={"bottom-left"} />
      <directionalLight {...lightProps} />
      {/* <Environment preset="night" /> */}
      <OrbitControls makeDefault />
      <Shape1 />
    </Canvas>
  )
}
