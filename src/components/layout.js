import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import { IconContext } from "react-icons"

import "../styles/layout.scss"

import { siteMetadata } from "../../gatsby-config"
import Footer from "./footer"
import Navbar from "./navbar"
import Background from "./Background"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      logo: file(relativePath: { eq: "logo-blue.png" }) {
        childImageSharp {
          fixed(width: 82, height: 82) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  console.log("logo", data.logo)

  return (
    <>
      <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
        <Background />
        <Navbar logo={data.logo.childImageSharp.fixed} />

        <main>{children}</main>
        <Footer />
      </IconContext.Provider>
    </>
  )
}

export default Layout
