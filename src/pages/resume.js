import React from "react"

import CustomLayout from "../components/layout"
import Seo from "../components/seo"

const Resume = () => {
  return (
    <CustomLayout>
      <Seo title="My Resume" />
      <div className="card-body p-0">
        <div id="resumeDiv" className="main-div h-100 w-100 p-0">
          <iframe
            title="resume"
            className="w-100 h-100"
            src="/resume.pdf"
          ></iframe>
        </div>
      </div>
    </CustomLayout>
  )
}

export default Resume
