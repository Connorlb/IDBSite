import React from 'react'
import RestaurantAPI from '../api'
import VirtualizedSelect from 'react-virtualized-select';
import { Link } from 'react-router-dom'
import RestaurantCard from './RestaurantCard'
import './FullRestaurants.css'
import Pagination from "react-js-pagination";
import {Grid, Row, Col, Image, Button, MenuItem, DropdownButton} from 'react-bootstrap' ;
import axios from 'axios'

import 'react-select/dist/react-select.css'
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'

const DATA = require('../cuisines.js');

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
    axios.get('http://pocketchef.me/api/restaurants2',{
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
    axios.get('http://pocketchef.me/api/restaurants2')
      .then(response => {
      this.setState({cards: response.data.objects});})
      .catch(function (error) {
        console.log(error);})
  }

   render() {
        var options = DATA.CUISINES;
        return(
          <div>
             <Row className="show-grid">
    	        <Col xs={3} xsOffset={3}>
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
              valueKey="cuisine"
		      		/>
		</Col>
    <Col xs={3}>
      <DropdownButton
        title={'Sort by...'}
        key={1}
        id={'recipe-sort-button'}>
        <MenuItem eventKey="1"> Rating DESC </MenuItem>
        <MenuItem eventKey="2"> Rating ASC </MenuItem>
        <MenuItem eventKey="3"> Name DESC </MenuItem>
        <MenuItem eventKey="4"> Name ASC </MenuItem>
      </DropdownButton>
      </Col>
	      </Row>
            <Row className="show-grid text-center">
              {

                this.state.cards.map(rest => (

                  <Col xs={12} sm={4} md={4} className="image-wrap" key={rest.name}>
                  <RestaurantCard name={rest.name} image={rest.img_link} cuisine={rest.cuisine} rating={rest.rating} phone={rest.phone}/>
                  </Col>


              ))
            }

              </Row>
            <Row className="show-grid">
                <Col xs={6} xsOffset={6}>
              <Pagination
                  activePage={this.state.activePage}
                  itemsCountPerPage={9}
                  totalItemsCount={20}
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
