import React from "react"

import CustomLayout from "../components/Layout"
import Seo from "../components/Seo"

const Resume = () => {
  return (
    <CustomLayout>
      <Seo title="My Resume" />
      <div class="card-body p-0">
        <div id="resumeDiv" class="main-div h-100 w-100 p-0">
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
