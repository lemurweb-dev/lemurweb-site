import React, { useState, useEffect } from "react"
import Img from "gatsby-image"
import StackItem from "./StackItem"

import { BsLink45Deg } from "react-icons/bs"

const PortfolioItem = ({ id, title, subtitle, images, link, stack }) => {
  const [imageIndex, setImageIndex] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      let index = imageIndex

      if (index >= images.length - 1) {
        index = 0
      } else {
        index = imageIndex + 1
      }
      setImageIndex(index)

      console.log("image", imageIndex)
    }, 3000)
    return () => clearTimeout(timeout)
  }, [imageIndex])

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
                      <li key={i}>
                        <StackItem tech={s} />
                      </li>
                    ))}
                  </ul>
                  <a className="is-size-3 has-text-primary-light" href={link}>
                    <BsLink45Deg />
                  </a>
                </div>
                <div className="column">
                  <div>
                    {images.map((img, i) => (
                      <Img
                        key={i}
                        fluid={img}
                        alt={`portfolio-${i}`}
                        className={
                          i === imageIndex
                            ? `portfolio-image-visible`
                            : `portfolio-image`
                        }
                      />
                    ))}
                  </div>
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
