import React from 'react';

import SocialLinks from '../components/SocialLinks';
import { useTypewriter,Cursor } from 'react-simple-typewriter';
import { Button, Image, Row, Col} from 'react-bootstrap';
import { Link } from "react-router-dom";



const Home = () => {

  return (
    <div className='container d-flex justify-content-center align-items-center'>
      
      <Row className='hero gap-5'>
      
        <Col>
          <h1 className='display-1 fw-bold'>Eduard Wilson Cabada Caasi</h1>
          <h3>i'm a Developer
          </h3>
          <hr/>  
          <p style={{color: "black", fontsize: "20px"}}>
          I'm a web developer and researcher, passionate about creating innovative online experiences
          </p>
          <div className='d-flex align-items-center gap-2'> 
            <Link to='/work'>
              <Button className='btn-lg' style={{backgroundColor: "black"}}>My Work</Button>
            </Link>
            
            <SocialLinks />
          </div>
          
        </Col>
        <Col className='photo d-flex justify-content-center align-items-center'>
          <Image src="/profile.png" width={500} height={600} alt="profile" className="rounded-lg"/>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
