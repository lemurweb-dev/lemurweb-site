import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import PortfolioItem from "./PortfolioItem"

import { SiReact, SiStrapi, SiBootstrap, SiGatsby } from "react-icons/si"

const PortfolioSection = () => {
  const data = useStaticQuery(graphql`
    query PortfolioMockups {
      sc: file(relativePath: { eq: "mockup/simonettacattini.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ca: file(relativePath: { eq: "mockup/celloart.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pf: file(relativePath: { eq: "mockup/purrflix.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <section id="portfolio">
        <PortfolioItem
          id="simonettacattini"
          title="Simonetta Cattini"
          subtitle="Elegante sito portfolio con sfondo animato, galleria interattiva e sezione blog"
          link="https://simonettacattini.art"
          image={data.sc.childImageSharp.fluid}
          stack={["react", "bootstrap", "strapi"]}
        />
        <PortfolioItem
          id="marcellobuganza"
          title="Marcello Buganza"
          subtitle="Sito portfolio super minimale con sezioni full-screen e fumetto sfogliabile"
          link="https://cello-art.netlify.app"
          image={data.ca.childImageSharp.fluid}
          stack={["gatsby", "bootstrap"]}
        />
        <PortfolioItem
          id="purrflix"
          title="Purrflix"
          subtitle="Mockup della schermata principale di Netflix (solo desktop)"
          link="https://purrflix.netlify.app"
          image={data.pf.childImageSharp.fluid}
          stack={["gatsby", "bootstrap"]}
        />
      </section>
    </>
  )
}

export default PortfolioSection
