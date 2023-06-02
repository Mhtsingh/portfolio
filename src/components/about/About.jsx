import "./About.scss";
import {FaRegUser } from "react-icons/fa";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="aboutWrapper">
        <button>
          <FaRegUser/>
          About
        </button>
        <div className="heading">
        <p>Technology is best when it brings <span>people together.</span> </p>
        </div>
       <div className="subHeading">
        <p>
        In my journey as a web developer for the past couple of years, I have gained valuable 
        experience working with multiple organizations. I possess a quiet confidence, 
        fueled by a natural curiosity that drives me to continuously enhance my skills.
         I am dedicated to solving design problems, one challenge at a time, as I constantly
          strive for improvement in my craft.
        </p>
       </div>
      </div>
    </div>
  );
};

export default About;
