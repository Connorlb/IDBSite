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
            <Image src="assets/Aditya.jpg" circle className="contributor-pic" />
            <h3>Aditya</h3>
            <p></p>
          </Col>
          <Col xs={12} sm={4} className="image-wrap">
            <Image src="assets/Connor.jpg" circle className="contributor-pic" />
            <h3>Connor</h3>
            <p></p>
          </Col>
          <Col xs={12} sm={4} className="image-wrap">
            <Image src="assets/Jesus.jpg" circle className="contributor-pic" />
            <h3>Jesus</h3>
            <p></p>
          </Col>
          <Col xs={12} sm={4} className="image-wrap">
            <Image src="assets/Matthew.jpg" circle className="contributor-pic" />
            <h3>Matthew</h3>
            <p></p>
          </Col>
          <Col xs={12} sm={4} className="image-wrap">
            <Image src="assets/Patrick.jpg" circle className="contributor-pic" />
            <h3>Patrick</h3>
            <p></p>
          </Col>
        </Row>
      </Grid>
    );
  }
}
