import React from "react"
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
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ width: `100%` }}>
      <img src={pic} alt="" className="home-pic-mobile" />
    </div>
    <div className="flex">
      <div className="cards">
        <img src={card1} alt="" className="card1" />
        <img src={card2} alt="" className="card2" />
      </div>
      <div className="right">
        <img src={pic} alt="" className="home-pic" />
        <div className="visit">
          <img src={yo} alt="" className="card-verso" />
          <img src={yo2} alt="" className="card-recto" />
        </div>
      </div>
    </div>

    <div className="turn">
      {" "}
      <p> Please turn your device </p>{" "}
    </div>
    <img src={yo} alt="" className="card-mobile" />
    <img src={yo2} alt="" className="card-mobile2" />
  </Layout>
)

export default IndexPage
