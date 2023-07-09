import "./Projects.scss";
import { FaDesktop } from "react-icons/fa";
import firstProject from "../../assets/firstProject.png";
import secondroject from "../../assets/joky.png";

const Projects = () => {
  return (
    <div className="project" id="project">
      <div className="projectWrapper">
        <button>
          <FaDesktop />
          Projects
        </button>
        <p className="proheadline">
          My <span>Projects</span>{" "}
        </p>
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
            <a href="https://cryptoinfoeu.netlify.app/" target="__blank">
              Crypto Info
            </a>
            <p>
              This website shows all the real data of all the crypto currencies
              out there. History of individual crypto can view in span of 24
              hours, 30 days, 3 months, and 1 year. Crypto currency can be
              selected in between USD and euro. This website build using ReactJs and Redux.
            </p>
          </div>
        </div>
        <div className="projectPort">
          <div className="firstProject">
            <a href="https://jokkyllc.netlify.app/" target="__blank">
              <img src={secondroject} alt="project" />
            </a>
            <div className="projectBtn">
              <button>HTML</button>
              <button>CSS</button>
              <button>Bootstrap</button>
              <button>Javascriprt</button>
            </div>
            <a href="https://jokkyllc.netlify.app/" target="__blank">
              Joky LLC
            </a>
            <p>
              This web application help the user to sell and buy house. User can serch for the property and can contact the owner directly. 
              This website bulid using Html, css and Javascript. For designing css librabz bootstrap hase been used.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
