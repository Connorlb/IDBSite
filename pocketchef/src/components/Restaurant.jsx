import React from 'react'
import RestaurantAPI from '../api'
import { Link } from 'react-router-dom'
import {Grid, Row, Col, Image, Button } from 'react-bootstrap' ;
import YouTube from 'react-youtube'
import GoogleMapReact from 'google-map-react';


// The Restaurant looks up the restaurant using the number parsed from
// the URL's pathname. If no restaurant is found with the given
// number, then a "restaurant not found" message is displayed.
const Restaurant = (props) => {
  const restaurant = RestaurantAPI.get(
    //parseInt(props.match.params.number, 10)
    props.match.params.name
  )
  if (!restaurant) {
    return <div>Sorry, the restaurant was not found</div>
  }
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

      <Image width={500} height={500} alt="800x800" src={restaurant.img_link} circle className="contributor-pic" />
      <h1><big>{restaurant.name}</big></h1>
      <h1></h1>
      <Col xs={12} sm={6}  className="image-wrap">
      <h3>Address: {restaurant.address}</h3>
      <h2>Rating: {restaurant.rating}</h2>
      <h2>Phone: {restaurant.phone}</h2>
      <h2>Cuisine: {restaurant.cuisine}</h2>
      </Col>
      <Col xs={12} sm={6} className="image-wrap">

      <Link to='/'><h3>Restaurants {restaurant.position}</h3></Link>
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
export default Restaurant
