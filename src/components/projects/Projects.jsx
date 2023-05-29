import "./Projects.scss";
import { FaDesktop } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="project" id="project">
      <div className="projectWrapper">
        <button>
          <FaDesktop />
          Projects
        </button>
        <p className="proheadline">My <span>Projects</span> </p>
        <div className="projectPort">
          <div className="firstProject">
            <img src="src/assets/firstProject.png" alt="" />
            <div className="projectBtn">
              <button>Reactjs</button>
              <button>Chartjs</button>
              <button>Redux</button>
            </div>
            <a href="https://cryptoinfoeu.netlify.app/" target="__blank">Crypto Info</a>
            <p>Discription about project</p>
          </div>
    
        </div>
      </div>
    </div>
  );
};

export default Projects;
