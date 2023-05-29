import "./App.scss";
import Introduction from "./components/introduction/Introduction";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Skills from "./components/skill/Skills";
import { AiOutlineDownload,AiFillGithub,AiFillLinkedin } from "react-icons/ai";

import MenuBar from "./components/menuBar/MenuBar";
function App() {
  return (
    <>
    <div className="container">
        <div className="sidebar">
          <div className="wrapper">
            <div className="header">
              <span>Mohit</span>
              <span className="designation">Software<br/> Developer</span>
            </div>
            <div className="imgwrapper">
              <img src="src/assets/Mohit-2.png" alt="mohit png" />
            </div>
            <div className="contact">
              <span className="email">Mhtsingh952@gmail.com</span>
              <span className="address">Heilbronn, Germany</span>
            </div>
            <div className="social">
              <button>
                <a href="https://github.com/Mhtsingh">
                <AiFillGithub/>
                </a>
              </button>
              <button>
                <a href="https://www.linkedin.com/in/mohitsingh0/">
                <AiFillLinkedin/>
                </a>
              </button>
            </div>
            <div className="btnwrapper">
              <a href="" download>
              <button>
                <AiOutlineDownload/>
                Resume
              </button>
              </a>
            </div>
          </div>
        </div>
        <div className="scrollBar">
          <Introduction/>
          <About/>
          <Experience/>
          <Projects/>
          <Skills/>
        </div>
        <MenuBar/>
      </div>
      <div>
      <video src="src/assets/bgvideo1.mp4" autoPlay muted loop></video>
      </div>
    </>
  
  );
}

export default App;
