import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

const video = ({ url }) => {
  return (
    <video
      className="embed-responsive embed-responsive-16by9"
      autoPlay
      muted
      playsInline
    >
      <source
        className="embed-responsive-item"
        src={url}
        type="video/webm"
      />
    </video>
  )
}

export default video
