import React from "react"

import "./ProgressBar.css"

const injectStyle = style => {
  const styleElement = document.createElement("style")
  let styleSheet = null

  document.head.appendChild(styleElement)

  styleSheet = styleElement.sheet

  styleSheet.insertRule(style, styleSheet.cssRules.length)
}

const ProgressBar = ({ title, completed }) => {
  const fillerStyles = {
    width: `${completed}%`,
  }

  const keyframesStyle = `
    @-webkit-keyframes progress-animation {
      0% {
        width: 0%;
      }
      100% {
        width: ${completed};
      }
    }
  `

  typeof window !== "undefined" && injectStyle(keyframesStyle)

  return (
    <div className="bar-div">
      <span>{title}</span>
      <div className="bar-container">
        <div
          className="bar-filler text-right d-flex align-items-center justify-content-end"
          style={fillerStyles}
        >
          <span className="bar-label">{`${completed}%`}</span>
        </div>
      </div>
    </div>
  )
}

export default ProgressBar
