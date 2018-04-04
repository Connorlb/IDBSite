import React from 'react'
import RestaurantAPI from '../api'
import { Link } from 'react-router-dom'
import './FullRestaurants.css'
import Pagination from "react-js-pagination";
import {Grid, Row, Col, Image, Button } from 'react-bootstrap' ;

class FullRestaurants extends React.Component {
  constructor() {
        super();
        this.state = {
              activePage: 1
            };
      this.handlePageChange = this.handlePageChange.bind(this)
      this.loadObjects = this.loadObjects.bind(this)
      }


  handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
      }

  loadObjects(pageNumber){

  }

   render() {
return(
  <div >
    <Row className="show-grid text-center">
      {RestaurantAPI.all().map(p => (
          <Col xs={12} sm={4} md={4} className="image-wrap" key={p.name}>
          <li class="list-group-item">
          <Link to={`/restaurants/${p.name}`}>
          <Image width={200} height={200} alt="200x200" src={p.img_link} circle className="contributor-pic" /></Link></li>
          <li class="list-group-item"><h3>{p.name}</h3></li>
          <li class="list-group-item"><b>Cuisine Type:</b> {p.cuisine}</li>
          <li class="list-group-item"><b>Stars </b>{p.rating}</li>
          <li class="list-group-item"><b>Phone </b>{p.phone}</li>
          <Link to={`${p.yelp_link}`}></Link>
          </Col>
      ))
    }
      </Row>
      <div class="center">
    <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={1}
          totalItemsCount={10}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
        />
    </div>
  </div>
);
}
}

export default FullRestaurants
