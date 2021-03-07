import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const HomeSection = ({ id, title, subtitle, head, body, image, odd }) => {

  return (
    <section id={id}>
      <div className="hero is-medium">
        <div className="hero-body py-5">
          <div className="container">
            <div
              className={`columns is-vcentered is-centered my-4 ${
                odd ? "is-flex-direction-row-reverse" : ""
              }`}
            >
              {image && (
                <div className="column is-5 p-6">
                  <GatsbyImage className="mx-6" image={image} alt={`home-${title}`} />
                </div>
              )}
              <div className={`column is-5 ${
                odd ? "has-text-right" : ""
              }`}>
                <div className="content">
                  <h2 className="home-section-title subtitle is-size-3-touch is-size-2-desktop is-family-secondary has-text-weight-normal mb-4 ">
                    {title}
                  </h2>
                  <div className="home-section-subtitle subtitle is-size-6-touch is-size-5-desktop">
                    {subtitle}
                  </div>
                  <div className="home-section-head has-text-weight-bold mb-1">{head}</div>
                  {body}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeSection
