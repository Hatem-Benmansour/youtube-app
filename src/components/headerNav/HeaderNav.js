import React from 'react'
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { FaMicrophone } from 'react-icons/fa';
import {  AiOutlineVideoCameraAdd} from 'react-icons/ai';
import {IoMdNotificationsOutline} from 'react-icons/io';


const HeaderNav = () => {
  return (
    <div>
      
      <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"> <img style={{width:"100px"}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/langfr-280px-YouTube_Logo_2017.svg.png'alt='logo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
              <Form className="d-flex" style={{justifyContent:"center" , width:"600px", marginLeft:"320px"}}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
            <Nav.Link href="#action1"><FaMicrophone/></Nav.Link>
          </Form>
          </Nav>
        </Navbar.Collapse>
        <div style={{display:"flex", justifyContent:"space-evenly" , width :"200px"}}>
            
            <Nav.Link href="#action2"><AiOutlineVideoCameraAdd/></Nav.Link>
            <Nav.Link href="#action3"><IoMdNotificationsOutline/></Nav.Link>
            
          
            <NavDropdown title="Profile" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Votre chaine</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Youtube studio
              </NavDropdown.Item>
              <NavDropdown.Item href="#action3">Changer de compte</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Se déconnecter
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action3">Achats et abonnements</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Vos données dans Youtube
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            </div>
      </Container>
    </Navbar>
    </div>
  )
}

export default HeaderNav