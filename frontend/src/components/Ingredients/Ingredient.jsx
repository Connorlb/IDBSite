import React from 'react'
import RestaurantAPI from '../../api'
import { Link } from 'react-router-dom'
import {Grid, Row, Col, Image, Button } from 'react-bootstrap' ;
import YouTube from 'react-youtube'
import GoogleMapReact from 'google-map-react';
import axios from 'axios'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardGroup } from 'reactstrap';

class Ingredient extends React.Component {
  constructor() {
    super();
    this.state = {
      ingredient: {},
    };
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount() {
    var cuisine_filter = [{"name": "name", "op": "equals", "val": this.props.match.params.name}];
    var ords = [{"field": "name", "direction": "asc"}];
    let data = JSON.stringify({"filters": cuisine_filter, "order_by": ords});
    axios({
      method: 'get',
      url: 'http://pocketchef.me/api/ingredients2',
      params: {
        q: data
      },
      config: { headers: {'Content-Type': "application/json", "Access-Control-Allow-Origin": "*"}}
      }).then(response => {
        console.log(response.data.objects);
        this.setState({ingredient: response.data.objects[0]});});
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
      <Card style={{ backgroundColor: '#D8C3A5'}}>
         <CardTitle className="name">
            <Link to={`/ingredients/${this.state.ingredient.name}`}>
            <Image width={200} height={200} alt="200x200" src={this.state.ingredient.picture} circle className="contributor-pic" /></Link>
          </CardTitle>
          <CardBody outline color="secondary">
            <CardText>
              <h3 class="name">{this.state.ingredient.name}</h3><br/>
              <b>Calories</b> {this.state.ingredient.calories}<br/>
              <b>Protein </b>{this.state.ingredient.protein}<br/>
              <b>Fat </b>{this.state.ingredient.fat}<br/>
              <b>Carbs </b>{this.state.ingredient.carbs}<br/>
            </CardText>
          </CardBody>
        </Card>
      </Row>
    </Grid>
    )
  } 
}
export default Ingredient
