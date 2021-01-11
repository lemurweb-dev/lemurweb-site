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
        className="nav-lemur"
        onMouseEnter={() => setShowDropdown(true)}
        onMouseLeave={() => setShowDropdown(false)}
      >
        <img src={logo} />
        {showDropdown && (
          <article className="panel nav-panel has-background-primary-light">
            <div class="panel-block pl-2"><Link to="/">Home</Link></div>
            <div class="panel-block pl-2"><Link to="/portfolio">Portfolio</Link></div>
            <div class="panel-block pl-2"><Link to="/contact">Contatti</Link></div>
          </article>
        )}
      </div>
    </>
  )
}

export default Navbar
