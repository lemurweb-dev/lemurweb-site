import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import PortfolioSection from "../components/portfolio"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="lemurweb" />
      <PortfolioSection />
    </Layout>
  )
}

export default IndexPage
export const pageQuery = graphql`
  query indexPageQuery {
    watchImg: file(relativePath: { eq: "lemur_happy.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
