import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import favicon from '../images/favicon.ico'
import Helmet from "react-helmet"
import gsap from 'gsap'

import Header from "./Header"

const CustomLayout = ({ children }) => {
  const [theme, setTheme] = useState('light-mode')

  useEffect(() => {
    if(typeof window !== 'undefined')
      if(localStorage.getItem('theme'))
      setTheme(localStorage.getItem('theme') === 'dark-mode' ? 'dark-mode' : 'light-mode')
  }, [theme])

  useEffect(() => {
    if(typeof window !== 'undefined'){
      let tl = gsap.timeline({ duration: 0.05 });
      const mediaQuery = window.matchMedia("(max-width: 991px)");
      if(mediaQuery.matches) {
        tl
          .from('.left-div', { y: -10, opacity: 0 })
          .from('.right-div', { y: -10, opacity: 0 })
          .from('.toggle-label', { scale: 0, opacity: 0 })
          .from('.anim', { y: -20, opacity: 0, stagger: 0.02 });
       
      } else {
        tl
          .from('.left-div', { x: -10, opacity: 0 })
          .from('.right-div', { x: +10, opacity: 0 })
          .from('.toggle-label', { scale: 0, opacity: 0 })
          .from('.anim', { y: -20, opacity: 0, stagger: 0.02 });
      }
    }
  }, [])

  return (
    <>
      <Helmet>
        <link rel="icon" href={favicon} />
        <body className={theme} />
      </Helmet>
      <div className="main">
        <div className="my-container">
          <div className="row mx-0">
            <div className="col-lg-4 col-xl-3 left-div" style={{zIndex:10}}>
              <Header setTheme={setTheme} />
            </div>
            <div className="col-lg-8 col-xl-9 right-div">
              <div className="card">{children}</div>
            </div>
          </div>
        </div>
      </div>
      <df-messenger intent="WELCOME" chat-title="Arpit's info bot" chat-icon="/images/bot.png" agent-id="ac73d5ad-b388-4a66-97af-33832605e098" language-code="en"></df-messenger>
    </>
  )
}

CustomLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CustomLayout
