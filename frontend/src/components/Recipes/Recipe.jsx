import React from 'react'
import RestaurantAPI from '../../api'
import { Link } from 'react-router-dom'
import {Grid, Row, Col, Image, Button } from 'react-bootstrap' ;
import YouTube from 'react-youtube'
import GoogleMapReact from 'google-map-react';
import axios from 'axios'
import './css/Recipes.css'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';


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
      <Row>
        <Card className="fullRecipe header">
          <CardTitle>
            <h2>
              <span>Servings: {this.state.recipe.servings} </span>
              <span>Prep time: {this.state.recipe.prep_time}</span>
              <span>Cuisine: {this.state.recipe.cuisine}</span>
              </h2>
          </CardTitle>
        </Card>
      </Row>

      <Col xs={12} sm={6} >
      <Card className="fullRecipe body">
      <h1>Ingredients:</h1><h4> <br/> {this.state.recipe.ingredients}</h4>
      </Card>
      </Col>

      <Col xs={12} sm={6} >
      <Card className="fullRecipe body">
      <h1>Instructions:</h1><h4> <br/> {this.state.recipe.instructions}</h4>
      </Card>
      </Col>
      </Row>

    </Grid>

  )
}
}
export default Recipe