import React from 'react'
import RestaurantAPI from '../../api'
import VirtualizedSelect from 'react-virtualized-select';
import { Link } from 'react-router-dom'
import IngredientCard from './IngredientCard'
import '../Recipes/css/Recipes.css'
import Pagination from "react-js-pagination";
import {Grid, Row, Col, Image, Button, MenuItem, DropdownButton} from 'react-bootstrap' ;
import axios from 'axios'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';

import 'react-select/dist/react-select.css'
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'

const DATA = require('../../functionalityassets/cuisines.js');

class FullIngredients extends React.Component {
  constructor() {
      super();
      this.state = {
            activePage: 1,
            cards:[],
	    selectValue: 'Search'

      };

      this.handlePageChange = this.handlePageChange.bind(this)
      this.componentDidMount = this.componentDidMount.bind(this)
  }
  updateValue(newValue){
    this.setState({selectValue: newValue});
  }

  handlePageChange(pageNumber) {
    axios.get('http://pocketchef.me/api/ingredients2',{
    params: {
      page: pageNumber
    }
  })
      .then(response => {
      this.setState({cards: response.data.objects});})
      .catch(function (error) {
        console.log(error);})
        this.setState({activePage: pageNumber});
      }

  componentDidMount() {
    axios.get('http://pocketchef.me/api/ingredients2')
      .then(response => {
      this.setState({cards: response.data.objects});})
      .catch(function (error) {
        console.log(error);})
  }

   render() {
        var options = DATA.CUISINES;
        return(
<div>
          <Card className="fullRecipe">
          <CardTitle>
            <h1>Ingredients</h1>
            </CardTitle>
         
             <Row className="show-grid">
              <Col xs={3} xsOffset={4}>
                <b>Filter by Cuisine</b>
           <VirtualizedSelect ref="cuisineSelect"
              options={options}
              simpleValue
              clearable
              name="select-cuisine"
              value={this.state.selectValue}
              onChange={this.updateValue}
              searchable
              labelKey="cuisine"
              valueKey="cuisine"/>
    </Col>

    <Col xs={3}>
    <b>Sort the Restaurants<br/></b>
      <DropdownButton
        title={'Sort by...'}
        key={1}
        id={'recipe-sort-button'}
        onSelect={this.handleDrops}>
        <MenuItem eventKey="1"> Rating DESC </MenuItem>
        <MenuItem eventKey="2"> Rating ASC </MenuItem>
        <MenuItem eventKey="3"> Name DESC </MenuItem>
        <MenuItem eventKey="4"> Name ASC </MenuItem>
      </DropdownButton>
      </Col>
        </Row>
         </Card>

            <Row className="show-grid text-center">
              {

                this.state.cards.map(rest => (
                  <Col xs={12} sm={4} md={4} className="image-wrap" key={rest.name}>
                  <IngredientCard name={rest.name} image={rest.picture} calories={rest.calories} protein={rest.carbs} fat={rest.carbs}/>
                  </Col>


              ))
            }

              </Row>
            <Row className="show-grid">
                <Col xs={6} xsOffset={6}>
              <Pagination
                  activePage={this.state.activePage}
                  itemsCountPerPage={9}
                  totalItemsCount={100}
                  pageRangeDisplayed={5}
                  onChange={this.handlePageChange}
                />
		</Col>
	     </Row>

              </div>
        );
        }
}

export default FullIngredients
