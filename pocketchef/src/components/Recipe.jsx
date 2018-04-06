import React from 'react'
import RestaurantAPI from '../api'
import { Link } from 'react-router-dom'
import {Grid, Row, Col, Image, Button } from 'react-bootstrap' ;
import YouTube from 'react-youtube'
import GoogleMapReact from 'google-map-react';
import axios from 'axios'

class Recipe extends React.Component {
  constructor() {
      super();
      this.state = {
            recipe: {},
      };
      this.componentDidMount = this.componentDidMount.bind(this)
  }

componentDidMount() {
  var cuisine_filter = [{"name": "name", "op": "equals", "val": this.props.match.params.name}];
  var ords = [{"field": "name", "direction": "asc"}];
  let data = JSON.stringify({"filters": cuisine_filter, "order_by": ords});
  axios({
    method: 'get',
    url: 'http://pocketchef.me/api/recipes2',
    params: {
      q: data
    },
    config: { headers: {'Content-Type': "application/json", "Access-Control-Allow-Origin": "*"}}
    }).then(response => {
    console.log(response.data.objects);
    this.setState({recipe: response.data.objects[0]});});
}

  render(){
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0
    }
  }

  return (
    <Grid>
    <Row className="show-grid text-center">

      <h1><big>{this.state.recipe.name}</big></h1>
      <h1></h1>
      <Col xs={12} sm={6}  className="image-wrap">
      <h3>Servings: {this.state.recipe.servings}</h3>
      <h2>Prep time: {this.state.recipe.prep_time}</h2>
      <h2>Phone: {this.state.recipe.phone}</h2>
      <h1>Ingredients: {this.state.recipe.ingredients}</h1>

      </Col>
      <Col xs={12} sm={6} className="image-wrap">
      <h2>Cuisine: {this.state.recipe.cuisine}</h2>
      <h1>Instructions: {this.state.recipe.instructions}</h1>
      </Col>
      </Row>

    </Grid>

  )
}
}
export default Recipe
