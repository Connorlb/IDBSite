import React, { Component } from 'react';
import { Link, BrowserRouter, Switch, Route} from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap' ;
import './css/Ingredients.css'
import './Ingredient.jsx'
import FullIngredients from './FullIngredients'
import Ingredient from './Ingredient'


export default class IngredientsContainer extends Component {
  render(){
    return (
    <Switch>
      <Route exact path='/ingredients' component={FullIngredients}/>
      <Route path='/Ingredients/:name' component={Ingredient}/>
    </Switch>
    );
  }
}
