import React from 'react'
import RestaurantAPI from '../api'
import { Link } from 'react-router-dom'
import "./RestaurantCard.css"
import Pagination from "react-js-pagination";
import {Grid, Row, Col, Image, Button } from 'react-bootstrap' ;

class RestaurantCard extends React.Component {
  constructor() {
        super();
    }
    render(){
      return(
                <div class="card">
                <li class="list-group-item">
                <Link to={`/restaurants/${this.props.name}`}>
                <Image width={200} height={200} alt="200x200" src={this.props.image} circle className="contributor-pic" /></Link>
                <li class="list-group-item"><h3>{this.props.name}</h3></li>
                <li class="list-group-item"><b>Cuisine Type:</b> {this.props.cuisine}</li>
                <li class="list-group-item"><b>Stars </b>{this.props.rating}</li>
                <li class="list-group-item"><b>Phone </b>{this.props.phone}</li>
                <Link to={`${this.props.link}`}></Link>
                </li>
                </div>
      );
    }
  }

export default RestaurantCard
