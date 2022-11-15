import React from 'react'
import{Link} from 'react-router-dom'
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <Container fluid className='footer-container'>
        <Container>
            <Row>
                <Col className='footer-links' xs={12} md={6} lg={3}>
                    <img className='footer-logo' src="images/footer-logo.svg" alt="" />
                    <div className="socials">
                       <a href="http://"> <img src="images/facebook.svg" alt="" /></a>
                       <a href="http://"><img src="images/instagram.svg" alt="" /></a> 
                       <a href="http://"> <img src="images/twitter.svg" alt="" /></a>
                    </div>
                  
                </Col>
                <Col  className='footer-links' xs={12} md={6} lg={3}>
                    <p>Community</p>
                   <Link>NFT</Link>
                   <Link>Tokens</Link>
                   <Link>Landlords</Link>
                   <Link>Discord</Link>
                </Col>
                <Col  className='footer-links' xs={12} md={6} lg={3}>
                <p>Places</p>
                   <Link>Castle</Link>
                   <Link>Farms</Link>
                   <Link>Beach</Link>
                   <Link>Learn more</Link>
                </Col>
                <Col className='footer-links' xs={12} md={6} lg={3}>
                <p>About us</p>
                   <Link>Road map</Link>
                   <Link>Creators</Link>
                   <Link>Careers</Link>
                   <Link>Contact us</Link>
                </Col>
                <p className='copyright'>&copy; 2022 Metabnb</p>
            </Row>
        </Container>
    </Container>
  )
}

export default Footer