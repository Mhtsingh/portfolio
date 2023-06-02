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
        I create beautifully simple designs and write elegant code, and I absolutely love what I do. It's as simple as that! My passion lies in crafting visually appealing and user-friendly solutions that bring joy and satisfaction to users.
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
