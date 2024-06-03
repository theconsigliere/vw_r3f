import { Archivo } from "next/font/google"
import "./globals.css"

const archivo = Archivo({
  weight: ["300", "400", "500"],
  variable: "--font-archivo",
  subsets: ["latin"],
})

export const metadata = {
  title: "VW Work",
  description: "Learn Web3D development with Victor Work",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${archivo.variable}`}>
      <body>{children}</body>
    </html>
  )
}
