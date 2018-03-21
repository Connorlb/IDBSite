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
            <img width={1920} height={1080} alt="900x500" src="https://imgur.com/4RBHMnj" />
            <Carousel.Caption>
              <h3>Restaurants</h3>
              <p>Find a restaurant to satisfy your cravings.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={1920} height={1080} alt="900x500" src="https://imgur.com/v8IdVgh" />
            <Carousel.Caption>
              <h3>Recipes</h3>
              <p>Find a recipe for your favorite foods.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={1920} height={1080} alt="900x500" src="https://imgur.com/MOnY5AA" />
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
