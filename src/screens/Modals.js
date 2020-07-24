import React from 'react'
import {Button,Popover,OverlayTrigger} from 'react-bootstrap'

import Icon from '../FED-Intermediate-Assets/004.png'


export default function Modals() {
    // const [modalIsOpen,setModalIsOpen]=useState(false)
    const popover1=(
        <Popover id="popover-basic" className="PopUp1">
        <Popover.Content>
        <h6>Start a Conversation</h6> 
        <div>The Team Typically replies in a few minutes</div>
       </Popover.Content>
       </Popover>
        );

    const popover = (
        <Popover id="popover-basic" className="PopUp">
          <Popover.Title  className="popTitle">
              <h4>Hi There</h4>
                <h6>Hello Ask Us Anything, Share Your Feedbacks</h6>
              </Popover.Title>
          <Popover.Content>
           <h6>Start a Conversation</h6> 
           <div>The Team Typically replies in a few minutes</div>
          </Popover.Content>

          
          <OverlayTrigger trigger="click" placement="top" overlay={popover1}>
            <Button variant="success" className="btn">
                <h6>New Conversation  <i className="Micon material-icons">send</i></h6>   
                </Button>
            </OverlayTrigger>
        </Popover>
      );

      const Example = () => (
        <OverlayTrigger trigger="click" placement="top" overlay={popover}>
          <img  className="Icon" src={Icon}></img>
        </OverlayTrigger>
      );
      
    return (
            <>
            <Example></Example>
            {/* <OverlayTrigger trigger="click" placement="right" overlay={popover}>
              <Button variant="success">Click me to see</Button>
            </OverlayTrigger> */}
             </>
        // <div>
        //     <Modal isOpen={modalIsOpen} className="Modals">
        //         <h2>Ashish</h2>
        //         <p>kajsdhdkjhfejdjsnmdlfnjhb</p>
        //     </Modal>
        //     <img onClick={()=>setModalIsOpen(true)} className="Icon" src={Icon}></img>
        // </div>
    )
}
