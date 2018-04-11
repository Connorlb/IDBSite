import React from 'react'
import RestaurantAPI from '../../api'
import VirtualizedSelect from 'react-virtualized-select';
import { Link } from 'react-router-dom'
import RestaurantCard from './RestaurantCard'
// import './css/FullRestaurants.css'
import Pagination from "react-js-pagination";
import {Grid, Row, Col, Image, Button, MenuItem, DropdownButton} from 'react-bootstrap' ;
import axios from 'axios'

import 'react-select/dist/react-select.css'
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'

const DATA = require('../../functionalityassets/cuisines.js');





class FullRestaurants extends React.Component {
  constructor() {
      super();
      this.state = {
            activePage: 1,
            cards:[],
            username: '',
	          selectValue: '%',
            sortValue: 'name',
            sortDir: 'asc'
      };

      this.handlePageChange = this.handlePageChange.bind(this)
      this.componentDidMount = this.componentDidMount.bind(this)
      this.updateValue = this.updateValue.bind(this)
      this.handleDrops = this.handleDrops.bind(this)
  }

  handleDrops (e, evt){
    var t = "";
    t = t+evt
    var args = t.split(" ");
    this.setState({sortVal: args[0]});
    this.setState({sortDir: args[1]});
    this.updateValue(this.state.selectValue);
  }

  updateValue(newValue, ordVal, ordDir){
    //console.log(data);
    if(!newValue){

      axios.get('http://pocketchef.me/api/restaurants2',{
      params: {
        page: 1
      }
    })
        .then(response => {
        this.setState({cards: response.data.objects});})
        .catch(function (error) {
          console.log(error);})
          this.setState({activePage: 1});
          this.setState({selectValue: 'Search'});
    }else{
    var cuisine_filter = [{"name": "cuisine", "op": "equals", "val": newValue}];
    var ords = [{"field": this.state.sortValue, "direction": this.state.sortDir}];
    let data = JSON.stringify({"filters": cuisine_filter, "order_by": ords});
    axios({
      method: 'get',
      url: 'http://pocketchef.me/api/restaurants2',
      params: {
        q: data
      },
      config: { headers: {'Content-Type': "application/json", "Access-Control-Allow-Origin": "*"}}
      }).then(response => {
      console.log(response.data.objects);
      this.setState({cards: response.data.objects});});
    this.setState({selectValue: newValue});
  }
  }

  handlePageChange(pageNumber) {
    if (this.state.selectValue != 'Search'){
    var cuisine_filter = [{"name": "cuisine", "op": "equals", "val": this.state.selectValue}];
    var ords = [{"field": "name", "direction": "asc"}];
    let data = JSON.stringify({"filters": cuisine_filter, "order_by": ords});
    axios.get('http://pocketchef.me/api/restaurants2',{
    params: {
      page: pageNumber,
      q: data
    }
  })
      .then(response => {
      this.setState({cards: response.data.objects});})
      .catch(function (error) {
        console.log(error);})
        this.setState({activePage: pageNumber});
      }else{
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
        id={'recipe-sort-button'}
        onSelect={this.handleDrops}>
        <MenuItem eventKey= "rating asc" > Rating DESC </MenuItem>
        <MenuItem eventKey= "rating desc" > Rating ASC </MenuItem>
        <MenuItem eventKey= "name desc" > Name DESC </MenuItem>
        <MenuItem eventKey= "name asc" > Name ASC </MenuItem>
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

export default FullRestaurants
