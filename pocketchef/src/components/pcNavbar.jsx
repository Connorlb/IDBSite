import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class pcNavbar extends Component {
  render(){
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/"> PocketChef </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullLeft>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              Home
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} href="/restaurant" to="/restaurant">
              Restaurants
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} href="/recipes" to="/recipes">
              Recipes
            </NavItem>
            <NavItem eventKey={4} componentClass={Link} href="/ingredients" to="/ingredients">
              Ingredients
            </NavItem>
            <NavItem eventKey={5} componentClass={Link} href="/about" to="/about">
              About
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}