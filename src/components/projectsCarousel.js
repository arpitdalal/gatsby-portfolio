import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/a11y"
import "./projectCarousel.css"

import React from "react"

import {
  graphql,
  Link,
  useStaticQuery,
} from "gatsby"
import {
  A11y,
  Navigation,
  Pagination,
} from "swiper"
import {
  Swiper,
  SwiperSlide,
} from "swiper/react"

import ProjectThumbnail from "./projectThumbnail"

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
      modules={[Navigation, Pagination, A11y]}
    >
      {data.allMarkdownRemark.edges.map(edge => {
        return (
          <SwiperSlide key={edge.node.fields.slug}>
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
          <ProjectThumbnail svg="skeleton" />
          <h4 className="mt-2">My Work</h4>
        </Link>
      </SwiperSlide>
    </Swiper>
  )
}

export default ProjectsCarousel
