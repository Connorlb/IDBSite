import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap' ;
import './Restaurants.css'

export default class Restaurants extends Component {
  render(){
    return (
      <div>
        <h2 align="center">Recipes</h2> 
        <Grid>
        </Grid>
      </div>
    );
  }
}
