import React from "react"
import { Link, graphql } from "gatsby"

import CustomLayout from "../components/layout"
import ProjectThumbnail from "../components/projectThumbnail"
import Seo from "../components/seo"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/index.css"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        thumbnail
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
    <CustomLayout>
      <Seo title={data.markdownRemark.frontmatter.title} />
      <div className="card-body">
        <div className="main-div project">
          <h1 className="anim">{data.markdownRemark.frontmatter.title}</h1>
          <ProjectThumbnail
            url={`/${data.markdownRemark.frontmatter.thumbnail}`}
          />
          <div
            className="anim"
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
          ></div>
          <div className="d-flex flex-column flex-lg-row mt-2">
            <Link
              to={data.markdownRemark.frontmatter.url}
              rel="noopener noreferrer nofollow"
              className="cta cta-primary anim"
              target="_blank"
            >
              Go to site
            </Link>
            <Link to="/projects" className="cta cta-secondary anim">
              Back to my work
            </Link>
          </div>
        </div>
      </div>
    </CustomLayout>
  )
}

export default Project
