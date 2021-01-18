import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

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
                siti vetrina, portfolio, e-commerce, blog, pagine di eventi.
              </p>
              <div class="hr-shadow" />
              <p>
                Il risultato? Uno spazio web personalizzato, creativo e di
                qualità
              </p>
            </>
          }
          image={data.w.childImageSharp.fluid}
        />
        <HomeSection
          odd
          id={"explore"}
          title={"Esploriamo"}
          subtitle={"Addentriamoci nella progettazione del tuo spazio web"}
          head={"Basta con i temi e siti pre-generati"}
          body={
            <>
              <p>
                In mezzo alla enorme giungla del web, solo i siti che si
                distinguono dagli altri possono emergere. <br />
                Il sito lo costruisco con le mie dita partendo dalle radici.
              </p>
              <div class="hr-shadow" />
              <p>Creatività e originalità sono le cose più importanti</p>
            </>
          }
          image={data.w.childImageSharp.fluid}
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
                Utilizzo solamente le ultime tecnologie per offrirti un prodotto
                che rimanga sempre attuale, mantenendo allo stesso tempo una
                ottima qualità.
              </p>
            </>
          }
          image={data.w.childImageSharp.fluid}
        />
      </section>
      
      <ReadTimeSection time={displayReadTime} setIsCountingReadTime={setIsCountingReadTime} />
      
      <section id="know-me" className="hero is-primary mt-6 is-medium">
        <div className="hero-body">
          <div className="container">
            <nav className="level">
              <div className="level-item has-text-centered is-flex-direction-column">
                <div>
                  <RiSuitcaseLine className="is-size-3"/>
                </div>
                <Link to="/portfolio" className="link is-info">
                  Portfolio
                </Link>
              </div>
              <p className="level-item has-text-centered">
                <h4 className="title is-family-secondary has-text-weight-light">
                  Know Me
                </h4>
              </p>
              <div className="level-item has-text-centered is-flex-direction-column">
                <div>
                  <HiMail  className="is-size-3"/>
                </div>
                <Link to="/contact" className="link is-info">
                  Contatti
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
export const pageQuery = graphql`
  query indexPageQuery {
    w: file(relativePath: { eq: "lemur_happy.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
