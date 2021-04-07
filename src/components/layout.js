import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import favicon from '../images/favicon.ico'
import Helmet from "react-helmet"

import Header from "./header"

const Layout = ({ children }) => {
  const [theme, setTheme] = useState('')

  useEffect(() => {
    setTheme(typeof window !== 'undefined' ? localStorage.getItem('theme') : '')
  }, [theme])

  return (
    <>
      <Helmet>
        <link rel="icon" href={favicon} />
        <body className={theme} />
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
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
      <Helmet>
        <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1" defer async></script>
      </Helmet>
      <df-messenger intent="WELCOME" chat-title="Arpit's info bot" chat-icon="/bot.png" agent-id="ac73d5ad-b388-4a66-97af-33832605e098" language-code="en"></df-messenger>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
