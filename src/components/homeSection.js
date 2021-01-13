import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const HomeSection = ({ id, title, subtitle, head, body, image, odd }) => {
  return (
    <section id={id}>
      <div className="hero is-medium">
        <div className="hero-body py-6">
          <div className="container">
            <div className={`columns is-vcentered my-5 ${odd?"is-flex-direction-row-reverse":""}`}>
              <div className="column is-5 p-6">
                <Img fluid={image} className="mx-6" />
              </div>
              <div className="column is-5">
                <div className="content">
                  <h2 className="subtitle is-size-2 is-family-secondary has-text-weight-normal mb-4 ">
                    {title}
                  </h2>
                  <h4 className="subtitle is-size-5">{subtitle}</h4>
                  <h6 className="has-text-weight-bold mb-1">{head}</h6>
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
