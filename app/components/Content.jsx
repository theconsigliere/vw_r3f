import Image from "next/image"

import Texts from "./Texts"
import Marquees from "./Marquees"

export default function Content() {
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
    <div className="content">
      <div className="content__holder holder">
        <div className="bg">
          <div className="bg__grad"></div>
        </div>

        {/* MARQUEES */}
        <div className="marquees">
          <ul className="marquees__holder holder">
            {slides.map((slide, index) => (
              <Marquees key={index} title={slide.title} />
            ))}
          </ul>
        </div>

        {/* TEXTS */}
        <div className="texts">
          <ul className="texts__holder holder">
            {slides.map((slide, index) => (
              <Texts key={index} title={slide.title} desc={slide.desc} />
            ))}
          </ul>
        </div>

        {/* TRIGGERS */}
        <div className="trgs">
          <div className="trgs__holder holder">
            <>
              <button class="trgs__trg prev">
                <Image
                  src="/assets/up-arrow.svg"
                  alt="Victor Work Logo"
                  className="LogoImg"
                  width={50}
                  height={50}
                  priority
                />
              </button>

              <button class="trgs__trg next">
                <Image
                  src="/assets/down-arrow.svg"
                  alt="Victor Work Logo"
                  className="LogoImg"
                  width={50}
                  height={50}
                  priority
                />
              </button>
            </>
          </div>
        </div>
      </div>
    </div>
  )
}
