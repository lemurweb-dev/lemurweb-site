import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import ReactTooltip from "react-tooltip"

import Header from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"

import HomeSection from "../components/homeSection"
import ReadTimeSection from "../components/readTimeSection"

import { RiSuitcaseLine } from "react-icons/ri"
import { HiMail } from "react-icons/hi"

const IndexPage = ({ data }) => {
  const [readTime, setReadTime] = useState(0)
  const [displayReadTime, setDisplayReadTime] = useState(0)
  const [isCountingReadTime, setIsCountingReadTime] = useState(true)

  useEffect(() => {
    let intervalId

    if (isCountingReadTime) {
      intervalId = setInterval(() => {
        setReadTime(readTime => readTime + 1)
        setDisplayReadTime(parseFloat(readTime / 10).toFixed(1) + " s")
      }, 100)
    }

    return () => clearInterval(intervalId)
  }, [isCountingReadTime, readTime])

  return (
    <Layout>
      <SEO title="lemurweb" />
      <Header />
      <section id="work">
        <HomeSection
          id={"orientate"}
          title={"Orientiamoci"}
          subtitle={
            "Prima di tutto, dobbiamo capire cosa vuoi realizzare e le sfide che ci aspettano"
          }
          head={"Dimmi del tuo progetto"}
          body={
            <>
              <p>
                Posso aiutarti a realizzare qualunque tipo di spazio web tu
                abbia in mente: <br />
                sito vetrina, landing page, portfolio, e-commerce, blog..
              </p>
              <div className="hr-shadow" />
              <p>
                Il risultato? Uno spazio web personalizzato, creativo e di
                qualità
              </p>
            </>
          }
          image={data.l.childImageSharp.fluid}
        />
        <HomeSection
          odd
          id={"explore"}
          title={"Esploriamo"}
          subtitle={"Addentriamoci nella progettazione del tuo spazio web"}
          head={"Basta con temi, template e siti pre-generati"}
          body={
            <>
              <p>
                Utilizzo solamente tecnologie che permettono di curare ogni
                aspetto del progetto. <br />
                Grazie a questi strumenti possiamo realizzare qualsiasi idea,
                senza essere costretti da qualcosa di già preimpostato.
              </p>
              <div className="hr-shadow" />
              <p>
                In mezzo alla enorme giungla del web, solo chi si distingue
                dagli altri può emergere.
              </p>
            </>
          }
          image={data.e.childImageSharp.fluid}
        />
        <HomeSection
          id={"build"}
          title={"Costruiamo"}
          subtitle={
            "Questa è la fase che preferisco! E scommetto che anche a te non dispiacerà"
          }
          head={"Mentre ti rilassi, io faccio tutto il lavoro"}
          body={
            <>
              <p>
                Oltre ad essere bello e funzionale, al giorno d'oggi un sito
                deve assolutamente avere un ottimo valore{" "}
                <span className="tooltip-highlight" data-tip data-for="seo">
                  SEO
                </span>{" "}
                ed essere fluido e{" "}
                <span
                  className="tooltip-highlight"
                  data-tip
                  data-for="responsive"
                >
                  responsive
                </span>
                .
                <br />
                Di questo non dovrai preoccuparti.
              </p>
              <div className="hr-shadow" />
              <p>Ogni cosa che costruisco è testata per essere al top!</p>
            </>
          }
          image={data.b.childImageSharp.fluid}
        />
        <ReactTooltip
          className="tooltip"
          id="seo"
          type="info"
          effect="float"
          border
          clickable
          multiline
        >
          <span>
            Search Engine Optimization.
            <br />
            Il sito deve essere ottimizzato per comparire nell'elenco delle
            risposte dai motori di ricerca.
          </span>
        </ReactTooltip>
        <ReactTooltip
          className="tooltip"
          id="responsive"
          type="info"
          effect="float"
          border
          clickable
        >
          <span>
            Tecnica di web design che prevede che l'interfaccia del sito si
            adatti automaticamente a qualsiasi dispositivo.
          </span>
        </ReactTooltip>
      </section>

      <ReadTimeSection
        time={displayReadTime}
        setIsCountingReadTime={setIsCountingReadTime}
      />

      <section id="know-me" className="hero is-primary mt-6 is-small">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-reversed-touch is-vcentered is-multiline is-centered has-text-centered">
              <div className="column is-4">
                <Link to="/portfolio" className="link is-info">
                  <div>
                    <RiSuitcaseLine className="is-size-2" />
                  </div>
                  Portfolio
                </Link>
              </div>
              <div className="column is-4 is-flex is-justify-content-center">
                <Img
                  className="is-hidden-touch rounded-image mb-2"
                  fluid={data.me.childImageSharp.fluid}
                  alt="me"
                  style={{ width: "10em" }}
                />
              </div>
              <div className="column is-4">
                <Link to="/contact" className="link is-info">
                  <div>
                    <HiMail className="is-size-2" />
                  </div>
                  Contatti
                </Link>
              </div>
              <div className="column is-8 has-text-centered is-flex is-flex-direction-column is-align-items-center">
                <h4 className="title is-family-secondary has-text-weight-light">
                  Know Me
                </h4>
                <Img
                  className="is-hidden-desktop rounded-image mb-2"
                  fluid={data.me.childImageSharp.fluid}
                  alt="me"
                  style={{ width: "10em" }}
                />
                <p>
                  Ciao, sono Davide! Ho sempre avuto la passione per
                  l'informatica e le tecnologie del web e di recente ho
                  realizzato di voler intraprendere la strada di sviluppatore
                  web e mobile. Le cose più importanti che metto nel mio lavoro
                  sono creatività e passione.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
export const pageQuery = graphql`
  query indexPageQuery {
    l: file(relativePath: { eq: "look.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    e: file(relativePath: { eq: "explore.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    b: file(relativePath: { eq: "build.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    me: file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
