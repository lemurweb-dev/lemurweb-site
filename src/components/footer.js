import React from "react"
import Image from "gatsby-image"

import { HiMail } from "react-icons/hi"
import {BiCoffeeTogo} from "react-icons/bi"

const Footer = ({ showModal, sentMail }) => {
  return (
    <footer id="contact" className="hero is-medium">
      <div className="hero-body has-text-centered">
        <div className="mb-5">
          {!sentMail && (
            <button
              className="button is-primary is-large is-outlined is-size-3"
              onClick={() => showModal(true)}
            >
              <HiMail />
            </button>
          )}
          {sentMail && (
            <article class="message is-warning">
            <div class="message-body">
              Grazie per avermi contattato!!
            </div>
          </article>
          )}
        </div>
        <span>© {new Date().getFullYear()}</span> {"  "}
        <span>
          <a href="https://www.lemurweb.dev">lemurweb</a>
        </span>
        <a  href="https://www.buymeacoffee.com/lemurweb" >
          <div className="mt-6 is-size-5">
            <BiCoffeeTogo />
          </div>
          <div className="is-size-7">
            buymeacoffee.com
          </div>
        </a>
      </div>
    </footer>
  )
}

export default Footer
