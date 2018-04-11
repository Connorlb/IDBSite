import React from 'react'
import RestaurantAPI from '../../api'
import { Link } from 'react-router-dom'
import "./css/Recipes.css"
import Pagination from "react-js-pagination";
import { Grid, Row, Col, Image, Button } from 'react-bootstrap';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';


class RecipeCard extends React.Component {

  constructor() {
        super();
    }
    render(){
      return(
        <div>
        <Card>
        <CardTitle className="name">
         <Link to={`/recipes/${this.props.name}`}>{this.props.name}</Link>
        </CardTitle>
          <CardBody outline color="secondary">
            <CardText>
              <b>Cuisine</b> {this.props.cuisine}<br/>
              <b>Servings </b>{this.props.servings}
            </CardText>
            <Button><Link to={`${this.props.link}`} id="link">Read Full Recipe</Link></Button>
          </CardBody>
        </Card>
        </div>
      );
    }
  }

export default RecipeCard




