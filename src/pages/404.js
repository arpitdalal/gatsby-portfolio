import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Page Not found" />
    <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100">
      <StaticImage src="../images/404.png" className="not-found-img img-fluid" alt="404 not found" width={1400} placeholder="blurred" />
      <div className="p-3">
        <h1>OPPS...</h1>
        <h2>This page is a bit glitchy.</h2>
        <h3>Try one if these links to navigate to other pages.</h3>
        <div className="d-flex flex-column flex-md-row">
          <Link className="cta cta-primary" to="/">Home Page</Link>
          <Link className="cta cta-secondary" to="/me">Know more about me</Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage