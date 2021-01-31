import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import PageHeader from "../components/pageHeader"
import PortfolioSection from "../components/portfolio"

const PortfolioPage = () => {
  return (
    <Layout>
      <SEO title="portfolio" />
      <PageHeader title="Portfolio" subtitle={""} />
      <PortfolioSection />
    </Layout>
  )
}

export default PortfolioPage
