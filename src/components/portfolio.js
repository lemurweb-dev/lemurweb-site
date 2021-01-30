import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import PortfolioItem from "./PortfolioItem"

const PortfolioSection = () => {
  const data = useStaticQuery(graphql`
    query PortfolioMockups {
      sc1: file(relativePath: { eq: "mockup/sc-mockup-1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sc2: file(relativePath: { eq: "mockup/sc-mockup-2.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sc3: file(relativePath: { eq: "mockup/sc-mockup-3.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ca1: file(relativePath: { eq: "mockup/ca-mockup-1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ca2: file(relativePath: { eq: "mockup/ca-mockup-2.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ca3: file(relativePath: { eq: "mockup/ca-mockup-3.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pf1: file(relativePath: { eq: "mockup/pf-mockup-1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      m1: file(relativePath: { eq: "mockup/m-mockup-1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      m2: file(relativePath: { eq: "mockup/m-mockup-2.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      m3: file(relativePath: { eq: "mockup/m-mockup-3.png" }) {
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
          images={[data.sc1.childImageSharp.fluid, data.sc2.childImageSharp.fluid, data.sc3.childImageSharp.fluid]}
          stack={["react", "bootstrap", "strapi"]}
        />
        <PortfolioItem
          id="marcellobuganza"
          title="Marcello Buganza"
          subtitle="Sito portfolio super minimale con sezioni full-screen e fumetto sfogliabile"
          link="https://cello-art.netlify.app"
          images={[data.ca1.childImageSharp.fluid, data.ca2.childImageSharp.fluid, data.ca3.childImageSharp.fluid]}
          stack={["gatsby", "bootstrap"]}
        />
        <PortfolioItem
          id="michelangelo"
          title="Michelangelo"
          subtitle="Web-app interattiva per scelta colore di sfondo di un dipinto o foto"
          link="https://lemur-michelangelo.netlify.app"
          images={[data.m1.childImageSharp.fluid, data.m2.childImageSharp.fluid, data.m3.childImageSharp.fluid]}
          stack={["react", "bulma"]}
        />
        <PortfolioItem
          id="purrflix"
          title="Purrflix"
          subtitle="Mockup della schermata principale di Netflix (solo desktop)"
          link="https://purrflix.netlify.app"
          images={[data.pf1.childImageSharp.fluid]}
          stack={["gatsby", "bootstrap"]}
        />
      </section>
    </>
  )
}

export default PortfolioSection
