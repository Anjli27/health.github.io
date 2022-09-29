import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
import CountUp from 'react-countup';
import { motion } from "framer-motion";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth<=768 ? true: false;
  return (
    <div className="hero" id='home'>
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />

        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile? "178px": '238px' }}
            whileInView={{ left: "8px" }}
            transition={{...transition, type: 'tween'}}
          ></motion.div>
        
          <span>The best fitness club in the town</span>
        </div>
        {/* Her Heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>

          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and built your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        {/* figures */}
        <div className="figures">
          <div>
            <span>
              <CountUp end={140} start={100} duration={4} prefix="+" />
            </span>
            <span>expert coaches</span>
          </div>
          <div>
            <span><CountUp end={978} start={800} duration={4} prefix="+" /></span>
            <span>members joined</span>
          </div>
          <div>
            <span><CountUp end={50} start={0} duration={4} prefix="+" /></span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* hero buttons */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>

        <motion.div
        initial={{right:'-1rem'}}
        whileInView={{right:'4rem'}}
        transition={transition}
        className="heart-rate">
          <img src={heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/* hero images */}

        <img src={hero_image} alt="" className="hero-image" />
        <motion.img 
        initial={{right:'11rem'}}
        whileInView={{right:'20rem'}}
        transition={transition}
        src={hero_image_back} alt="" className="hero-image-back" />

        {/* calories */}
        <motion.div
        initial={{right:'37rem'}}
        whileInView={{right:'28rem'}}
        transition={transition}
         className="calories">
          <img src={calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
