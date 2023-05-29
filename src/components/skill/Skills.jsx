import './Skills.scss'
import { FaStackOverflow } from "react-icons/fa";

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
      <span><img src="src/assets/js.svg" alt="" /></span>
      <p>JavaScript</p>
      </div>
      <div className="skillName">
      <span><img src="src/assets/react.svg" alt="" /></span>
      <p>Reactjs</p>
      </div>
      <div className="skillName">
      <span><img src="src/assets/typescript.svg" alt="" /></span>
      <p>Typescripy</p>
      </div>
      <div className="skillName">
      <span><img src="src/assets/html5.svg" alt="" /></span>
      <p>Html</p>
      </div>
    </div>
    <div className="skillSet">
      <div className="skillName">
      <span><img src="src/assets/css3.svg" alt="" /></span>
      <p>Css</p>
      </div>
      <div className="skillName">
      <span><img src="src/assets/sass.svg" alt="" /></span>
      <p>SASS</p>
      </div>
      <div className="skillName">
      <span><img src="src/assets/node.svg" alt="" /></span>
      <p>Nodejs</p>
      </div>
      <div className="skillName">
      <span><img src="src/assets/aws.svg" alt="" /></span>
      <p>AWS</p>
      </div>
    </div>
  </div>
  )
}

export default Skills