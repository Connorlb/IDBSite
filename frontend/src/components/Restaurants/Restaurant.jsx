import React from 'react'
import RestaurantAPI from '../../api'
import { Link } from 'react-router-dom'
import {Grid, Row, Col, Image, Button } from 'react-bootstrap' ;
import YouTube from 'react-youtube'
import GoogleMapReact from 'google-map-react';
import axios from 'axios'

class Restaurant extends React.Component {
  constructor() {
      super();
      this.state = {
            restaurant: {},
      };
      this.componentDidMount = this.componentDidMount.bind(this)
  }

componentDidMount() {
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
    console.log(response.data.objects);
    this.setState({restaurant: response.data.objects[0]});});
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

      <Image width={500} height={500} alt="800x800" src={this.state.restaurant.img_link} circle className="contributor-pic" />
      <h1><big>{this.state.restaurant.name}</big></h1>
      <h1></h1>
      <Col xs={12} sm={6}  className="image-wrap">
      <h3>Address: {this.state.restaurant.address}</h3>
      <h2>Rating: {this.state.restaurant.rating}</h2>
      <h2>Phone: {this.state.restaurant.phone}</h2>
      <h2>Cuisine: {this.state.restaurant.cuisine}</h2>
      </Col>
      <Col xs={12} sm={6} className="image-wrap">

      <Link to='/'><h3>Restaurants {this.state.restaurant.position}</h3></Link>
      </Col>
      </Row>

      <Row className="show-grid text-center">
      <Col xs={12}  className="image-wrap">
      <YouTube
        videoId="DkiyT-dnmv8"
        opts={opts}
      />
      </Col>
      </Row>
      <Row>
      <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact bootstrapURLKeys={{ key: "AIzaSyBFObWyqlbpObdkdNE0k4JwX9AB66cTGKw"}}
            defaultCenter={{lat:30,lng:98}}
            defaultZoom={11} />
        </div>
      </Row>
    </Grid>
  )
}
}
export default Restaurant
