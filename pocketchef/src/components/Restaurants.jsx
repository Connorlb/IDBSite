import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap' ;
import './Restaurants.css'

export default class RestaurantsContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      restaurants: [
        ['Bread','American',4],
        ['Work','Italian',2],
        ['Worms','American',4],
        ['Bread','American',4],
        ['Work','Italian',2],
        ['Worms','American',4],
        ['ReactJS','Bits',2],
        ['Hot sauce','Mexican',5],
        ['Pasta','Chinese',4]
      ]
    }

    this.addRestaurant = this.addRestaurant.bind(this)
  }
  addRestaurant(restaurant) {
    this.setState((state) => ({
      restaurants: state.restaurants.concat([restaurant])
    }))
  }
  render(){
    return (
    <Grid>
    <h1 align="center">Restaurants</h1>
      <Row className="show-grid text-center">
        <AddRestaurant addNew={this.addRestaurant} />
        <CreateRestaurant names={this.state.restaurants} />
        </Row>
        </Grid>
    );
  }
}




class AddRestaurant extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newRestaurant: ["this", "that", "other"]
    }

    this.updateNewRestaurant = this.updateNewRestaurant.bind(this)
    this.handleAddNew = this.handleAddNew.bind(this)
  }
  updateNewRestaurant(e) {
    this.setState({
      newRestaurant: e.target.value
    })
  }
  handleAddNew() {
    this.props.addNew(this.state.newRestaurant)
    this.setState({
      newRestaurant: []
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.handleAddNew}> Add Restaurant </button>
      </div>
    )
  }
}

class CreateRestaurant extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.names.map((restaurant) => {
            return <Col xs={12} sm={4} md={4} className="image-wrap">
            <li class="list-group-item">

                <Image width={200} height={200} alt="200x200" src='https://bloximages.chicago2.vip.townnews.com/fortworthbusiness.com/content/tncms/assets/v3/editorial/9/95/9955d95c-1c8f-11e7-8dc8-d344e9a7c007/58e936c0c6895.image.jpg' circle className="contributor-pic" />

            </li>
            <li class="list-group-item"><h3>{restaurant[0]}</h3></li>
            <li class="list-group-item"><b>Cuisine Type:</b> {restaurant[1]}</li>
            <li class="list-group-item"><b>Stars </b>{restaurant[2]}</li>
            </Col>
          })}
        </ul>
      </div>
    )
  }
}
