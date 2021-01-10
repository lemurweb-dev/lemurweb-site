import { Link } from "gatsby"
import Img from "gatsby-image"
import React from "react"

const HomeSection = ({ id, title, subtitle, body, image }) => {
  return (
    <>
      <section id={id} className="hero is-secondary is-medium">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column">
                <Img fluid={image} />
              </div>
              <div className="column">
                <h2 className="subtitle is-size-4">{title}</h2>
                <p className="subtitle is-size-5">{subtitle}</p>
                {body}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeSection
