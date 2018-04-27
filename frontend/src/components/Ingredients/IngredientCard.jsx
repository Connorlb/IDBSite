import React from 'react'
import RestaurantAPI from '../../api'
import { Link } from 'react-router-dom'
import Pagination from "react-js-pagination";
import {Grid, Row, Col, Image, Button } from 'react-bootstrap' ;
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';

class IngredientCard extends React.Component {
  constructor() {
      super();
  }

  render(){
    console.log(this.props.image);
    return(
      <div>
        <Card style={{ backgroundColor: '#D8C3A5'}}>
         <CardTitle className="name">
            <Link to={`/ingredients/${this.props.name}`}>
            <Image width={200} height={200} alt="200x200" src={this.props.image} circle className="contributor-pic" /></Link>
          </CardTitle>
          <CardBody outline color="secondary">
            <CardText>
              <h3 class="name">{this.props.name}</h3><br/>
              <b>Calories</b> {this.props.calories}<br/>
              <b>Protein </b>{this.props.protein}<br/>
              <b>Fat </b>{this.props.fat}<br/>
            </CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default IngredientCard
