import React from 'react'
import {Link} from "react-router-dom"

const Hero = () => {
  return (
    <section className='hero'>
        <div className="banner">
            <h1>Volunteer</h1>
            <h3>Needed</h3>
            <p>Join our mission to make a difference! We are seeking compassionate and dedicated individuals to join 
              our team of volunteers. By giving your time and skills, you will play a vital role in helping us 
              reach our fundraising goals and support our mission.Together, we can make a lasting impact!</p>
        <Link to={"/donate"} className="btn">Donate Now</Link>
        </div> 
        <div className="banner">
            <img src= "/hero.png" alt= "hero" />
        </div>
    </section>
  )
}

export default Hero;
