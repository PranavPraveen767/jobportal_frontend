import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Header() {
  return (
    
    <Navbar expand="lg" className="bg-primary">
      <Container fluid>
        <Navbar.Brand href="/" style={{color:'white',fontSize:"35px"}} className='ms-5'>Job Nestle.<span style={{fontSize:"15px"}}>com</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href="#" disabled>
            </Nav.Link>
          </Nav>
          <Button style={{backgroundColor:"#30d5c8"}}  className="me-3" variant="success">Upload CV</Button>

          <Form className="d-flex">

            
            
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="info">Search</Button>
          </Form>

          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header