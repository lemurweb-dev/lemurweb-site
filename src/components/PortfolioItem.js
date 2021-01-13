import React from "react"
import Image from "gatsby-image"

const PortfolioItem = ({ id, title, subtitle, image, link, description }) => {
  return (
    <div id={id} className="hero is-primary-light is-medium">
      <div className="hero-body py-5">
        <div className="container">
          <div className="card">
            <div className="card-content has-text-centered p-3">
              <div className="columns is-vcentered">
                <div className="column is-4">
                  <a
                    className="has-text-weight-semibold is-size-5"
                    href={link}
                  >
                    {title}
                  </a>
                  <p className="has-text-primary-light mb-2 mt-4">{subtitle}</p>
                  <div className="has-text-light is-size-7 mt-4">{description}</div>
                </div>
                <div className="column">
                  <Image fluid={image} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioItem
