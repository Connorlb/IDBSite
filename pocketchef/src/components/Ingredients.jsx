import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap' ;
import './Ingredients.css'

export default class IngredientsContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ingredients: [
        ['Bread','American',4],
        ['Work','Italian',2],
        ['Worms','American',4],
        ['Bread','American',4],
        ['Work','Italian',2],
        ['Worms','American',4],
        ['ReactJS','Bits',2],
        ['Hot sauce','Mexican',5],
        ['Pasta','Chinese',4]
      ],
    }

    this.addIngredient = this.addIngredient.bind(this)
  }
  addIngredient(ingredient) {
    this.setState((state) => ({
      ingredients: state.ingredients.concat([ingredient])
    }))
  }
  render(){
    return (
    <Grid>
      <Row className="show-grid text-center">
        <AddIngredient addNew={this.addIngredient} />
        <CreateIngredient names={this.state.ingredients} />
        </Row>
        </Grid>
    );
  }
}




class AddIngredient extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newIngredient: ["this", "that", "other"]
    }

    this.updateNewIngredient = this.updateNewIngredient.bind(this)
    this.handleAddNew = this.handleAddNew.bind(this)
  }
  updateNewIngredient(e) {
    this.setState({
      newIngredient: e.target.value
    })
  }
  handleAddNew() {
    this.props.addNew(this.state.newIngredient)
    this.setState({
      newIngredient: []
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.handleAddNew}> Add Ingredient </button>
      </div>
    )
  }
}

class CreateIngredient extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.names.map((ingredient) => {
            return <Col xs={12} sm={4} md={4} className="image-wrap">
            <li class="list-group-item">
              <button className="square">
                <Image width={200} height={200} alt="200x200" src='https://bloximages.chicago2.vip.townnews.com/fortworthbusiness.com/content/tncms/assets/v3/editorial/9/95/9955d95c-1c8f-11e7-8dc8-d344e9a7c007/58e936c0c6895.image.jpg' circle className="contributor-pic" />
              </button>
            </li>
            <li class="list-group-item"><h3>{ingredient[0]}</h3></li>
            <li class="list-group-item"><b>Cuisine Type:</b> {ingredient[1]}</li>
            <li class="list-group-item"><b>Stars </b>{ingredient[2]}</li>
            </Col>
          })}
        </ul>
      </div>
    )
  }
}
