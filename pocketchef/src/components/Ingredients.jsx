import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap' ;
import './Ingredients.css'

export default class Ingredients extends Component {
constructor(props) {
    super(props)

    this.state = {
      name: 'Wont',
      image: 'http://here_you.com',
      foodType: 'Italian'
    }

  }
  readJson(){
  var x = {firstName:"John", lastName:"Doe"};

        var obj = JSON.parse(x);

        console.log(obj.name);
        // expected output: 42

        console.log(obj.age);
        // expected output: true
  }
  render(){
    return (
    <Grid>
      <Row className="show-grid text-center">
        <Col xs={12} sm={4} md={4} className="image-wrap">
        </Col>

        {this.state.name}
        <Image width={200} height={200} alt="200x200" src="https://i.imgur.com/puiutQZ.jpg" circle className="contributor-pic" />
        <h3>Jesus Romero</h3>
        <li class="list-group-item"><b>About:</b> Jesus is a fourth-year CS student who loves tamales. He's an advocate of Olive Garden and splurges at Sushi Junai.</li>
        <li class="list-group-item"><b>Major Responsibilities:</b> Full Stack, setting up server</li>
        <li class="list-group-item"><b>Commits:</b>3</li>
        <li class="list-group-item"><b>Issues:</b>0</li>
        <li class="list-group-item"><b>Unit Tests:</b>0</li>

        </Row>
        </Grid>
    );
  }
}
