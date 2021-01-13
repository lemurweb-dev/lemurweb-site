import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeSection from "../components/homeSection"

const IndexPage = ({ data }) => {
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
              <div class="hr-shadow"/>
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
              <div class="hr-shadow"/>
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
