import React from "react"
import Image from "gatsby-image"

const PortfolioItem = ({ id, title, subtitle, image, link, description }) => {
  return (
    <div id={id} className="hero is-primary-light is-medium">
      <div className="hero-body py-6">
        <div className="card">
          <div className="card-image">
            <Image fluid={image} />
          </div>
          <div className="card-content has-text-centered">
            <a className="has-text-weight-semibold is-size-5-desktop" href={link}>
              {title}
            </a>
            <p className="has-text-primary-light mb-2">{subtitle}</p>
            <div className="has-text-light">{description}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioItem
