"use client"

import dynamic from "next/dynamic"
import { useState } from "react"

import styles from "./page.module.css"
import Branding from "./components/Branding"
import Loading from "./components/Loading"
import Content from "./components/Content"

const Scene = dynamic(() => import("./components/Scene"), {
  ssr: false,
  loading: () => <Loading />,
})

export default function Home() {
  const [slide, setSlide] = useState(0)

  const slides = [
    {
      title: "E-commerce",
      desc: "An e-commerce website is an online platform for buying and selling products or services, facilitating transactions over the internet.",
    },
    {
      title: "Storytelling",
      desc: " storytelling website is an online platform that hosts and shares diverse narratives, engaging users with captivating stories in various forms.",
    },
    {
      title: "Showcase",
      desc: "A showcase website is an online space for displaying and highlighting creative work, portfolios, or products to present one's skills or offerings.",
    },
    {
      title: "Corporative",
      desc: "A corporate website serves as a digital hub for a company, providing information about its business, services, products, and brand identity.",
    },
  ]

  return (
    <main className={styles.main}>
      <Branding />
      <Content {...{ slide, setSlide, slides }} />
      <Scene {...{ slide, setSlide, slides }} />
    </main>
  )
}
