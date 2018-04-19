import React from 'react'
import RestaurantAPI from '../../api'
import { Link } from 'react-router-dom'
import {Grid, Row, Col, Image, Button } from 'react-bootstrap' ;
import YouTube from 'react-youtube'
import GoogleMapReact from 'google-map-react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardGroup } from 'reactstrap';
import axios from 'axios'
import rMap from '../assets/rMap'

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
              <CardText>
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
          
            <rMap latitude={this.state.restaurant.latitude} longitude={this.state.restaurant.longitude} zoom={11}/>
        
       </Row>
      </Grid>
    )
  }
}
export default Restaurant
