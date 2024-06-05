import Image from "next/image"

import Texts from "./Texts"
import Marquees from "./Marquees"

export default function Content(props) {
  // get slides state

  // get slide and setSlide from props
  const { slide, setSlide, slides } = props

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
              <button
                className="trgs__trg prev"
                onClick={() => setSlide((slide + 1) % slides.length)}
              >
                <Image
                  src="/assets/up-arrow.svg"
                  alt="Victor Work Logo"
                  className="LogoImg"
                  width={50}
                  height={50}
                  priority
                />
              </button>

              <button
                className="trgs__trg next"
                // going down
                onClick={() =>
                  setSlide((slide + 1 + slides.length) % slides.length)
                }
              >
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
