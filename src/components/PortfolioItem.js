import React from "react"
import ReactTooltip from "react-tooltip"

import StackItem from "./StackItem"
import PortfolioItemImage from "./PortfolioItemImage"

import { BsLink45Deg } from "react-icons/bs"

const PortfolioItem = ({ id, title, subtitle, images, link, stack }) => {
  const tooltipId = id + "-tooltip"

  return (
    <>
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
                      data-tip
                      data-for={tooltipId}
                    >
                      {title}
                    </a>
                    <p className="has-text-primary-light mb-2 mt-4">
                      {subtitle}
                    </p>
                    <ul className="mt-4">
                      {stack.map((s, i) => (
                        <li key={i}>
                          <StackItem tech={s} />
                        </li>
                      ))}
                    </ul>
                    <a
                      className="is-size-3 has-text-primary-light"
                      href={link}
                      data-tip
                      data-for={tooltipId}
                    >
                      <BsLink45Deg />
                    </a>
                  </div>
                  <div className="column">
                    <a className="is-clickable" data-tip data-for={tooltipId} href={link}>
                      <PortfolioItemImage images={images} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ReactTooltip
        className="tooltip"
        id={tooltipId}
        type="light"
        effect="float"
        delayShow={500}
        border
        clickable
      >
        <span>
          <BsLink45Deg />
          {link}
        </span>
      </ReactTooltip>
    </>
  )
}

export default PortfolioItem
