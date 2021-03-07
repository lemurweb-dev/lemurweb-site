import React, { useState, useEffect } from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import ReactTooltip from "react-tooltip"

import Header from "../components/header"
import SEO from "../components/seo"

import HomeSection from "../components/homeSection"
import ReadTimeSection from "../components/readTimeSection"

import { BsBriefcase } from "react-icons/bs"
import { AiOutlineMail } from "react-icons/ai"

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
    <>
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
          image={getImage(data.l)}
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
          image={getImage(data.e)}
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
          image={getImage(data.b)}
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
                    <BsBriefcase className="is-size-2" />
                  </div>
                  Portfolio
                </Link>
              </div>
              <div className="column is-4 is-flex is-justify-content-center">
                <GatsbyImage
                  className="is-hidden-touch rounded-image mb-2"
                  image={getImage(data.me)}
                  alt="me"
                  style={{ width: "10em" }}
                />
              </div>
              <div className="column is-4">
                <Link to="/contact" className="link is-info">
                  <div>
                    <AiOutlineMail className="is-size-2" />
                  </div>
                  Contatti
                </Link>
              </div>
              <div className="column is-8 has-text-centered is-flex is-flex-direction-column is-align-items-center">
                <h4 className="title is-family-secondary has-text-weight-light">
                  Know Me
                </h4>
                <GatsbyImage
                  className="is-hidden-desktop rounded-image mb-2"
                  image={getImage(data.me)}
                  alt="me"
                  style={{ width: "10em" }}
                />
                <p>
                  Ciao, sono Davide! Ho sempre avuto la passione per
                  l'informatica e le tecnologie del web e di recente ho deciso
                  di intraprendere la strada di sviluppatore web e mobile. Le
                  cose più importanti che metto nel mio lavoro sono creatività e
                  passione.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default IndexPage
export const pageQuery = graphql`
  query indexPageQuery {
    l: file(relativePath: { eq: "look.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 600, placeholder: BLURRED)
      }
    }
    e: file(relativePath: { eq: "explore.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 600, placeholder: BLURRED)
      }
    }
    b: file(relativePath: { eq: "build.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 600, placeholder: BLURRED)
      }
    }
    me: file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 400
          height: 400
          placeholder: BLURRED
        )
      }
    }
  }
`
