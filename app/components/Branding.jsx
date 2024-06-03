import Image from "next/image"

export default function Branding() {
  return (
    <>
      <a
        href="https://vwlab.io/products/web-animations"
        target="_blank"
        rel="noopener noreferrer"
        className="logo"
      >
        <Image
          src="/assets/vw-logo.svg"
          alt="Victor Work Logo"
          width={50}
          height={50}
          priority
        />
      </a>

      <a href="#" target="_blank" rel="noopener noreferrer" className="cta">
        <span>Get in Touch</span>
      </a>
    </>
  )
}
