import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap' ;
import './About.css'



export default class About extends Component {
  render(){
    return (
      <Grid>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="image-wrap">
            <Image width={200} height={200} alt="200x200" src="https://i.imgur.com/9iA21IL.jpg" circle className="contributor-pic" />
            <h3>Aditya Prasad</h3>
            <p>Aditya is a third-year CS student who is super into playing instruments, but not one specific one. He plays four different ones. He really enjoys going to Halal Bros.</p>
          </Col>
          <Col xs={12} sm={4} className="image-wrap">
            <Image width={200} height={200} alt="200x200" src="https://i.imgur.com/bXpurgB.jpg" circle className="contributor-pic" />
            <h3>Connor Burkman</h3>
            <p>Connor is a fourth-year CS student who thinks Panda Express is too spicy. He's in love with some of the food at Song La.</p>
          </Col>
          <Col xs={12} sm={4} className="image-wrap">
            <Image width={200} height={200} alt="200x200" src="https://i.imgur.com/puiutQZ.jpg" circle className="contributor-pic" />
            <h3>Jesus Romero</h3>
            <p>Jesus is a fourth-year CS student who loves tamales. He's an advocate of Olive Garden and splurges at Sushi Junai.</p>
          </Col>
          <Col xs={12} sm={4} className="image-wrap">
            <Image width={200} height={200} alt="200x200" src="https://i.imgur.com/H158r6O.jpg" circle className="contributor-pic" />
            <h3>Matthew Curtis</h3>
            <p>Matthew is a fourth-year CS students who has the misfortune of having first names for both first and last names. He loves the take on Asian cuisine at the local food truck Pinch.</p>
          </Col>
          <Col xs={12} sm={4} className="image-wrap">
            <Image width={200} height={200} alt="100x100" src="https://i.imgur.com/BmRVX02.jpg" circle className="contributor-pic" />
            <h3>Patrick Dalisay</h3>
            <p>Matthew is a fourth-year CS students who has the misfortune of having first names for both first and last names. He loves the take on Asian cuisine at the local food truck Pinch.</p>
          </Col>
        </Row>
      </Grid>
    );
  }
}
