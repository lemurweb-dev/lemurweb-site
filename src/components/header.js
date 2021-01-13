import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import { FaAngleDown } from "react-icons/fa"

const Header = ({ logo }) => (
  <section id="header" className="hero is-fullheight">
    <div className="hero-body pb-0">
      <div className="container has-text-centered">
        <div className="container has-text-centered is-family-secondary">
          <h1 className="mb-6 subtitle is-size-1-touch is-size-1-desktop has-text-primary is-unselectable">
            Il web è una <span className="has-text-secondary">giungla</span>!
          </h1>
          <h2 className="subtitle is-size-4-touch is-size-3-desktop has-text-secondary has-text-weight-semibold is-unselectable">
            Il <span className="has-text-primary">lemure digitale</span>{" "}
            può aiutarti a trovare la strada
          </h2>
        </div>
      </div>
    </div>

    <div className="hero-foot">
      <div className="container has-text-centered mb-6">
        <AnchorLink
          to="/#work"
          className="subtitle is-size-4 has-text-weight-semibold has-text-dark is-inline-block"
        >
          <div>Scopri come!</div>
          <div className="is-size-3 mb-5"><FaAngleDown/></div>
        </AnchorLink>
      </div>
    </div>
  </section>
)

export default Header
