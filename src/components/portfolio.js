import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
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
        <section class="hero mb-5">
          <div class="hero-body">
            <div class="container has-text-centered">
              <h1 class="subtitle is-family-secondary is-size-1 has-text-dark">Portfolio</h1>
            </div>
          </div>
        </section>
        <PortfolioItem
          id="simonettacattini"
          title="Simonetta Cattini"
          subtitle="Elegante sito portfolio con animazioni, galleria interattiva
          (solo desktop)"
          link="https://simonettacattini.art"
          image={data.sc.childImageSharp.fluid}
          description={
            <>
              <div className="ml-3 is-size-7-mobile">
                <p>
                  <SiReact /> Velocissimo client frontend realizzato con React
                </p>
                <p>
                  <SiStrapi /> Gestione dei contenuti in completa autonomia con
                  CMS Strapi
                </p>
                <p>
                  <SiBootstrap /> Interfaccia moderna e pulita
                </p>
              </div>
            </>
          }
        />
        <PortfolioItem
          id="marcellobuganza"
          title="Marcello Buganza"
          subtitle="Sito portfolio super minimale con sezioni a blocchi"
          link="https://celloart.netlify.app"
          image={data.ca.childImageSharp.fluid}
          description={
            <>
              <div className="ml-3 is-size-7-mobile">
                <p>
                  <SiGatsby /> Velocissimo client frontend realizzato con Gatsby
                </p>
                <p>
                  <SiBootstrap /> Interfaccia moderna e pulita
                </p>
              </div>
            </>
          }
        />
        <PortfolioItem
          id="purrflix"
          title="Purrflix"
          subtitle="Mockup della schermata principale di Netflix (solo desktop)"
          link="https://purrflix.netlify.app"
          image={data.pf.childImageSharp.fluid}
          description={
            <>
              <div className="ml-3 is-size-7-mobile">
                <p>
                  <SiGatsby /> Velocissimo client frontend realizzato con Gatsby
                </p>
                <p>
                  <SiBootstrap /> Interfaccia moderna e pulita
                </p>
              </div>
            </>
          }
        />
      </section>
    </>
  )
}

export default PortfolioSection
