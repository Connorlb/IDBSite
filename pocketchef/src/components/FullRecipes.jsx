import React from 'react'
import RecipeAPI from '../api'
import { Link } from 'react-router-dom'
import {Grid, Row, Col, Image, Button, MenuItem, DropdownButton } from 'react-bootstrap' ;


const FullRecipes = () => (
  <div>
    <DropdownButton
      title={'Sort'}
      key={1}
      id={'recipe-sort-button'}>
      <MenuItem eventKey="1"> DESC </MenuItem>
      <MenuItem eventKey="2"> ASC </MenuItem>
    </DropdownButton>
    <ul>
    <Row className="show-grid text-center">
      {
        RecipeAPI.res().map(p => (

            <Col xs={12} sm={4} md={4} className="image-wrap" key={p.name}>
            <li class="list-group-item">
            <Link to={`/recipes/${p.name}`}><h3>{p.name}</h3></Link></li>
            <li class="list-group-item"><h3>Servings: {p.servings}</h3></li>
            <li class="list-group-item"><b>prep_time:</b> {p.prep_time}</li>
            <li class="list-group-item"><b>Phone </b>{p.phone}</li>
            <Link to={`${p.yelp_link}`}></Link>
            </Col>

        ))
      }
      </Row>
    </ul>
  </div>
)
export default FullRecipes
