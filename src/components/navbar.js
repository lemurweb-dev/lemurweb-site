import React, { useState } from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import logo from "../images/logo-blue.png"

import { MdBuild, MdExplore, MdRemoveRedEye } from "react-icons/md"

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <>
      <div
        className={`nav-lemur ${showDropdown ? "nav-show-logo" : ""}`}
        onTouchEnd={() => setShowDropdown(true)}
        onMouseEnter={() => setShowDropdown(true)}
        onMouseLeave={() => setShowDropdown(false)}
      >
        <img src={logo} />
        <article
          className={`panel nav-panel has-background-dark is-flex is-flex-direction-column-reverse ${
            showDropdown ? "nav-show-panel" : ""
          }`}
        >
          <div className={`nav-text ${showDropdown ? "nav-show-text" : ""}`}>
            <div className="panel-block">
              <Link to="/">Home</Link>
            </div>
            <div className="panel-block">
              <Link to="/portfolio">Portfolio</Link>
            </div>
            <div className="panel-block">
              <Link to="/contact">Contatti</Link>
            </div>
          </div>
        </article>
      </div>
    </>
  )
}

export default Navbar
