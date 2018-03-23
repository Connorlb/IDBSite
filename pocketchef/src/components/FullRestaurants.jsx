import React from 'react'
import RestaurantAPI from '../api'
import { Link } from 'react-router-dom'
import {Grid, Row, Col, Image, Button } from 'react-bootstrap' ;


const FullRestaurants = () => (
  <div>
    <ul>
    <Row className="show-grid text-center">
      {
        RestaurantAPI.all().map(p => (

            <Col xs={12} sm={4} md={4} className="image-wrap" key={p.name}>
            <li class="list-group-item">
            <Link to={`/restaurants/${p.name}`}>
            <Image width={200} height={200} alt="200x200" src={p.img_link} circle className="contributor-pic" /></Link></li>
            <li class="list-group-item"><h3>Address: {p.address}</h3></li>
            <li class="list-group-item"><b>Cuisine Type:</b> {p.cuisine}</li>
            <li class="list-group-item"><b>Stars </b>{p.rating}</li>
            <li class="list-group-item"><b>Phone </b>{p.phone}</li>
            <Link to={`${p.yelp_link}`}></Link>
            </Col>

        ))
      }
      </Row>
    </ul>
  </div>
)

export default FullRestaurants
