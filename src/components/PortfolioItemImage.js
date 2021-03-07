import React, { useState, useEffect } from "react"

const PortfolioItemImage = ({ images }) => {
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
    }, 2500)
    return () => clearTimeout(timeout)
  }, [imageIndex])

  return images.map((img, i) => (
    // <Img
    //   key={i}
    //   fluid={img}
    //   alt={`portfolio-${i}`}
    //   className={
    //     i === imageIndex ? `portfolio-image-visible` : `portfolio-image`
    //   }
    // />
    <img
      key={i}
      src={img.src}
      alt={`portfolio-${i}`}
      className={
        i === imageIndex ? `portfolio-image-visible` : `portfolio-image`
      }
    />
  ))
}

export default PortfolioItemImage
