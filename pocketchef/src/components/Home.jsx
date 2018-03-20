import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap' ;
import './Home.css'

export default class Home extends Component {
  render(){
    return (
      <Grid>
        <Jumbotron>
          <h2> Welcome to PocketChef </h2>
          <p> Bringing restaurants to your home </p>
        </Jumbotron>
      </Grid>
    );
  }
}
