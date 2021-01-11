import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { IconContext } from "react-icons"

import "../styles/layout.scss"
import { siteMetadata } from "../../gatsby-config"
import Footer from "./footer"
import ContactModal from "./contactModal"
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

  const [showContactModal, setShowContactModal] = useState(false)
  const [sentMail, setSentMail] = useState(false)

  return (
    <>
      <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
        <Background />
        <Navbar logo={data.logo.childImageSharp.fluid} />

        <main>{children}</main>
        <Footer showModal={setShowContactModal} sentMail={sentMail} />

        {showContactModal && !sentMail && (
          <ContactModal
            showModal={setShowContactModal}
            setSentMail={setSentMail}
          />
        )}
      </IconContext.Provider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
