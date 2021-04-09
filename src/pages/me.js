import React from 'react'
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticImage } from 'gatsby-plugin-image'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/index.css'

const me = () => {
  return (
    <Layout>
      <SEO title="About Me" />
      <StaticImage className="card-img-top d-lg-none img-mob" src="../images/arpit-thumbnail.jpg" alt="Arpit Dalal's Portrait Image" placeholder="blurred" />
      <div className="card-body">
        <div id="meDiv" className="main-div">
            <h1 className="text-center anim">Who am I?</h1>
            <div className="about-me text-left d-flex justify-content-start">
              <div className="about-img-container mr-3">
                <StaticImage className="d-none d-lg-block img-dk anim" src="../images/arpit-thumbnail.jpg" alt="Arpit Dalal's Portrait Image" width={300} placeholder="blurred" />
              </div>
              <div>
                <p className="anim">Hello<span role="img" aria-label="Waving hand emoji">👋</span>! My name is Arpit Dalal.</p>
                <p className="anim">I am a developer who builds reliable web products.</p>
                <p className="anim">Born and raised in Vadodara city of Gujarat, India. Currently, residing in Brampton, Ontario, Canada.</p>
                <p className="anim">A professional web developer with over 3 years of experience in designing, developing, testing and maintaining web applications.</p>
                <p className="anim">I am a music lover, gamer(LOL), an astrophile.</p>
                {/* <p>An unusual fact about me is that I love to follow rules.</p> */}
              </div>
            </div>
            <div className="my-goals text-left mt-5">
              <h2 className="text-center anim">My Goals</h2>
              <div>
                <p className="anim">To help businesses to make a significant web presence by building reliable, scalable, and user-centric web products.</p>
                <p className="anim">Develop products that user enjoys interacting with and is accessible to everyone and can attract attention to the business.</p>
              </div>
            </div>
          <div className="my-journey text-left mt-5">
            <h2 className="text-center anim">My Journey</h2>
            <div>
                <p className="anim">I was 13 when I first saw the code of a game named Tetris.</p>
                <p className="anim">I was fascinated by how a few lines of code that I could not even understand can do so much visually and give such a remarkable output.</p>
                <p className="anim">Since then I was curious to know how to write code that can give such an amazing experience to the world.</p>
                <p className="anim">So, I learned Java and built my version of the game.</p>
                <p className="anim">Soon I discovered that I want to be a part of the web dev community and started learning web technologies including PHP, HTML, CSS, JavaScript, etc.</p>
            </div>
          </div>
          <div className="my-today text-left mt-5">
            <h2 className="text-center anim">Where do I stand today?</h2>
            <div>
              <p className="anim">I have hands-on experience with 2 full stacks including LAMP and MERN to develop a full scalable web application with designing the architecture of the application and the database that supports the application, developing and testing every part of the application, deploying it to the production based environment, and maintaining it after the deployment is successful.</p>
              <p className="anim">Moreover, I have built web applications using technologies like Node.js, Express.js, React.js, Gatsby.js WordPress, Laravel, WooCommerce, PHP, and even Jamstack.</p>
              <p className="anim">I have created designs using CSS-frameworks like Bootstrap, Semantic-UI, and Materialize to name a few.</p>
              <p className="anim">And I also know how to facilitate controlling the versions of an application using Git.</p>
              <p className="anim">Furthermore, I have built straight coded sites with working PHP forms from a picture or a photoshop file. I have hands-on experience of creating a responsive website where the designs are within Photoshop, Adobe XD, Figma, etc tools.</p>
            </div>
          </div>
          <div className="d-block d-lg-none">
            <div className="d-flex flex-column mt-4 cta-div">
              <Link to="/projects" className="cta cta-primary anim">Dive into my work</Link>
              <Link to="/resume" className="cta cta-secondary anim">Take a look at my resume</Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default me
