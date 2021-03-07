import React from "react"

import SEO from "../components/seo"

import PageHeader from "../components/pageHeader"
import PortfolioSection from "../components/portfolio"

const PortfolioPage = () => {
  return (
    <>
      <SEO title="portfolio" />
      <PageHeader title="Portfolio" subtitle={""} />
      <PortfolioSection />
    </>
  )
}

export default PortfolioPage
