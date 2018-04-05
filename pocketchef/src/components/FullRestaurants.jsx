import React from 'react'
import RestaurantAPI from '../api'
import { Link } from 'react-router-dom'
import RestaurantCard from './RestaurantCard'
import "./FullRestaurants.css"
import Pagination from "react-js-pagination";
import {Grid, Row, Col, Image, Button } from 'react-bootstrap' ;
import Request from 'request'


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

    var filters = [{"name": "name", "op": "like", "val": "%halal%"}];

    var options = {
      url: 'http://pocketchef.me/api/restaurants2',
      headers: { 'Content-type': 'application/json'},
      method: 'GET'
    };

    var arr = [];
    function callback(error, response, body){
      if(!error && response.statusCode == 200){
        var apiResponse = JSON.parse(body);
        for (var i = 0; i <= 8; i++) {
          if(apiResponse['objects'][i] != null){
          arr.push(apiResponse['objects'][i]);
        }
        }
        console.log(apiResponse['objects'][1]);
      }else{
         console.log(error);
      }
    }

    Request(options,callback);

    // var arr = [];
    //  for (var i = 0; i <= 8; i++) {
    //    if(RestaurantAPI.all()[i] != null){
    //    arr.push(RestaurantAPI.all()[i]);
    //  }
    //  }

    this.setState({cards: arr});
}

   render() {
return(
  <div>
    <Row className="show-grid text-center">
      {

        this.state.cards.map(rest => (

           <Col xs={12} sm={4} md={4} className="image-wrap" key={rest.name}>
           <RestaurantCard name={rest.name} image={rest.img_link} cuisine={rest.cuisine} rating={rest.rating} phone={rest.phone}/>
           </Col>


      ))
    }

      </Row>
      <div className = "pagination">
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
