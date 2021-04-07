import React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'

import Video from '../components/video'
import 'swiper/swiper-bundle.css'
import './projectCarousel.css'
import { StaticImage } from 'gatsby-plugin-image';

SwiperCore.use([Navigation, Pagination, A11y]);

const ProjectsCarousel = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              gif
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
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        allowTouchMove={false}
        navigation
        pagination={{
          type: 'progressbar'
        }}
      >
        {data.allMarkdownRemark.edges.map((edge, index) => {
          return(
            <SwiperSlide key={index}>
              <div className="swiper-scrollbar"></div>
              <Link className="project-links" to={`/projects/${edge.node.fields.slug}`}>
                <Video className="rounded" url={`/${edge.node.frontmatter.gif}`}></Video>
                <h4 className="mt-2">{edge.node.frontmatter.title}</h4>
              </Link>
            </SwiperSlide>
          )
        })}
        <SwiperSlide>
          <div className="swiper-scrollbar"></div>
          <Link className="project-links" to="/projects/">
            <StaticImage 
              src="../images/billboard.jpg"
              alt="billboard image"
              height={446}
              width={881}
              placeholder="blurred"
            />
            <h4 className="mt-2">All Projects</h4>
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default ProjectsCarousel
