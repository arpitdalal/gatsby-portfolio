import React from 'react'

import './loader.css'

const Loader = () => {
  return (
    <>
      <div className="ad-loader" aria-labelledby="loading">
        {/* <svg id="svg" className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1936.06 24.7">
          <line xmlns="http://www.w3.org/2000/svg" className="svg-line" y1="2" x2="1972.89" y2="2"/>
        </svg> */}
        <div className="top-half"></div>
        <div className="bottom-half"></div>
      </div>
    </>
  )
}

export default Loader
