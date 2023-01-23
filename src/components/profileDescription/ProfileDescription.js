import React from 'react'
import { Accordion, Button, ButtonGroup, Dropdown } from 'react-bootstrap';
import { AiFillDislike, AiFillLike } from 'react-icons/ai';
import { BiShare } from 'react-icons/bi';

const Profile ={
                 urlimage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn9fEQRSJZ04arRamwwvKA9394aiOEGFOSyRKvgFm4hO73s62wsps9TS2kiZa5kE2pXxg&usqp=CAU",
                 channelName:"GoMyCode",
                 subNumber:"10k",

};

const ProfileDescription = () => {
  return (
    <div >
      <div style={{display:"flex" , justifyContent:"space-between" ,  marginLeft:"100px" ,width:"300px"}}>
        <img style={{width:"80px" , borderRadius:"50px"}} src={Profile.urlimage} alt='logo'/>
        <div>
          <div style={{justifyContent:"space-between", width:"150px", marginLeft:"70px"}}>
            <h3>
              {Profile.channelName}
            </h3>
            <p>{Profile.subNumber} </p>
          </div>
          
        </div>
        <div style={{width:"120px"}}>
          <Button   variant="secondary">S'abonner</Button>
        </div>
        <div style={{display:"flex" , marginLeft:"300px",justifyContent:"space-between",width:"350px",height:"40px",marginRight:"200px"}}>
                 <ButtonGroup aria-label="Basic example">
             <Button variant="secondary"><AiFillLike/> 12k </Button>
             <Button variant="secondary"><AiFillDislike> </AiFillDislike></Button>
            </ButtonGroup>
    <Button variant="secondary"><BiShare/> partager</Button>
    <Dropdown>
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
          ...
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
          <Dropdown.Item href="#/action-1" active>
            Extrait
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">Enregistrer</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Signaler</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-4">Afficher la transcription </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
                 </div>
        </div>
         
      <div style={{marginLeft:"100px", marginRight:"120px", width:"900px"}}>
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Description</Accordion.Header>
        <Accordion.Body>
        how to make or create a bootstrap 5 offcanvas menu with responsive example with bootstrap in avadh tutor latest bootstrap 5 off-canvas menu example bootstrap 5 responsive sidebar menu example navigation sidebar menu with bootstrap 5 simple and easy trick to create side bar with html css and bootstrap 
Responsive offcanvas menu Source Code Here : https://pandyaripal.blogspot.com/2021...
Topics Covered:
- how to create responsive side bar
- How to make a off-canvas sidebar using bootstrap 5
- how to create easy sidebar using bootstrap
- 2021 bootstrap offcanvas menu
- stylish sidebar using html css bootstrap
Thanks for watch our video Learn all Programming with avadh tutor

Source Code offcanvas sidemenu : https://pandyaripal.blogspot.com/2021...
#Bootstrap5 #offcanvasmenu #webdesign #webdev #UI
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      </div>
    </div>
  )
}

export default ProfileDescription