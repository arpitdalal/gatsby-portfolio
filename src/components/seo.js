/**
 * Seo component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, lang, meta, title }) {
  const [metaVariables, setMetaVariables] = useState({
    metaDescription: "",
    defaultTitle: "",
    keywords: "",
    ogURL: "",
    ogImg: "",
    ogWidth: "",
    ogHeight: "",
    twitterImg: "",
  })

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            ogURL
            ogImg
            ogWidth
            ogHeight
            twitterImg
          }
        }
      }
    `
  )

  useEffect(() => {
    setMetaVariables({
      metaDescription: description || site.siteMetadata.description,
      defaultTitle: site.siteMetadata?.title,
      keywords: site.siteMetadata?.keywords,
      ogURL: site.siteMetadata?.ogURL,
      ogImg: site.siteMetadata?.ogImg,
      ogWidth: site.siteMetadata?.ogWidth,
      ogHeight: site.siteMetadata?.ogHeight,
      twitterImg: site.siteMetadata?.twitterImg,
    })
  })

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={
        metaVariables.defaultTitle ? `%s | ${metaVariables.defaultTitle}` : null
      }
      meta={[
        {
          name: `description`,
          content: metaVariables.metaDescription,
        },
        {
          property: `robots`,
          content: `index, follow`,
        },
        {
          property: `keywords`,
          content: metaVariables.keywords,
        },
        {
          property: `og:locale`,
          content: `en_US`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:title`,
          content: metaVariables.title,
        },
        {
          property: `og:description`,
          content: metaVariables.metaDescription,
        },
        {
          property: `og:url`,
          content: metaVariables.ogURL,
        },
        {
          property: `og:image`,
          content: metaVariables.ogImg,
        },
        {
          property: `og:width`,
          content: metaVariables.ogWidth,
        },
        {
          property: `og:height`,
          content: metaVariables.ogHeight,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaVariables.metaDescription,
        },
        {
          name: `twitter:image`,
          content: metaVariables.twitterImg,
        },
      ].concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
