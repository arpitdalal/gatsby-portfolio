import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import favicon from '../images/favicon.ico'
import Helmet from "react-helmet"

import Header from "./header"

const Layout = ({ children }) => {
  const [theme, setTheme] = useState('light-mode')

  useEffect(() => {
    if(typeof window !== 'undefined')
      if(localStorage.getItem('theme'))
      setTheme(localStorage.getItem('theme') === 'dark-mode' ? 'dark-mode' : 'light-mode')
  }, [theme])

  return (
    <>
      <Helmet>
        <link rel="icon" href={favicon} />
        <body className={theme} />
      </Helmet>
      <div className="main">
        <div className="my-container">
          <div className="row mx-0">
            <div className="col-lg-4 col-xl-3 left-div">
              <Header setTheme={setTheme} />
            </div>
            <div className="col-lg-8 col-xl-9 right-div">
              <div className="card">{children}</div>
            </div>
          </div>
        </div>
      </div>
      <df-messenger intent="WELCOME" chat-title="Arpit's info bot" chat-icon="/bot.png" agent-id="ac73d5ad-b388-4a66-97af-33832605e098" language-code="en"></df-messenger>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
