import React from 'react'
import RestaurantAPI from '../../api'
import { Link } from 'react-router-dom'
// import "./css/RestaurantCard.css"
import Pagination from "react-js-pagination";
import {Grid, Row, Col, Image, Button } from 'react-bootstrap' ;

class RecipeCard extends React.Component {
  constructor() {
        super();
    }
    render(){
      return(
                <div class="card">
                <li class="list-group-item">
                <Link to={`/recipes/${this.props.name}`}><li class="list-group-item"><h2 class="name">{this.props.name}</h2></li></Link>
                <li class="list-group-item"><b>Cuisine</b> {this.props.cuisine}</li>
                <li class="list-group-item"><b>Servings </b>{this.props.servings}</li>
                <li class="list-group-item"><a href={`${this.props.link}`}>LINK</a></li>
                </li>
                </div>
      );
    }
  }

export default RecipeCard
