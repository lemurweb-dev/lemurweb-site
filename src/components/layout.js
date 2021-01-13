import React, { useState } from "react"
import PropTypes from "prop-types"
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
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
        <Background />
        <Navbar logo={data.logo.childImageSharp.fluid} />

        <main>{children}</main>
        <Footer />
      </IconContext.Provider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
