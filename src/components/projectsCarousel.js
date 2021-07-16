import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import SwiperCore, { Navigation, Pagination, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper-bundle.css"

import ProjectThumbnail from "./projectThumbnail"
import "./projectCarousel.css"

SwiperCore.use([Navigation, Pagination, A11y])

const ProjectsCarousel = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              thumbnail
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      allowTouchMove={true}
      navigation
      pagination={{
        type: "progressbar",
      }}
    >
      {data.allMarkdownRemark.edges.map((edge, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="swiper-scrollbar"></div>
            <Link
              className="project-links"
              to={`/projects/${edge.node.fields.slug}`}
            >
              <ProjectThumbnail url={edge.node.frontmatter.thumbnail} />
              <h4 className="mt-2">{edge.node.frontmatter.title}</h4>
            </Link>
          </SwiperSlide>
        )
      })}
      <SwiperSlide>
        <div className="swiper-scrollbar"></div>
        <Link className="project-links" to="/projects/">
          <ProjectThumbnail url="/billboard.jpg" />
          <h4 className="mt-2">All Projects</h4>
        </Link>
      </SwiperSlide>
    </Swiper>
  )
}

export default ProjectsCarousel
