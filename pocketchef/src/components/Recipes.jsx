import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap' ;
import './Recipes.css'

export default class RecipesContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      recipes: [
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

    this.addRecipe = this.addRecipe.bind(this)
  }
  addRecipe(recipe) {
    this.setState((state) => ({
      recipes: state.recipes.concat([recipe])
    }))
  }
  render(){
    return (
    <Grid>
    <h1 align="center">Recipes</h1>
      <Row className="show-grid text-center">
        <AddRecipe addNew={this.addRecipe} />
        <CreateRecipe names={this.state.recipes} />
        </Row>
        </Grid>
    );
  }
}




class AddRecipe extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newRecipe: ["this", "that", "other"]
    }

    this.updateNewRecipe = this.updateNewRecipe.bind(this)
    this.handleAddNew = this.handleAddNew.bind(this)
  }
  updateNewRecipe(e) {
    this.setState({
      newRecipe: e.target.value
    })
  }
  handleAddNew() {
    this.props.addNew(this.state.newRecipe)
    this.setState({
      newRecipe: []
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.handleAddNew}> Add Recipe </button>
      </div>
    )
  }
}

class CreateRecipe extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.names.map((recipe) => {
            return <Col xs={12} sm={4} md={4} className="image-wrap">
            <li class="list-group-item">
                <Image width={200} height={200} alt="200x200" src='https://bloximages.chicago2.vip.townnews.com/fortworthbusiness.com/content/tncms/assets/v3/editorial/9/95/9955d95c-1c8f-11e7-8dc8-d344e9a7c007/58e936c0c6895.image.jpg' circle className="contributor-pic" />
            </li>
            <li class="list-group-item"><h3>{recipe[0]}</h3></li>
            <li class="list-group-item"><b>Cuisine Type:</b> {recipe[1]}</li>
            <li class="list-group-item"><b>Stars </b>{recipe[2]}</li>
            </Col>
          })}
        </ul>
        <Col>
        </Col>
      </div>
    )
  }
}
