import React from 'react'
import NavBar from './shared/NavBar'
import "./home.css"
import { BsFillPlayCircleFill } from "react-icons/bs";
import FooterBar from './shared/FooterBar';
export default function Home() {
    const workInfoData = [
        {
          image: 'images/service.png',
          title: "Services",
          text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
        },
        {
          image: 'images/travel.png',
          title: "Travel",
          text: "Keep safety a priority. Encourage everyone to follow basic travel safety guidelines ",
        },
        {
          image: 'images/places.png',
          title: "Places",
          text: " known for its bustling city life, traditional temples, and delicious cuisine.",
        },
      ];
  return (
    <>
    <NavBar />
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src="images/about-background.png" alt="" />
      </div>
      <div className="about-section-image-container">
        <img src="images/Traveling-rafiki.png" alt="" />
      </div>
      <div className="about-section-text-container">
        <h1 className="primary-heading">
        Travel opens your heart, broadens your mind, and fills your life with stories to tell.
        </h1>
        <p className="primary-text">
        Provide detailed information about the destinations you've visited or plan to visit. Include descriptions, highlights, attractions, local customs, and any unique aspects that make each place special.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        A heritage portal typically refers to an online platform or website that provides information, resources, and services related to cultural heritage, historical sites, or heritage preservation. These portals aim to promote awareness, appreciation, and access to cultural heritage assets.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
    <FooterBar />
    </>
  )
}
