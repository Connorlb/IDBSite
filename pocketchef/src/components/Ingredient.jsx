import React from 'react'
import IngredientAPI from '../api'
import { Link } from 'react-router-dom'
import {Grid, Row, Col, Image, Button } from 'react-bootstrap' ;
import YouTube from 'react-youtube'
import GoogleMapReact from 'google-map-react';




// The Ingredient looks up the ingredient using the number parsed from
// the URL's pathname. If no ingredient is found with the given
// number, then a "ingredient not found" message is displayed.
const Ingredient = (props) => {
  const ingredient = IngredientAPI.getIng(
    //parseInt(props.match.params.number, 10)
    props.match.params.name
  )
  if (!ingredient) {
    return <div>Sorry, the ingredient was not found</div>
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

      <Image width={500} height={500} alt="800x800" src={ingredient.picture} circle className="contributor-pic" />
      <h1><big>{ingredient.name}</big></h1>
      <h1></h1>
      <Col xs={12} sm={6}  className="image-wrap">
      <h2>Calories: {ingredient.calories}</h2>
      <h2>Fat: {ingredient.fat}</h2>
      <h2>Protein: {ingredient.protein}</h2>
      <h2>Carbs: {ingredient.carbs}</h2>
      </Col>
      <Col xs={12} sm={6} className="image-wrap">
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
export default Ingredient
