import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class PcNavbar extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    };
  }
  updateSearch(event){
    console.log("event "+ event.target.value);
    this.setState({search: event.target.value});

  }
  render(){
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/"> PocketChef </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullLeft>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              Home
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} href="/restaurants" to="/restaurants">
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
          <Nav pullRight>
            <NavItem>
              <input type="text"
                value={this.state.search}
                onChange={this.updateSearch.bind(this)}/>
                </NavItem>
                  <NavItem>
                <Button><Link to={`/search/${this.state.search}`}>Search</Link></Button>
            </NavItem>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
