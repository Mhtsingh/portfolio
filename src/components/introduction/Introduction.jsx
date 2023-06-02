import "./Introduction.scss";
import { FaHome, FaArrowDown } from "react-icons/fa";
import roundtext from "../../assets/round-text.png";

const Introduction = () => {
  const handleClickScroll = ()=>{
    const element = document.getElementById('project');
    if (element ) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <div className="introduction" id="introduction">
      <div className="introwrapper">
        <button>
          <FaHome />
          INTRODUCE
        </button>
        <div className="heading">
          <p>
            Hello My Name is <span>Mohit</span>, <br />I am A software Devloper
          </p>
        </div>
        <div className="subHeading">
          I design and code beautifully simple things and i love what i do. Just
          simple like that!
        </div>
        <div className="projectBtn" onClick={handleClickScroll}>
          <img className="textImg" src={roundtext} alt="roundtext" />
          <FaArrowDown className="arrowImg" />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
