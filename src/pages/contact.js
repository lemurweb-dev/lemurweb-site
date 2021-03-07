import React from "react"

import SEO from "../components/seo"

import PageHeader from "../components/pageHeader"
import ContactSection from "../components/contactSection"

const ContactPage = () => {
  return (
    <>
      <SEO title="contact" />
      <PageHeader title="Contatti" subtitle="Dimmi la tua idea" />
      <ContactSection />
    </>
  )
}

export default ContactPage
