import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import PageHeader from "../components/pageHeader"
import ContactSection from "../components/contactSection"

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="contact" />
      <PageHeader title="Contatti" subtitle="Dimmi la tua idea" />
      <ContactSection />
    </Layout>
  )
}

export default ContactPage
