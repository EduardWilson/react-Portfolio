import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';



const Work = () => {
  return (
   
    <CardGroup>
    <Card style={{margin: "20px", borderRadius: "20px", backgroundColor: "black"}}>
      <Card.Img variant="top" src="jeep.png" style={{borderRadius:"20px"}}/>
      <Card.Body style={{color: "white"}}>
        <Card.Title>Jeep City</Card.Title>
        <Card.Text>
        A website about routes in dagupan city and it indicates the fare of the jeep
        </Card.Text>
      </Card.Body>
      
    </Card>
    <Card style={{margin: "20px", borderRadius: "20px", backgroundColor:"black"}}>
      <Card.Img variant="top" src="recipe.png" style={{borderRadius:"20px"}}/>
      <Card.Body style={{color:"white"}}>
        <Card.Title>Quote'tation</Card.Title>
        <Card.Text>
        A quote generator that inspire and motivate you 
        </Card.Text>
      </Card.Body>
      
    </Card>
    <Card style={{margin: "20px", borderRadius: "20px", backgroundColor:"black"}}>
      <Card.Img variant="top" src="porfolio.png" style={{borderRadius:"20px"}}/>
      <Card.Body style={{color:"white"}}>
        <Card.Title>Portfolio</Card.Title>
        <Card.Text>
        A Simple portfolio that i make
        </Card.Text>
      </Card.Body>
      
    </Card>
  </CardGroup>
  );
};

export default Work;
