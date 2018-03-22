import React from 'react'
import RestaurantAPI from '../api'
import { Link } from 'react-router-dom'
import {Grid, Row, Col, Image, Button } from 'react-bootstrap' ;
import { Player } from 'video-react';


// The Restaurant looks up the restaurant using the number parsed from
// the URL's pathname. If no restaurant is found with the given
// number, then a "restaurant not found" message is displayed.
const Restaurant = (props) => {
  const restaurant = RestaurantAPI.get(
    parseInt(props.match.params.number, 10)
  )
  if (!restaurant) {
    return <div>Sorry, but the restaurant was not found</div>
  }
  return (
    <Grid>
    <Player
      playsInline
      poster="/assets/poster.png"
      src="https://youtu.be/akA_Z9Xmnvc"
    />
    <Row className="show-grid text-center">

      <Image width={500} height={500} alt="800x800" src={restaurant.image} circle className="contributor-pic" />
      <h1>{restaurant.name}</h1>
      <h2>Position: {restaurant.position}</h2>
      <Link to='/restaurants'>Back</Link>
    </Row>
    </Grid>
  )
}

export default Restaurant
