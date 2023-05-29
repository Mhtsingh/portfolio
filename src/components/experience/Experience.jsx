import "./Experience.scss";
import {FaBriefcase } from "react-icons/fa";

const Experience = () => {
  return (
    <div className="experience" id="experience">
      <div className="experienceWrapper">
        <button>
          <FaBriefcase/>
          Experience & Education 
        </button>
        <p className="expheadline"> Experience & <span>Education</span> </p>
      <div className="exp-timeline">
        <div className="item">
          <span className="date">Aug 2022 - Mar 2023</span>
          <h2>Werkstudent as Software Developer</h2>
          <p>GiB - Gesundheit in Bewegung GmbH</p>
          <p>
            Responsible for Development of web application using Javascript, PHP, and Html/Css.
          </p>
        </div>
        <div className="item">
          <span className="date">April 2021 - Present</span>
          <h2>Master in Information and Electrical Engineering</h2>
          <p>Hochschule Wismar, Germany</p>
          <p>
          
          </p>
        </div>
        <div className="item">
          <span className="date">2011-2015</span>
          <h2>Bachelor of Engineering and Technology in Electronics and Communication</h2>
          <p>Kurukshetra University, India</p>
          <p>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Experience;
