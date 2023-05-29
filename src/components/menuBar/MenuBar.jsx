import "./MenuBar.scss"
import { FaStackOverflow, FaHome,FaRegUser,FaBriefcase,FaDesktop } from "react-icons/fa";
import { Tooltip } from 'react-tooltip'

const MenuBar = () => {
  const handleClickScroll = ()=>{
    const element = document.getElementById('introduction');
    if (element ) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  const handleClickScroll1 = ()=>{
      const element1 = document.getElementById('about');
    if (element1 ) {
      element1.scrollIntoView({ behavior: 'smooth' });
    }
  }
  const handleClickScroll2 = ()=>{
    const element2 = document.getElementById('experience');
    if (element2 ) {
      element2.scrollIntoView({ behavior: 'smooth' });
    }
  }
  const handleClickScroll3 = ()=>{
    const element3 = document.getElementById('project');

    if (element3 ) {
      element3.scrollIntoView({ behavior: 'smooth' });
    }
  }
  const handleClickScroll4 = ()=>{
    const element4 = document.getElementById('skill');

    if (element4 ) {
      element4.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <div className='menuBar'>
        <button data-tooltip-id="my-tooltip"  data-tooltip-content="Introduction" onClick={handleClickScroll}> <FaHome/></button>
        <button data-tooltip-id="my-tooltip"  data-tooltip-content="About" onClick={handleClickScroll1}> <FaRegUser/>
         </button>
        <button data-tooltip-id="my-tooltip"  data-tooltip-content="Experinces" onClick={handleClickScroll2}> <FaBriefcase/> </button>
        <button data-tooltip-id="my-tooltip"  data-tooltip-content="Projects" onClick={handleClickScroll3}> <FaDesktop/> </button>
        <button data-tooltip-id="my-tooltip"  data-tooltip-content="Skills" onClick={handleClickScroll4}> <FaStackOverflow/> </button>
        <Tooltip id="my-tooltip" place="left" />
    </div>
  )
}

export default MenuBar