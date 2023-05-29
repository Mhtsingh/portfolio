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
          Since beginning my journey as a Web developer nearly couple of years ago,
          I have done work for multiple organisations. I am quietly confident, naturally curious,
          and perpetually working on improving my chopsone design problem at a
          time.
        </p>
       </div>
      </div>
    </div>
  );
};

export default About;
