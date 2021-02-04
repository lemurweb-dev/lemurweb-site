import React, { useState } from "react"
import { Link } from "gatsby"

import logo from "../images/logo-blue.png"

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <>
      <div
        className={`menu ${showDropdown ? "" : "menu-hide"}`}
        onTouchEnd={() => setShowDropdown(true)}
        onMouseEnter={() => setShowDropdown(true)}
        onMouseLeave={() => setShowDropdown(false)}
      >
        <ul className="menu-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact">Contatti</Link>
          </li>
          <li></li>
        </ul>
        <img src={logo} alt="logo" className="mx-auto" />
      </div>
    </>
  )
}

export default Navbar
