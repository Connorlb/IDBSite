import React from 'react'
import RestaurantAPI from '../../api'
import { Link } from 'react-router-dom'
// import "./css/RestaurantCard.css"
import Pagination from "react-js-pagination";
import {Grid, Row, Col, Image, Button } from 'react-bootstrap' ;

class IngredientCard extends React.Component {
  constructor() {
        super();
    }
    render(){
      return(
                <div class="card">
                <li class="list-group-item">
                <Link to={`/ingredients/${this.props.name}`}>
                <Image width={200} height={200} alt="200x200" src={this.props.image} circle className="contributor-pic" /></Link>
                <li class="list-group-item"><h3 class="name">{this.props.name}</h3></li>
                <li class="list-group-item"><b>Calories</b> {this.props.calories}</li>
                <li class="list-group-item"><b>Protein </b>{this.props.protein}</li>
                <li class="list-group-item"><b>Fat </b>{this.props.fat}</li>
                <Link to={`${this.props.link}`}></Link>
                </li>
                </div>
      );
    }
  }

export default IngredientCard
