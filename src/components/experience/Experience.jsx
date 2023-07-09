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
          <li>Build multiple, accessible, responsive, and functional web applications toallow visitors on any device to have the best user experience whichimproved user conversion rate.</li>
          <li>Proactively liaised with the design team and project manager to ensureefficient and timely, delivery of significant projects.</li>
          <li>Fixed bugs from the existing website and implemented enhancements thatreduce load time.</li>
        </div>
        <div className="item">
          <span className="date">June 2018 - Feb 2021</span>
          <h2>Software Developer</h2>
          <p>PHP Poets IT Solutions Pvt. Ltd.</p>
          <li>Developed and maintained multiple front-end websites focused on userexperience.</li>
          <li>Wrote front-end code from scratch and work on backend technology,framework, and RestAPIs.</li>
          <li>Collaboration with the product team to implement new features into theproduct.</li>
          <li>Developed efficient and maintainable applications according to thebusiness objectives and needs of the clients.</li>
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
