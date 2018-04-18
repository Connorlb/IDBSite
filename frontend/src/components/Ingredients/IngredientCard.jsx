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
      return(
                
        <div>
        <Card>
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
            <Button><Link to={`${this.props.link}`}>More Info</Link></Button>
          </CardBody>
        </Card>
        </div>
      );
    }
  }

export default IngredientCard
