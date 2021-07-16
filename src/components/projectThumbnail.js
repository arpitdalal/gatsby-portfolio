import React from "react"

import "./projectThumbnail.css"

const ProjectThumbnail = ({ url = null, svg = null }) => {
  return (
    <div className="project-thumbnail anim d-flex flex-column align-items-start justify-content-start mt-2">
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
      {url && (
        <img
          src={`/images${url}`}
          alt="Project Thumbnail"
          className="img-fluid"
        />
      )}
      {svg && (
        <svg
          class="pt-2"
          dataName="page"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 537 272.86"
        >
          <g dataName="div3">
            <rect
              class="skeleton-div"
              x="0.34"
              y="142.86"
              width="259"
              height="130"
              rx="8"
            />
            <rect
              class="skeleton-sub-div"
              x="55.34"
              y="147.86"
              width="149"
              height="20"
              rx="10"
            />
            <rect
              class="skeleton-sub-div"
              x="24.34"
              y="175.86"
              width="211"
              height="63"
              rx="8"
            />
            <rect
              class="skeleton-sub-div"
              x="24.34"
              y="246.86"
              width="101"
              height="20"
              rx="10"
            />
            <rect
              class="skeleton-sub-div"
              x="134.34"
              y="246.86"
              width="101"
              height="20"
              rx="10"
            />
          </g>
          <g dataName="div2">
            <rect
              class="skeleton-div"
              x="278"
              y="71"
              width="259"
              height="130"
              rx="8"
            />
            <rect
              class="skeleton-sub-div"
              x="333"
              y="76"
              width="149"
              height="20"
              rx="10"
            />
            <rect
              class="skeleton-sub-div"
              x="302"
              y="104"
              width="211"
              height="63"
              rx="8"
            />
            <rect
              class="skeleton-sub-div"
              x="302"
              y="175"
              width="101"
              height="20"
              rx="10"
            />
            <rect
              class="skeleton-sub-div"
              x="412"
              y="175"
              width="101"
              height="20"
              rx="10"
            />
          </g>
          <g dataName="div1">
            <rect class="skeleton-div" width="259" height="130" rx="8" />
            <rect
              class="skeleton-sub-div"
              x="55"
              y="5"
              width="149"
              height="20"
              rx="10"
            />
            <rect
              class="skeleton-sub-div"
              x="24"
              y="33"
              width="211"
              height="63"
              rx="8"
            />
            <rect
              class="skeleton-sub-div"
              x="24"
              y="104"
              width="101"
              height="20"
              rx="10"
            />
            <rect
              class="skeleton-sub-div"
              x="134"
              y="104"
              width="101"
              height="20"
              rx="10"
            />
          </g>
        </svg>
      )}
    </div>
  )
}

export default ProjectThumbnail
