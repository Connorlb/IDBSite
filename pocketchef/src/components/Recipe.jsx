import React from 'react'
import RecipeAPI from '../api'
import { Link } from 'react-router-dom'
import {Grid, Row, Col, Image, Button } from 'react-bootstrap' ;
import YouTube from 'react-youtube'
import GoogleMapReact from 'google-map-react';


// The Recipe looks up the recipe using the number parsed from
// the URL's pathname. If no recipe is found with the given
// number, then a "recipe not found" message is displayed.
const Recipe = (props) => {
  const recipe = RecipeAPI.getRecipes(
    //parseInt(props.match.params.number, 10)
    props.match.params.name
  )
  if (!recipe) {
    return <div>Sorry, the recipe was not found</div>
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

      <h1><big>{recipe.name}</big></h1>
      <h1></h1>
      <Col xs={12} sm={6}  className="image-wrap">
      <h3>Servings: {recipe.servings}</h3>
      <h2>Prep time: {recipe.prep_time}</h2>
      <h2>Phone: {recipe.phone}</h2>
      <h1>Ingredients: {recipe.ingredients}</h1>

      </Col>
      <Col xs={12} sm={6} className="image-wrap">
      <h2>Cuisine: {recipe.cuisine}</h2>
      <h1>Instructions: {recipe.instructions}</h1>
      </Col>
      </Row>

    </Grid>
  )
}
export default Recipe
