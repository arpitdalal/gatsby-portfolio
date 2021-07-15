import React from "react"

import "./ProjectThumbnail.css"

const ProjectThumbnail = ({ url }) => {
  return (
    <div class="anim">
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1248 32"
        className="browser-svg"
      >
        <g fill="none" fillRule="nonzero">
          <rect width="100%" fill="#e8e8e8"></rect>
          <circle
            stroke="#F04744"
            fill="#FF5F56"
            cx="20"
            cy="17"
            r="6"
          ></circle>
          <circle
            stroke="#EBA03F"
            fill="#FFBD2E"
            cx="40"
            cy="17"
            r="6"
          ></circle>
          <circle
            stroke="#13AB42"
            fill="#27C93F"
            cx="60"
            cy="17"
            r="6"
          ></circle>
        </g>
      </svg>
      <img
        src={`/images${url}`}
        alt="Project Thumbnail"
        className="img-fluid"
      />
    </div>
  )
}

export default ProjectThumbnail
