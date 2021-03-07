import React, { useState } from "react"
import { Link } from "gatsby"

import { AiOutlineHome, AiOutlineMail } from "react-icons/ai"
import { BsBriefcase } from "react-icons/bs"
import { GiHamburgerMenu } from "react-icons/gi"

const TRIGGER_SIZE = "2em"
const ICON_SIZE = "2em"

const SideMenu = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <aside
      className={`menu has-background-dark ${showMenu ? "show" : ""}`}
      onMouseEnter={() => setShowMenu(true)}
      onMouseLeave={() => {
        setShowMenu(false)
      }}
    >
      <ul className="menu-list">
        <li>
          <a
            className="menu-trigger"
            onPointerDown={() => setShowMenu(!showMenu)}
          >
            <GiHamburgerMenu size={TRIGGER_SIZE} />
          </a>
        </li>
        <MenuEntry
          icon={<AiOutlineHome size={ICON_SIZE} />}
          name="Home"
          url="/"
          showMenu={showMenu}
          hideMenu={() => setShowMenu(false)}
        />
        <MenuEntry
          icon={<BsBriefcase size={ICON_SIZE} />}
          name="Portfolio"
          url="/portfolio"
          showMenu={showMenu}
          hideMenu={() => setShowMenu(false)}
        />
        <MenuEntry
          icon={<AiOutlineMail size={ICON_SIZE} />}
          name="Contatti"
          url="/contact"
          showMenu={showMenu}
          hideMenu={() => setShowMenu(false)}
        />
        <li></li>
      </ul>
    </aside>
  )
}

const MenuEntry = ({ icon, name, url, showMenu, hideMenu }) => {
  return (
    <li>
      <Link to={url} onClick={hideMenu}>
        <div className="mb-1">{icon}</div>
        {showMenu ? name : ""}
      </Link>
    </li>
  )
}

export default SideMenu
