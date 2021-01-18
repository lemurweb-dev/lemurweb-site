import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import PageHeader from "../components/pageHeader"
import PortfolioSection from "../components/portfolio"

const PortfolioPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="portfolio" />
      <PageHeader title="Portfolio" subtitle={""} />
      <PortfolioSection />
    </Layout>
  )
}

export default PortfolioPage
export const pageQuery = graphql`
  query portfolioPageQuery {
    watchImg: file(relativePath: { eq: "lemur_happy.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
