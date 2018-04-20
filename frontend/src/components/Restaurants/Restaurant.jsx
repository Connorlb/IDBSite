import React from 'react'
import { Link } from 'react-router-dom'
import {Grid, Row, Col, Image, Button } from 'react-bootstrap' ;
import YouTube from 'react-youtube'
import GoogleMapReact from 'google-map-react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardGroup } from 'reactstrap';
import axios from 'axios'

const LINKS = require('../../functionalityassets/cuisine_links.js');


class Restaurant extends React.Component {
  constructor() {
    super();
    this.state = {
      restaurant: {},
      external:[{name:"sample"}, {name:"sample2"}, {name:"this"}],
      zoom: 10,
      latitude: 46.7,
      longitude: -122.4
    };
    this.componentWillMount = this.componentWillMount.bind(this)
    this.getRecipe = this.getRecipe.bind(this)
  }

  getRecipe() {
    var cuisine_filter = [{"name": "cuisine", "op": "equals","val": `${this.state.restaurant.cuisine}`}];
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
        this.setState({external: response.data.objects});})
      .catch(function (error) {
        console.log(error);})
  }

  componentWillMount() {
    var cuisine_filter = [{"name": "name", "op": "equals", "val": this.props.match.params.name}];
    var ords = [{"field": "name", "direction": "asc"}];
    let data = JSON.stringify({"filters": cuisine_filter, "order_by": ords});
    axios({
      method: 'get',
      url: 'http://pocketchef.me/api/restaurants2',
      params: {
        q: data
      },
      config: { headers: {'Content-Type': "application/json", "Access-Control-Allow-Origin": "*"}}
      }).then(response => {
      this.setState({restaurant: response.data.objects[0]}, () => {
        this.getRecipe();
      });})
      .catch(function (error) {
        console.log(error);})

  }


  render(){
    var options = LINKS.LINKS;
    const opts = {
      height: '280',
      width: '500',
      playerVars: {
        autoplay: 0
      }
    }

    return (
      <Grid>
        <Row className="show-grid text-center">
          <Col xs={12} sm={6}>
            <Card>
              <CardTitle>
                <Image width={400} height={400} alt="400x400" src={this.state.restaurant.img_link} circle className="contributor-pic" />
              </CardTitle>
              <CardText>
                <h1>{this.state.restaurant.name}</h1>
              </CardText>
            </Card>
          </Col>
          <Col xs={12} sm={6}>
            <Card>
              <CardText body>
                <h3>Address: {this.state.restaurant.address}</h3>
                <h3>Rating: {this.state.restaurant.rating}</h3>
                <h3>Phone: {this.state.restaurant.phone}</h3>
                <h3>Cuisine: {this.state.restaurant.cuisine}</h3>
                <h3><a href={this.state.restaurant.yelp_link}>Reviews</a></h3>
              </CardText>
            </Card>
            <h3>Related Videos</h3>
            <YouTube
              videoId={options[this.state.restaurant.cuisine][1]}
              opts={opts}/>
          </Col>
        </Row>
        <Row>
          <h3>Recipes of similar cuisine:</h3>
          <Col>
            <Card>
            <CardTitle className="name">
              <Link to={`/recipes/${this.state.external[0].name}`}>
              <h3>{this.state.external[0].name}</h3>
                </Link>
            </CardTitle>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardTitle className="name">
              <Link to={`/recipes/${this.state.external[1].name}`}>
              <h3>{this.state.external[1].name}</h3>
                </Link>
            </CardTitle>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardTitle className="name">
              <Link to={`/recipes/${this.state.external[2].name}`}>
              <h3>{this.state.external[2].name}</h3>
                </Link>
            </CardTitle>
            </Card>
          </Col>
        </Row>
        <Row>
          <div style={{ height: '73vh', width: '100%' }}>
            <GoogleMapReact bootstrapURLKeys={{ key: "AIzaSyBFObWyqlbpObdkdNE0k4JwX9AB66cTGKw"}}
              defaultCenter={{lat:this.state.restaurant.latitude, lng:this.state.restaurant.longitude}}
              defaultZoom={this.state.zoom} />
          </div>
        </Row>
      </Grid>
    )
  }
}
export default Restaurant
