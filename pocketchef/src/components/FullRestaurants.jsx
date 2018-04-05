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


class FullRestaurants extends React.Component {
  constructor() {
      super();
      this.state = {
            activePage: 1,
            cards:[],
            username: '',
	    selectValue: 'Search'

      };

      this.handlePageChange = this.handlePageChange.bind(this)
      this.componentDidMount = this.componentDidMount.bind(this)
      this.handleClick = this.handleClick.bind(this)
  }
  updateValue(newValue){
    this.setState({selectValue: newValue});
  }

  handleClick () {
  //   axios.get('/user', {
  //   params: {
  //     ID: 12345
  //   }
  // })
  axios.get('https://api.github.com/users/maecapozzi')
    .then(response => this.setState({username: response.data.id}))
    .catch(function (error) {
      console.log(error);})
  }

  handlePageChange(pageNumber) {
        var arr = [];
        var start = (pageNumber - 1) * 9;
        var end  = start + 8;
         for (var i = start; i <= end; i++) {
           if(RestaurantAPI.all()[i] != null){
           arr.push(RestaurantAPI.all()[i]);
         }
         }

        this.setState({cards: arr});
        this.setState({activePage: pageNumber});
      }

  componentDidMount() {
    axios.get('http://pocketchef.me/api/restaurants2')
      .then(response => {
      console.log(response.data.objects);
      console.log([response.data.objects]);
      console.log("THis");
      this.setState({cards: [response.data.objects]});})
      .catch(function (error) {
        console.log(error);})

    var arr = [];
     for (var i = 0; i <= 8; i++) {
       if(RestaurantAPI.all()[i] != null){
       arr.push(RestaurantAPI.all()[i]);
     }
     }

    //this.setState({cards: arr});
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
          <div className='button__container'>
              <button className='button' onClick={this.handleClick}>
                Click Me
              </button>
              <p>{this.state.username}</p>
            </div>
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

export default FullRestaurants
