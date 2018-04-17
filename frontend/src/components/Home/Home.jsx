import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button , Carousel} from 'react-bootstrap' ;
import './css/Home.css'
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class Home extends Component {
  render(){
    return (
        <Nav>
        <Carousel>
          <NavItem eventKey={1} componentClass={Link} href="/restaurants" to="/restaurants">
          <Carousel.Item>
            <img width={1920} height={1080} alt="900x500" src="https://i.imgur.com/4RBHMnj.jpg" />
            <Carousel.Caption>
              <h3>Restaurants</h3>
              <p>Find a restaurant to satisfy your cravings.</p>
            </Carousel.Caption>
          </Carousel.Item>
          </NavItem>
          <NavItem eventKey={2} componentClass={Link} href="/recipes" to="/recipes">
          <Carousel.Item>
            <img width={1920} height={1080} alt="900x500" src="https://i.imgur.com/v8IdVgh.jpg" />
            <Carousel.Caption>
              <h3>Recipes</h3>
              <p>Find a recipe for your favorite foods.</p>
            </Carousel.Caption>
          </Carousel.Item>
          </NavItem>
          <NavItem eventKey={3} componentClass={Link} href="/ingredients" to="/ingredients">
          <Carousel.Item>
            <img width={1920} height={1080} alt="900x500" src="https://i.imgur.com/MOnY5AA.jpg" />
            <Carousel.Caption>
              <h3>Ingredients</h3>
              <p>Find the best ingredients for your meals.</p>
            </Carousel.Caption>
          </Carousel.Item>
          </NavItem>
        </Carousel>
        </Nav>
    );
  }
}
