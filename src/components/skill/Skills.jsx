import './Skills.scss'
import { FaStackOverflow } from "react-icons/fa";
import js from '../../assets/js.svg' ;
import react from '../../assets/react.svg' ;
import typescript from '../../assets/typescript.svg' ;
import html5 from '../../assets/html5.svg' ;
import css3 from '../../assets/css3.svg' ;
import sass from '../../assets/sass.svg' ;
import node from '../../assets/node.svg' ;
import aws from '../../assets/aws.svg' ;



const Skills = () => {
  return (
    <div className="skill" id='skill'>
    <div className="skillWrapper">
      <button>
        <FaStackOverflow/>
        Skill
      </button>
      <p className='skillheadline'>My Tech<span>stack</span></p>
    </div>
    <div className="skillSet">
      
      <div className="skillName">
      <span><img src={js} alt="js" /></span>
      <p>JavaScript</p>
      </div>
      <div className="skillName">
      <span><img src={react} alt="react" /></span>
      <p>Reactjs</p>
      </div>
      <div className="skillName">
      <span><img src={typescript} alt="typescript" /></span>
      <p>Typescripy</p>
      </div>
      <div className="skillName">
      <span><img src={html5} alt="html" /></span>
      <p>Html</p>
      </div>
    </div>
    <div className="skillSet">
      <div className="skillName">
      <span><img src={css3} alt="css3" /></span>
      <p>Css</p>
      </div>
      <div className="skillName">
      <span><img src={sass} alt="sass" /></span>
      <p>SASS</p>
      </div>
      <div className="skillName">
      <span><img src={node} alt="node" /></span>
      <p>Nodejs</p>
      </div>
      <div className="skillName">
      <span><img src={aws} alt="aws" /></span>
      <p>AWS</p>
      </div>
    </div>
  </div>
  )
}

export default Skills