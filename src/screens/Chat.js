import React,{useState} from 'react'
import {Button,Modal} from 'react-bootstrap'
import Icon from '../FED-Intermediate-Assets/004.png'
import Sparrow from '../FED-Intermediate-Assets/sp.png'
import { TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/styles'



export default function Chat() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);

     const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
     const handleShow1 = () => setShow1(true);

     const InputField=withStyles  ({
        root:{
            "& label.Mui-focused":{
                color:"tomato", 
                
            },
            "& label":{
                color:"tan",
                
            },
            "& .MuiOutlinedInput-root":{
                "& fieldset":{
                    borderColor:"tan",
                },
                "&:hover fieldset":{
                    borderColor:"tan",
                    
                },
                "&.Mui-focused fieldset":{
                    borderColor:"tan"
                },
            },
        }
     })(TextField)

    return (
        <div>
           
           <img  className="Icon" src={Icon} onClick={handleShow} alt="icon" ></img>
           

      <Modal show={show} className="mod" onHide={handleClose} animation={false} autoFocus={false}>
        
            <div className="mod-content">
                <h4>Hi There</h4>
                <h6>Hello Ask Us Anything, Share Your Feedbacks</h6>
            </div>
            <div className="mod-body">
                <h6>Start a Conversation</h6> 
                <div >The Team Typically replies in a few minutes</div>
                <Button variant="success" className="btn" onClick={handleShow1}>
                <h6>New Conversation  <i className="Micon material-icons">send</i></h6>   
                </Button>
            </div>
        
      </Modal> 

      <Modal show={show1} className="mod1" onHide={handleClose1} animation={false} autoFocus={false}>
        
            <div className="mod1-content">
                <h4>Hi </h4>
                <h6>Hello Ask Us Anything, Share Your Feedbacks</h6>
            </div>
            <div className="mod1-body" >
                 <div className="left-side">
                     Is there any offline version available for Maxeon Player
                </div> 
                <br></br> 
                <div className="right-side">
                    Currently we don't have but we will launch soon
                </div>        
        </div>
        <br></br>
        <br></br>
        <span className="spn">
        <img src={Sparrow} className="spr" alt="sparrow"></img> we run on surveysparrow
        </span>
        {/* <input type="text" placeholder="Write a reply"></input> */}
       < InputField varient="outlined" fullWidth={true} label="Write a reply..."  inputProps={{style:{color:"black"}}} margin="dense" size="medium" ></InputField>
                    <br></br>
            </Modal>
        
        </div>
    )
}
