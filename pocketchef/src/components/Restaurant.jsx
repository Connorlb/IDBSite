import React from 'react'
import RestaurantAPI from '../api'
import { Link } from 'react-router-dom'
import {Grid, Row, Col, Image, Button } from 'react-bootstrap' ;
import YouTube from 'react-youtube'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';




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

      <Image width={500} height={500} alt="800x800" src={restaurant.image} circle className="contributor-pic" />
      <h1><big>{restaurant.name}</big></h1>
      <h1></h1>
      <Col xs={12} sm={6}  className="image-wrap">
      <h3>Address: {restaurant.position}</h3>
      <h2>Stars: "restaurant.position"</h2>
      <p>Description : isa p sdjf aksd pajspj pasp ijpjapksdn paspijs js  psjdanjpaj osjd;alskji kslksa;idf alskisdcmmd athis sus th gbest tingibatuahs fbuasdpiucusudnc  tuaspiduanndutapisdnuasdnntasdpuasn</p>
      </Col>
      <Col xs={12} sm={6} className="image-wrap">

      <Link to='/'><h3>Link to incredients: {restaurant.position}</h3></Link>
      <Link to='/'><h2>Link to Recipies:</h2></Link>
      <h2>Stars: {restaurant.position}</h2>
      </Col>
      </Row>


      <Row className="show-grid text-center">
      <Col xs={12}  className="image-wrap">
      <YouTube
        videoId="DkiyT-dnmv8"
        opts={opts}
      />
      </Col>

      <Col xs={12}className="image-wrap">
      <YouTube
        videoId="DkiyT-dnmv8"
        opts={opts}
      />
      </Col>
      </Row>

    </Grid>
  )
}
export default Restaurant
