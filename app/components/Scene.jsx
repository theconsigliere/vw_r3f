"use client"
import { Canvas } from "@react-three/fiber"
import { Shape1, Shape2, Shape3, Shape4 } from "./Shapes"
import { Perf } from "r3f-perf"
import { Environment, OrbitControls } from "@react-three/drei"
import { useControls } from "leva"
import { useEffect } from "react"

export default function Scene(props) {
  const { slide, setSlide, slides } = props

  const lightProps = useControls("Light Props", {
    position: { value: [-3, -2, 0.8], step: 0.1 },
    intensity: { value: 80, step: 0.1 },
  })

  useEffect(() => {
    console.log("slide", slide)
  }, [slide])

  return (
    <Canvas dpr={[1, 2]} style={{ backgroundColor: "transparent" }}>
      <Perf position={"bottom-left"} />
      <ambientLight {...lightProps} />
      <Environment preset="warehouse" />
      <OrbitControls makeDefault />
      <Shape1 />
    </Canvas>
  )
}
