import Image from "next/image"
import styles from "../styles/loading.module.css"

export default function Loading() {
  return (
    <div className={styles.loadingBackground}>
      <div className={styles.loadingTextSection}>
        <Image
          src="/assets/vw-logo.svg"
          alt="Victor Work Logo"
          className={styles.mxkLogo}
          width={100}
          height={100}
          priority
        />
        <h3 className={`${styles.text}`}>Loading ...</h3>
      </div>
    </div>
  )
}
