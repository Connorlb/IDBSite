import React from 'react'
import RestaurantAPI from '../../api'
import { Link } from 'react-router-dom'
import {Grid, Row, Col, Image, Button } from 'react-bootstrap' ;
import YouTube from 'react-youtube'
import GoogleMapReact from 'google-map-react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardGroup } from 'reactstrap';
import axios from 'axios'

class Restaurant extends React.Component {
  constructor() {
    super();
    this.state = {
      restaurant: {},
      external:{},
      zoom: 10,
      latitude: 46.7,
      longitude: -122.4
    };
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount() {
    var cuisine_filter = [{"name": "name", "op": "equals", "val": this.props.match.params.name}];
    var ords = [{"field": "name", "direction": "asc"}];
    var data = JSON.stringify({"filters": cuisine_filter, "order_by": ords});
    axios({
      method: 'get',
      url: 'http://pocketchef.me/api/restaurants2',
      params: {
        q: data
      },
      config: { headers: {'Content-Type': "application/json", "Access-Control-Allow-Origin": "*"}}
      }).then(response => {
      console.log(response.data.objects);
      this.setState({restaurant: response.data.objects[0]});
      this.setState({latitude: this.state.restaurant.latitude});
      this.setState({longitude: this.state.restaurant.longitude});});

      cuisine_filter = [{"name": "cuisine", "op": "equals", "val": this.state.restaurant.cuisine}];
      ords = [{"field": "name", "direction": "asc"}];
      data = JSON.stringify({"filters": cuisine_filter, "order_by": ords});
      axios({
        method: 'get',
        url: 'http://pocketchef.me/api/recipes2',
        params: {
          q: data
        },
        config: { headers: {'Content-Type': "application/json", "Access-Control-Allow-Origin": "*"}}
        }).then(response => {
          this.setState({external: response.data.objects});});
  }


  render(){
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
              </CardText>
            </Card>
            <YouTube
              videoId="DkiyT-dnmv8"
              opts={opts}/>
          </Col>
        </Row>
        <Row>
          <h3>Recipes of similar cuisine:</h3>
          <Col>
            <Link to={`/recipes/${this.external[0].name}`}>
              <Card>        
                <CardTitle className="name">
                    <Image width={200} height={200} alt="200x200" src={this.external[0].image} circle className="contributor-pic" />
                </CardTitle>
                <CardText>
                  <h3>{this.external[0].name}</h3>
                </CardText>
              </Card>
            </Link>
          </Col>
          <Col>
            <Link to={`/recipes/${this.external[1].name}`}>
              <Card>        
                <CardTitle className="name">
                    <Image width={200} height={200} alt="200x200" src={this.external[1].image} circle className="contributor-pic" />
                </CardTitle>
                <CardText>
                  <h3>{this.external[1].name}</h3>
                </CardText>
              </Card>
            </Link>
          </Col>
          <Col>
            <Link to={`/recipes/${this.external[2].name}`}>
              <Card>        
                <CardTitle className="name">
                    <Image width={200} height={200} alt="200x200" src={this.external[2].image} circle className="contributor-pic" />
                </CardTitle>
                <CardText>
                  <h3>{this.external[2].name}</h3>
                </CardText>
              </Card>
            </Link>
          </Col>
        </Row>
        <Row>
          <div style={{ height: '73vh', width: '100%' }}>
            <GoogleMapReact bootstrapURLKeys={{ key: "AIzaSyBFObWyqlbpObdkdNE0k4JwX9AB66cTGKw"}}
              defaultCenter={{lat:this.state.latitude, lng:this.state.longitude}}
              defaultZoom={this.state.zoom} />
          </div>        
        </Row>
      </Grid>
    )
  }
}
export default Restaurant
