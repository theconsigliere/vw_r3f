import dynamic from "next/dynamic"
import styles from "./page.module.css"
import Branding from "./components/Branding"
import Loading from "./components/Loading"
import Content from "./components/Content"

const Scene = dynamic(() => import("./components/Scene"), {
  ssr: false,
  loading: () => <Loading />,
})

export default function Home() {
  return (
    <main className={styles.main}>
      <Branding number={1} />
      <Content />
      {/* <Scene /> */}
    </main>
  )
}
