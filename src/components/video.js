import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

const video = ({ url }) => {
  return (
    <video
      className="embed-responsive embed-responsive-16by9 rounded"
      autoPlay
      muted
      playsInline
      loop
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
