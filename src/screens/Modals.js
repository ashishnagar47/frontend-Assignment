import React, {useState,useEffect,useRef} from 'react'
import {Button} from 'react-bootstrap'
import Icon from '../FED-Intermediate-Assets/sp.png'
import Clear from '../FED-Intermediate-Assets/clear.svg'
import Sparrow from '../FED-Intermediate-Assets/sparrow.png'



export default function Modals() {
  const [isOpen,setIsOpen]=useState(false)
  let [isOpen1,setIsOpen1]=useState(false)
  const menuRef=useRef();

  

  const handleClickOutside = e => {
    if (!menuRef.current.contains(e.target)) {
      setIsOpen1(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  return (
    <div >
       {/* <img  className="Icon"  src={Icon} onClick={()=>setIsOpen(!isOpen)}   alt="icon" ></img>   */}
       <div id="ico" onClick={()=>setIsOpen(!isOpen)}>
           {
               isOpen?(<img id="clear" src={Clear} alt="clear"></img>):(<img id="sparrow" src={Icon} alt="icon"></img>)
               
           }
            {/* <img id="sparrow" src={Icon} alt="icon"></img>
            <img id="clear" src={Clear} alt="clear"></img> */}
       </div>
       
       {isOpen?(
       <div className="mod" >
         <div className="mod-content">
                <h4>Hi There</h4>
                <h6>Hello Ask Us Anything, Share Your Feedbacks</h6>
            </div>
            <div className="mod-body">
                <h6>Start a Conversation</h6> 
                <div >The Team Typically replies in a few minutes</div>
                <Button variant="success" onClick={()=>setIsOpen1(!isOpen1)} className="btn" >
                <h6>New Conversation  <i className="Micon material-icons">send</i></h6>   
                </Button>
            </div>
       </div>):(null)}

        <div ref={menuRef}>
       {isOpen1?
                (<div  className="mod1">
                    <div  className="mod1-content">
                        <h4>Hi </h4>
                        <h6>Hello Ask Us Anything, Share Your Feedbacks</h6>
                    </div>
                <div className="mod1-body" >
                    <div className="left-side">
                        Is there any offline version available for Maxeon Player
                    </div> 
                    <div id="triangle1"></div>
                    <br></br> 
                    <div className="right-side">
                        Currently we don't have but we will launch soon
                    </div>  
                    <div id="circle"></div>
                    <div id="triangle2"></div>      
                </div>
                    <br></br>
                    <div className="spn">
                    <img src={Sparrow}  alt="sparrow"></img> we run on surveysparrow
                    </div>
                <div id="boxx6">
                 <textarea id="boxx" placeholder="write a reply... " ></textarea>
                 
                    </div>
                </div>):(null)}
                </div>

    </div>
  )
}
