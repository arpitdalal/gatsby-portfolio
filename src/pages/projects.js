import "bootstrap/dist/css/bootstrap.min.css"
import "./projects.css"

import React from "react"

import {
  graphql,
  Link,
  useStaticQuery,
} from "gatsby"

import CustomLayout from "../components/layout"
import ProjectThumbnail from "../components/projectThumbnail"
import Seo from "../components/seo"

const Projects = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              subtitle
              url
              thumbnail
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <CustomLayout>
      <Seo title="My Work" />
      <div className="card-body">
        <div id="projectsDiv" className="main-div">
          <h1 className="anim">My work</h1>
          <h5 className="mt-3 anim">Here's a glimpse of my projects.</h5>
          <div className="projects my-5">
            <div className="grid-2">
              {data.allMarkdownRemark.edges.map((edge, index) => {
                return (
                  <div
                    className={`project anim${
                      index % 2 !== 0 ? " special-project" : ""
                    }`}
                    key={edge.node.fields.slug}
                  >
                    <Link to={`/projects/${edge.node.fields.slug}`}>
                      <h3>{edge.node.frontmatter.title}</h3>
                    </Link>
                    <div className="mx-auto">
                      <div className="project-body">
                        <Link
                          className="project-links"
                          to={`/projects/${edge.node.fields.slug}`}
                        >
                          <ProjectThumbnail
                            url={edge.node.frontmatter.thumbnail}
                          />
                        </Link>
                        <h6 className="mt-3">
                          {edge.node.frontmatter.subtitle}
                        </h6>
                        <div className="d-flex flex-column flex-lg-row justify-content-between">
                          <Link
                            className="cta cta-primary project-links"
                            to={`/projects/${edge.node.fields.slug}`}
                          >
                            Go to project details
                          </Link>
                          <a
                            className="cta cta-secondary"
                            rel="noopener noreferrer nofollow"
                            to={edge.node.frontmatter.url}
                            target="_blank"
                          >
                            Go to Site
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="d-block d-lg-none">
            <div className="d-flex flex-column mt-2 cta-div">
              <Link to="/contact" className="cta cta-primary">
                Get in touch with me
              </Link>
              <Link to="/resume" className="cta cta-secondary">
                Take a look at my resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </CustomLayout>
  )
}

export default Projects
