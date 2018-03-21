import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button , Carousel} from 'react-bootstrap' ;
import './Home.css'

export default class Home extends Component {
  render(){
    return (
      <Grid>
        <Carousel>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src="/assets/restaurant_carousel.jpg" />
            <Carousel.Caption>
              <h3>Restaurants</h3>
              <p>Find a restaurant to satisfy your cravings.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src="/assets/recipe_carousel.jpg" />
            <Carousel.Caption>
              <h3>Recipes</h3>
              <p>Find a recipe for your favorite foods.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src="/assets/ingredients_carousel.jpg" />
            <Carousel.Caption>
              <h3>Ingredients</h3>
              <p>Find the best ingredients for your meals.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>;
      </Grid>
    );
  }
}
