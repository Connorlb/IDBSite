import React from 'react'
import RestaurantAPI from '../api'
import { Link } from 'react-router-dom'
import './FullRestaurants.css'
import RestaurantCard from './RestaurantCard'
import Pagination from "react-js-pagination";
import {Grid, Row, Col, Image, Button } from 'react-bootstrap' ;


class FullRestaurants extends React.Component {
  constructor() {
        super();
        this.state = {
              activePage: 1,
              cards:[]

            };

      this.handlePageChange = this.handlePageChange.bind(this)
      this.componentWillMount = this.componentWillMount.bind(this)
      }
  handlePageChange(pageNumber) {
        //console.log(`active page is ${pageNumber}`);
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

  componentWillMount() {
    var arr = [];
     for (var i = 0; i <= 8; i++) {
       if(RestaurantAPI.all()[i] != null){
       arr.push(RestaurantAPI.all()[i]);
     }
     }

    this.setState({cards: arr});
}

   render() {
return(
  <div >
    <Row className="show-grid text-center">
      {

        this.state.cards.map(rest => (
           <Col xs={12} sm={4} md={4} className="image-wrap" key={rest.name}>
           <RestaurantCard name={rest.name} image={rest.img_link} cuisine={rest.cuisine} rating={rest.rating} phone={rest.phone}/>
           </Col>

      ))
    }
      </Row>
      <div class="center">
    <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={9}
          totalItemsCount={20}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
        />
    </div>
  </div>
);
}
}

export default FullRestaurants
