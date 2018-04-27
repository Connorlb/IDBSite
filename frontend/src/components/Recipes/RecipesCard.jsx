import React from 'react'
import RestaurantAPI from '../../api'
import { Link } from 'react-router-dom'
import "./css/Recipes.css"
import Pagination from "react-js-pagination";
import { Grid, Row, Col, Image, Button } from 'react-bootstrap';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';
  const LINKS = require('../../functionalityassets/cuisine_links.js');


class RecipeCard extends React.Component {

  constructor() {
        super();
    }
    render(){
      var links = LINKS.LINKS;
      return(
        <div>
        <Card style={{ backgroundColor: '#D8C3A5'}}>
        <CardTitle className="name">
         <Link to={`/recipes/${this.props.name}`}>
         <Image width={200} height={200} alt="200x200" src={links[this.props.cuisine][0]} circle className="contributor-pic" /></Link>
        </CardTitle>
          <CardBody outline color="secondary">
            <CardText>
              {this.props.name}<br/>
              <b>Cuisine</b> {this.props.cuisine}<br/>
              <b>Prep Time</b> {this.props.prep_time}<br/>
              <b>Servings </b>{this.props.servings}
            </CardText>
            <Button><a href={`${this.props.link}`} id="link">Read Full Recipe</a></Button>
          </CardBody>
        </Card>
        </div>
      );
    }
  }

export default RecipeCard
