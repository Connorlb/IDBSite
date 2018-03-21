import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap' ;
import './About.css'
import connorImage from './assets/Connor.jpg';
import adityaImage from './assets/Aditya.jpg';
import jesusImage from './assets/Jesus.jpg';
import matthewImage from './assets/Matthew.jpg';
import patrickImage from './assets/Patrick.jpg';

console.log(connorImage);
export default class About extends Component {
  render(){
    return (
      <Grid>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="image-wrap">
            <Image width={200} height={200} alt="200x200" src={adityaImage} circle className="contributor-pic" />
            <h3>Aditya</h3>
            <p>He is a guy. He often uses a computer. That is all we know.</p>
          </Col>
          <Col xs={12} sm={4} className="image-wrap">
            <Image width={200} height={200} alt="200x200" src={connorImage} circle className="contributor-pic" />
            <h3>Connor</h3>
            <p>He is really into Ancestry.com research.</p>
          </Col>
          <Col xs={12} sm={4} className="image-wrap">
            <Image width={200} height={200} alt="200x200" src={jesusImage} circle className="contributor-pic" />
            <h3>Jesus</h3>
            <p>He likes long walks on the beach and the popular food retailer Don. </p>
          </Col>
          <Col xs={12} sm={4} className="image-wrap">
            <Image width={200} height={200} alt="200x200" src={matthewImage} circle className="contributor-pic" />
            <h3>Matthew</h3>
            <p>He is worried that he will not amount to anything. This fear drives him.</p>
          </Col>
          <Col xs={12} sm={4} className="image-wrap">
            <Image width={200} height={200} alt="100x100" src={patrickImage} circle className="contributor-pic" />
            <h3>Patrick</h3>
            <p>Patrick is a real human and not a robot. I'm not sure where you heard that, but it totally isn't true.</p>
          </Col>
        </Row>
      </Grid>
    );
  }
}
