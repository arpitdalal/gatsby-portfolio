import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/index.css"

import React from "react"

import { Link } from "gatsby"
import Lottie from "react-lottie-player"

import lottieJson from "../../static/lottie.json"
import CustomLayout from "../components/layout"
import ProjectsCarousel from "../components/projectsCarousel"
import Seo from "../components/seo"
import SkillShowcase from "../components/skillShowcase"

const IndexPage = () => {
  return (
    <CustomLayout>
      <Seo title="Home" />
      <div className="card-body text-start">
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
            <Lottie
              play
              loop
              mode="normal"
              background="transparent"
              animationData={lottieJson}
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
