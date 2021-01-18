import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import PageHeader from "../components/pageHeader"
import ContactSection from "../components/contactSection"

const ContactPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="contact" />
      <PageHeader title="Contatti" subtitle="Dimmi la tua idea" />
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
