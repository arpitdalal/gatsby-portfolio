import React from 'react'

import Layout from '../components/layout'
import SEO from "../components/seo"

const projects = () => {
  return (
    <Layout>
      <SEO title="My Resume" />
      <div class="card-body p-0">
        <div id="resumeDiv" class="main-div h-100 w-100 p-0">
          <iframe title="resume" className="w-100 h-100" src="/resume.pdf"></iframe>
        </div>
      </div>
    </Layout>
  )
}

export default projects
