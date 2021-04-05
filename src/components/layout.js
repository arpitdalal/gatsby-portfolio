/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import favicon from '../images/favicon.ico'
import Helmet from "react-helmet"

import Header from "./header"

const Layout = ({ children }) => {
  let theme;
  if(localStorage) {
    theme = localStorage.getItem("theme")
  }

  return (
    <>
      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>
      <div className={`main ${theme}`}>
        <div className="my-container">
          <div className="row mx-0">
            <div className="col-lg-4 col-xl-3 left-div">
              <Header />
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
