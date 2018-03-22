import React from 'react'
import PlayerAPI from '../api'
import { Link } from 'react-router-dom'
import {Grid, Row, Col, Image, Button } from 'react-bootstrap' ;


const FullRestaurants = () => (
  <div>
    <ul>
    <Row className="show-grid text-center">
      {
        PlayerAPI.all().map(p => (

            <Col xs={12} sm={4} md={4} className="image-wrap" key={p.number}>
            <li class="list-group-item">
            <Link to={`/restaurants/${p.number}`}>
            <Image width={200} height={200} alt="200x200" src={p.image} circle className="contributor-pic" /></Link></li>
            <li class="list-group-item"><h3>{p.name}</h3></li>
            <li class="list-group-item"><b>Cuisine Type:</b> {p.number}</li>
            <li class="list-group-item"><b>Stars </b>{p.number}</li>
            </Col>

        ))
      }
      </Row>
    </ul>
  </div>
)

export default FullRestaurants
