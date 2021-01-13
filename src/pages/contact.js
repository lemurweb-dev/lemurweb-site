import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ContactSection from "../components/contactSection"

const ContactPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="lemurweb" />
      <ContactSection />
    </Layout>
  )
}

export default ContactPage
export const pageQuery = graphql`
  query contactPageQuery {
    watchImg: file(relativePath: { eq: "lemur_happy.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
