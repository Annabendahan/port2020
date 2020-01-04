import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Card1 from "../components/card1"
import Card2 from "../components/card2"
import Cardrecto from "../components/cardrecto"
import pic from "../images/PROFILE.png"
import yo from "../images/YO.png"
import yo2 from "../images/YO2.png"
import card1 from "../images/CARD11.png"
import card2 from "../images/CARD22.png"
class IndexPage extends Component {
  state = {
    landing: true,
    step1: false,
    step2: false,
    step3: false,
    step4: false,
    l1: false,
    l2: false,
    l3: false,
    l4: false,
    l5: false,
    l6: false,
    l7: false,
  }

  componentDidMount() {
    setTimeout(
      function() {
        this.setState({ step1: true, landing: false })
      }.bind(this),
      2000
    )
    setTimeout(
      function() {
        this.setState({ step2: true })
      }.bind(this),
      2500
    )
    setTimeout(
      function() {
        this.setState({ step3: true })
      }.bind(this),
      3000
    )
    setTimeout(
      function() {
        this.setState({ step4: true })
      }.bind(this),
      3500
    )
    setTimeout(
      function() {
        this.setState({ l1: true })
      }.bind(this),
      100
    )
    setTimeout(
      function() {
        this.setState({ l2: true })
      }.bind(this),
      200
    )
    setTimeout(
      function() {
        this.setState({ l3: true })
      }.bind(this),
      300
    )
    setTimeout(
      function() {
        this.setState({ l4: true })
      }.bind(this),
      400
    )
    setTimeout(
      function() {
        this.setState({ l5: true })
      }.bind(this),
      500
    )
    setTimeout(
      function() {
        this.setState({ l6: true })
      }.bind(this),
      600
    )
    setTimeout(
      function() {
        this.setState({ l7: true })
      }.bind(this),
      700
    )
    setTimeout(
      function() {
        this.setState({ l8: true })
      }.bind(this),
      800
    )
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <div style={{ width: `100%` }}>
          {this.state.step1 ? (
            <img src={pic} alt="" className="home-pic-mobile" />
          ) : null}
        </div>
        <div className="flex">
          <div
            className="cards"
            style={{
              opacity: this.state.step1 ? "1" : "0",
              transition: "opacity 1s ease-out",
              position: "relative",
            }}
          >
            {/* <div className="card1"></div> */}

            <img src={card1} alt="" className="card1" />

            {/* <div className="card11">
              <p>
                PARIS BASED FREELANCE DEVELOPER FOR 2 YEARS NOW, I AM
                SPECIALISED IN FRONT-END DEVELOPMENT. BECAUSE A SUCCESSSFUL
                PROJECT COMBINES ART & TECHNOLOGY, MY GOAL IS TO CREATE MODERN &
                EFFICIENT WEBSITES, WHICH ARE NICE AND USER FRIENDLY.
              </p>
              <br />
              <br />
              <h3> TOOLS </h3>
              <p>
                AWWWARDS-INSTAGRAM TO GET INSPI, FIGMA-SKETCH-ILLUSTRATOR TO
                CREATE THE LAYOUTS, COOLORS TO MATCH COLORS, VELVETYNE TO FIND
                NICE TYPOS
              </p>{" "}
              <p>
                I USE MOSTLY JS FRAMEWORKS (REACT, VUE), USE
                GATSBY.JS-GRAPHQL-CMS TO CREATE MANAGEABLE WEBSITES, BUT ALSO
                WORK WITH APIs
              </p>
              <br />
              <br />
              <h3> PROJETS</h3>
              <br />
              <a href="/" alt="" className="el">
                {" "}
                <p> QUENTIN </p>
                <p> 01 </p>
              </a>
              <br />
              <a href="/" alt="" className="el">
                {" "}
                <p> ALICE </p>
                <p> 02 </p>
              </a>
              <br />
              <a href="/" alt="" className="el">
                {" "}
                <p> EASYFORK </p>
                <p> 03 </p>
              </a>
            </div> */}
            <img src={card2} alt="" className="card2" />
          </div>

          <div className="right">
            <div
              style={{
                opacity: this.state.step2 ? "1" : "0",
                transition: "opacity 1s ease-out",
              }}
            >
              <img src={pic} alt="" className="home-pic" />
            </div>

            <div
              style={{
                opacity: this.state.step3 ? "1" : "0",
                transition: "opacity 1s ease-out",
              }}
            >
              <div className="visit">
                <img src={yo} alt="" className="card-verso" />
                <img src={yo2} alt="" className="card-recto" />
              </div>
            </div>
          </div>
        </div>

        <div className="turn">
          {" "}
          <p> Please turn your device </p>{" "}
        </div>
        <img src={yo} alt="" className="card-mobile" />
        <img src={yo2} alt="" className="card-mobile2" />
        {this.state.landing ? (
          <div className="landing">
            <p>
              {" "}
              {this.state.l1 ? "W" : null} {this.state.l2 ? "E" : null}{" "}
              {this.state.l3 ? "L" : null} {this.state.l4 ? "C" : null}{" "}
              {this.state.l5 ? "O" : null} {this.state.l6 ? "M" : null}{" "}
              {this.state.l7 ? "E" : null}
            </p>
          </div>
        ) : null}
      </Layout>
    )
  }
}

export default IndexPage
