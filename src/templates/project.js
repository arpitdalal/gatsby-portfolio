import React from 'react'
import { Link, graphql } from "gatsby"

import Layout from '../components/layout'
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/index.css'

export const query = graphql`
  query($slug: String!){
    markdownRemark(fields: {slug: {eq: $slug}}) {
      frontmatter {
        gif
        subtitle
        title
        url
      }
      html
    }
  }
`

const Project = ({ data }) => {
  return (
    <Layout>
      <SEO title={data.markdownRemark.frontmatter.title} />
      <div className="card-body">
        <div className="main-div project">
          <h1>{data.markdownRemark.frontmatter.title}</h1>
          <img
            className="img-fluid rounded"
            src={`/${data.markdownRemark.frontmatter.gif}`}
            alt={`${data.markdownRemark.frontmatter.gif} gif`}
          />
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
          <div className="d-flex flex-column flex-lg-row mt-2">
            <Link to={data.markdownRemark.frontmatter.url} rel="noopener noreferrer nofollow" className="cta cta-primary" target="_blank">Go to site</Link>
            <Link to="/projects" className="cta cta-secondary in-project-link">Back to my work</Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Project
