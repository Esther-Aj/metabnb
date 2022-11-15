import React from "react";
import Navigation from "./Navigation";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from './Footer';


function Home() {
  return (
    <div className="wrap">
      <div className="wrapper-container">
      <Container className="container-hero">
        <Navigation />
     
        <Row className="hero-row">
          <Col lg={7} className="column1">
            <h1>
              Rent a <span>Place</span> away from <span>Home</span> in the{" "}
              <span>Metaverse</span>
            </h1>
            <p>
              We provide you access to luxury and affordable houses in the
              metaverse, get a chance to turn your imagination to reality at
              your comfort zone
            </p>
            <div className="search">
              <input
                type="text"
                placeholder="Search for location"
                name=""
                id=""
              />
              <button>Search</button>
            </div>
          </Col>
          <Col md={12} lg={5} className="column">
            <div className="nft-img1">
              <img src="images/image 4.png" alt="" srcset="" />
              <img src="images/image 6.png" alt="" srcset="" />
            </div>
            <div className="nft-img2">
              <img src="images/image 3.png" alt="" srcset="" />
              <img src="images/image 5.png" alt="" srcset="" />
            </div>
          </Col>
        </Row>
      </Container>
      </div>
      <Container fluid>
        <Row className="vector-row">
          <Col xs={4} md={4} className="nft">
            <img src="images/vector1.svg" alt="" />
          </Col>
          <Col  xs={4} md={4} className="nft">
            <img src="images/vector2.svg" alt="" />
          </Col>
          <Col  xs={4} md={4} className="nft">
            <img src="images/vector3.svg" alt="" />
          </Col>
        </Row>
      </Container>

      <div className="wrapper-container">
      <Container className="inspo-container">
        <h1 className="heading-inspiration">
          Inspiration for your next adventure
        </h1>
        <Row className="row-nft">
          <Col className="col-card" md={6} lg={3}>
           
            <div className="card-wrapper">
              <Link>
                <img src="images/frame1.png" alt="" srcset="" />
              </Link>
              <div className="card-text">
                <div>
                  <p>Desert King</p>
                  <p>2345km away</p>
                  <div className="ratings">
                    <img src="images/star.svg" alt="" />
                    <img src="images/star.svg" alt="" />
                    <img src="images/star.svg" alt="" />
                    <img src="images/star.svg" alt="" />
                    <img src="images/star.svg" alt="" />
                  </div>
                </div>

                <div className="mbt">
                  <p>1MBT per night</p>
                  <p>available for 2weeks stay</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6} lg={3}>
          <div className="card-wrapper">
              <Link>
                <img src="images/frame2.png" alt="" srcset="" />
              </Link>
              <div className="card-text">
                <div>
                  <p>Desert King</p>
                  <p>2345km away</p>
                  <div className="ratings">
                    <img src="images/star.svg" alt="" />
                    <img src="images/star.svg" alt="" />
                    <img src="images/star.svg" alt="" />
                    <img src="images/star.svg" alt="" />
                    <img src="images/star.svg" alt="" />
                  </div>
                </div>

                <div className="mbt">
                  <p>1MBT per night</p>
                  <p>available for 2weeks stay</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6} lg={3}>
          <div className="card-wrapper">
              <Link>
                <img src="images/frame3.png" alt="" srcset="" />
              </Link>
              <div className="card-text">
                <div>
                  <p>Desert King</p>
                  <p>2345km away</p>
                  <div className="ratings">
                    <img src="images/star.svg" alt="" />
                    <img src="images/star.svg" alt="" />
                    <img src="images/star.svg" alt="" />
                    <img src="images/star.svg" alt="" />
                    <img src="images/star.svg" alt="" />
                  </div>
                </div>

                <div className="mbt">
                  <p>1MBT per night</p>
                  <p>available for 2weeks stay</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6} lg={3}>
          <div className="card-wrapper">
              <Link>
                <img src="images/frame4.png" alt="" srcset="" />
              </Link>
              <div className="card-text">
                <div>
                  <p>Desert King</p>
                  <p>2345km away</p>
                  <div className="ratings">
                    <img src="images/star.svg" alt="" />
                    <img src="images/star.svg" alt="" />
                    <img src="images/star.svg" alt="" />
                    <img src="images/star.svg" alt="" />
                    <img src="images/star.svg" alt="" />
                  </div>
                </div>

                <div className="mbt">
                  <p>1MBT per night</p>
                  <p>available for 2weeks stay</p>
                </div>
              </div>
            </div>
          </Col>
          <Col className="col-card" md={6} lg={3}>
           
            <div className="card-wrapper">
              <Link>
                <img src="images/frame5.png" alt="" srcset="" />
              </Link>
              <div className="card-text">
                <div>
                  <p>Desert King</p>
                  <p>2345km away</p>
                  <div className="ratings">
                    <img src="images/star.svg" alt="" />
                    <img src="images/star.svg" alt="" />
                    <img src="images/star.svg" alt="" />
                    <img src="images/star.svg" alt="" />
                    <img src="images/star.svg" alt="" />
                  </div>
                </div>

                <div className="mbt">
                  <p>1MBT per night</p>
                  <p>available for 2weeks stay</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6} lg={3}>
          <div className="card-wrapper">
              <Link>
                <img src="images/frame6.png" alt="" srcset="" />
              </Link>
              <div className="card-text">
                <div>
                  <p>Desert King</p>
                  <p>2345km away</p>
                  <div className="ratings">
                    <img src="images/star.svg" alt="" />
                    <img src="images/star.svg" alt="" />
                    <img src="images/star.svg" alt="" />
                    <img src="images/star.svg" alt="" />
                    <img src="images/star.svg" alt="" />
                  </div>
                </div>

                <div className="mbt">
                  <p>1MBT per night</p>
                  <p>available for 2weeks stay</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6} lg={3}>
          <div className="card-wrapper">
              <Link>
                <img src="images/frame7.png" alt="" srcset="" />
              </Link>
              <div className="card-text">
                <div>
                  <p>Desert King</p>
                  <p>2345km away</p>
                  <div className="ratings">
                    <img src="images/star.svg" alt="" />
                    <img src="images/star.svg" alt="" />
                    <img src="images/star.svg" alt="" />
                    <img src="images/star.svg" alt="" />
                    <img src="images/star.svg" alt="" />
                  </div>
                </div>

                <div className="mbt">
                  <p>1MBT per night</p>
                  <p>available for 2weeks stay</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6} lg={3}>
          <div className="card-wrapper">
              <Link>
                <img src="images/frame8.png" alt="" srcset="" />
              </Link>
              <div className="card-text">
                <div>
                  <p>Desert King</p>
                  <p>2345km away</p>
                  <div className="ratings">
                    <img src="images/star.svg" alt="" />
                    <img src="images/star.svg" alt="" />
                    <img src="images/star.svg" alt="" />
                    <img src="images/star.svg" alt="" />
                    <img src="images/star.svg" alt="" />
                  </div>
                </div>

                <div className="mbt">
                  <p>1MBT per night</p>
                  <p>available for 2weeks stay</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      </div>
      <Container fluid className="meta-container">
        <Container>
          <Row className="bnb-row">
        <Col md={12} lg={4} className='bnb'>
<h1>Metabnb NFTs</h1>
<p>
Discover our NFT gift cards collection. 
Loyal customers gets amazing gift cards which 
are traded as NFTs. These NFTs gives our cutomer 
access to loads of our exclusive services.
</p>
<div className="learn">
<Link className="learn-more">Learn more</Link>
</div>
        </Col>
        <Col md={12} lg={8} className='frame9'>
          <img className="frame9-img" src="images/frame9.png" alt="" srcset="" />
        </Col>
          </Row>
        </Container>
      </Container>
    
      <Footer/>
    </div>
  );
}

export default Home;
