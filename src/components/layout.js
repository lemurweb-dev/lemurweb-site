import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import { IconContext } from "react-icons"

import "../styles/layout.scss"

import Footer from "./footer"
// import Navbar from "./navbar"
import Background from "./Background"
import SideMenu from "./sideMenu"

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

  return (
    <>
      <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
        <Background />
        {/* <Navbar logo={data.logo.childImageSharp.fixed} /> */}

        <SideMenu />

        <main>{children}</main>

        <Footer />
      </IconContext.Provider>
    </>
  )
}

export default Layout
