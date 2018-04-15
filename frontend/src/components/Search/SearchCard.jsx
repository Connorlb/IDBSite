import React from 'react'
import RestaurantAPI from '../../api'
import { Link } from 'react-router-dom'
import "./css/SearchCard.css"
import Pagination from "react-js-pagination";
import {Grid, Row, Col, Image, Button } from 'react-bootstrap' ;
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardGroup } from 'reactstrap';

class SearchCard extends React.Component {
  constructor() {
        super();
    }
    render(){
      return(
       <div>
        <Card>
        <CardTitle className="name">
         <Link to={`/search/${this.props.name}`}>
         <Image width={200} height={200} alt="200x200" src={this.props.image} circle className="contributor-pic" /></Link>
        </CardTitle>
          <CardBody outline color="secondary">
            <CardText>
            <h3 class="name">{this.props.name}</h3>
            
            </CardText>
          </CardBody>
        </Card>
        </div>
      );
    }
  }

export default SearchCard
