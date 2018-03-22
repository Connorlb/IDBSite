import React, { Component } from 'react';
import { Link, BrowserRouter, Switch, Route} from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap' ;
import './Restaurants.css'
import './Restaurant.jsx'
import FullRestaurants from './FullRestaurants'
import Restaurant from './Restaurant'


export default class RestaurantsContainer extends Component {
  render(){
    return (
      <Switch>
        <Route exact path='/restaurants' component={FullRestaurants}/>
        <Route path='/restaurants/:name' component={Restaurant}/>
      </Switch>
    );
  }
}
