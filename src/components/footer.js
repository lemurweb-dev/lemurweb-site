import React from "react"
import Image from "gatsby-image"

import { HiMail } from "react-icons/hi"
import { BiCoffeeTogo } from "react-icons/bi"

const Footer = () => {
  return (
    <footer id="footer" className="hero is-medium mt-6 pt-6">
      <div className="hero-body has-text-centered">
        <div>
          <span>© {new Date().getFullYear()}</span> {"  "}
          <span>
            <a href="https://www.lemurweb.dev">lemurweb</a>
          </span>
        </div>

        <a
          href="https://www.buymeacoffee.com/lemurweb"
          className=" is-inline-block"
        >
          <div className="mt-2 is-size-3">
            <BiCoffeeTogo />
          </div>
          <div className="is-size-7">buymeacoffee.com</div>
        </a>
        <div className="mt-6">
          lemur illustrations by <a href="http://cello-art.netlify.app">celloart</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
