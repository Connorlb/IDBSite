import React, { Component } from 'react';
import { Link, BrowserRouter, Switch, Route} from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap' ;
import './css/Recipes.css'
import './Recipes.jsx'
import FullRecipes from './FullRecipes'
import Recipes from './Recipe'

export default class RecipesContainer extends Component {
  render(){
    return (
      <Switch>
        <Route exact path='/recipes' component={FullRecipes}/>
        <Route path='/recipes/:name' component={Recipes}/>
      </Switch>
    );
  }
}
