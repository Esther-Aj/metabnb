import React from "react";
import {Link} from "react-router-dom";
import{useState} from 'react';
import Modal from './Modal';

import { Container, Nav, Navbar, Button} from "react-bootstrap";

function Navigation() {
  const[isOpen, setIsOpen]=useState(false);
  return (
    <>
    {isOpen && <Modal setIsOpen={setIsOpen}/>}
    
    <Navbar className="nav" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src="images/meta.png" alt="" srcset="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="nav-collapse">
          <Nav className="me-auto nav-wrap">
            <div className="links">
              <Link to="/" className="ref" >Home</Link>
              <Link to="/place" className="ref">Place to stay</Link>
              <Link className="ref">NFTs</Link>
              <Link className="ref">Community</Link>
            </div>
          </Nav>
          <div className="wallet">
          <Button className="btn" onClick={()=> setIsOpen(true)} >Connect wallet</Button>
         
        </div>
        </Navbar.Collapse>
       
      </Container>
    
    </Navbar>
   </>
  );
 
}

export default Navigation;
