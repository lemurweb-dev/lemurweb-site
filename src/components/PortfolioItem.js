import React from "react"
import Image from "gatsby-image"
import StackItem from "./StackItem"

import {BsLink45Deg} from "react-icons/bs"

const PortfolioItem = ({ id, title, subtitle, image, link, stack }) => {
  return (
    <div id={id} className="hero is-primary-light is-medium">
      <div className="hero-body py-5">
        <div className="container">
          <div className="card">
            <div className="card-content has-text-centered p-3">
              <div className="columns is-vcentered">
                <div className="column is-4">
                  <a
                    className="portfolio-item-title has-text-weight-semibold is-size-5"
                    href={link}
                  >
                    {title}
                  </a>
                  <p className="has-text-primary-light mb-2 mt-4">{subtitle}</p>
                  <ul className="mt-4">
                    {stack.map((s, i) => (
                      <li index={i}>
                        <StackItem tech={s} />
                      </li>
                    ))}
                  </ul>
                  <a
                    className="is-size-3 has-text-primary-light"
                    href={link}
                  >
                    <BsLink45Deg />
                  </a>
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
