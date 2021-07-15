import React from "react"
import { Link } from "gatsby"

import CustomLayout from "../components/layout"
import Seo from "../components/seo"
import ProjectsCarousel from "../components/projectsCarousel"
import SkillShowcase from "../components/skillShowcase"

import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/index.css"

const IndexPage = () => {

  return (
    <CustomLayout>
      <Seo title="Home" />
      <div className="card-body text-left">
        <div className="row mx-0 anim">
          <div className="col-lg-6">
            <div className="h-100 d-flex flex-column justify-content-center">
              <h1>
                <strong>
                  Hello
                  <span role="img" aria-label="waving-hand-emoji">
                    👋
                  </span>{" "}
                  I am Arpit Dalal
                </strong>
              </h1>
              <h4>A full stack web developer.</h4>
              <p>
                I have more than 3 years of extensive and applied experience in
                building web applications using different technologies.
              </p>
              <div className="mt-4">
                <Link to="/me" className="cta cta-primary flex-grow-0">
                  Read more about me
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-none d-lg-block">
            <lottie-player
              autoplay
              loop
              mode="normal"
              background="transparent"
              src="https://assets3.lottiefiles.com/packages/lf20_iorpbol0.json"
              style={{ height: "300px" }}
            />
          </div>
        </div>
        <div className="row mt-5 mx-0 anim">
          <div className="col-lg-6">
            <h2 className="text-center mb-3">My Skills</h2>
            <SkillShowcase />
          </div>
          <div className="col-lg-6 mt-4 mt-lg-0">
            <h2 className="text-center mb-3">My Work</h2>
            <ProjectsCarousel />
          </div>
        </div>
      </div>
    </CustomLayout>
  )
}

export default IndexPage
