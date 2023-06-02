import "./Projects.scss";
import { FaDesktop } from "react-icons/fa";
import firstProject from "../../assets/firstProject.png";

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
          <a href="https://cryptoinfoeu.netlify.app/" target="__blank">
          <img src={firstProject} alt="project" />
          </a>
            <div className="projectBtn">
              <button>Reactjs</button>
              <button>Chartjs</button>
              <button>Redux</button>
            </div>
            <a href="https://cryptoinfoeu.netlify.app/" target="__blank">Crypto Info</a>
            <p>This website shows all the real data of all the crypto 
              currencies out there. History of individual crypto can 
              view in span of 24 hours, 30 days, 3 months, and 1 year.
               Crypto currency can be selected in between USD and euro.</p>
          </div>
    
        </div>
      </div>
    </div>
  );
};

export default Projects;
