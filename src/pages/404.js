import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100">
      <StaticImage src="../images/404.png" className="not-found-img img-fluid" alt="404 not found" width={1400} placeholder="tracedSVG" />
      <div className="p-3">
        <h1>OPPS...</h1>
        <h2>You have landed in no man's land.</h2>
        <Link className="cta cta-primary d-block w-50 mx-auto" to="/">Back to home</Link>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
