import React from 'react';
import {Accordion, Container} from 'react-bootstrap';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';


const Education = () => {
  return (
    <Container style={{color: "black"}}>
      <h2 className='display-1 fw-bold text-center'>My Education</h2>
      <p className='text-center'>These are my academic qualifications:</p>
      <hr/>
      <Container className='p-5' style={{backgroundColor: "black"}}>
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0" style={{marginBottom: "30px"}}>
        <Accordion.Header >2009-2014</Accordion.Header>
        <Accordion.Body>
        MACALEENG ELEMENTARY SCHOOL
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" style={{marginBottom: "30px"}}>
        <Accordion.Header>2014-2018</Accordion.Header>
        <Accordion.Body>
        MACALEENG NATIONAL HIGH SCHOOL
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" style={{marginBottom: "30px"}}>
        <Accordion.Header>2018-2020</Accordion.Header>
        <Accordion.Body>
        STI ALAMINOS
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3" style={{marginBottom: "30px"}}>
        <Accordion.Header>2021-Present</Accordion.Header>
        <Accordion.Body>
        2021-Present
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    
      </Container>
    </Container>
  );
};

export default Education;
