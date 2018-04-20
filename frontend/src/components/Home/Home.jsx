import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Image, Carousel} from 'react-bootstrap' ;
import './css/Home.css'
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class Home extends Component {
  render(){
    return (
      <Nav>
        <Carousel>
          <Carousel.Item>
            <img width={1920} height={1080} alt="900x500" src="https://i.imgur.com/4RBHMnj.jpg" />
            <Carousel.Caption>
              <NavItem eventKey={1} componentClass={Link} href="/restaurants" to="/restaurants">
                <h3 class="w">Restaurants</h3>
                <p class="w">Find a restaurant to satisfy your cravings.</p>
              </NavItem>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img width={1920} height={1080} alt="900x500" src="https://i.imgur.com/v8IdVgh.jpg" />
            <Carousel.Caption>
              <NavItem eventKey={2} componentClass={Link} href="/recipes" to="/recipes">
                <h3 class="w">Recipes</h3>
                <p class="w">Find a recipe for your favorite foods.</p>
              </NavItem>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img width={1920} height={1080} alt="900x500" src="https://i.imgur.com/MOnY5AA.jpg" />
            <Carousel.Caption>
              <NavItem eventKey={3} componentClass={Link} href="/ingredients" to="/ingredients">
                <h3 class="w">Ingredients</h3>
                <p class="w">Find the best ingredients for your meals.</p>
              </NavItem>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Nav>
    );
  }
}
