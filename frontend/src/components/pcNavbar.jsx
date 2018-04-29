import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './pcNavbar.css';

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
      <Navbar default collapseOnSelect fixedTop="true">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/"> <img src="https://i.imgur.com/dPFs9ui.png" height="50" width="50"/> </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullLeft>
           <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              <h4><b>PocketChef</b></h4>
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} href="/restaurants" to="/restaurants">
              <h4>Restaurants</h4>
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} href="/recipes" to="/recipes">
              <h4>Recipes</h4>
            </NavItem>
            <NavItem eventKey={4} componentClass={Link} href="/ingredients" to="/ingredients">
              <h4>Ingredients</h4>
            </NavItem>
            <NavItem eventKey={5} componentClass={Link} href="/about" to="/about">
              <h4>About</h4>
            </NavItem>
            <NavItem eventKey={6} componentClass={Link} href="/visualization" to="/visualization">
              <h4>Visualization</h4>
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem>
              <input type="text"
                value={this.state.search}
                onChange={this.updateSearch.bind(this)}/>
                </NavItem>
                  <NavItem>
                <Link to={`/search/${this.state.search}`}><Button>Search</Button></Link>
            </NavItem>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
