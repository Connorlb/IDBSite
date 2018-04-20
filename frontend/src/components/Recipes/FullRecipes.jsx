import React from 'react'
import RestaurantAPI from '../../api'
import VirtualizedSelect from 'react-virtualized-select';
import { Link } from 'react-router-dom'
import RecipeCard from './RecipesCard'
import './css/Recipes.css'
import Pagination from "react-js-pagination";
import {Grid, Row, Col, Image, Button, MenuItem, DropdownButton} from 'react-bootstrap' ;
import axios from 'axios'
import 'react-select/dist/react-select.css'
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardGroup } from 'reactstrap';
const DATA = require('../../functionalityassets/cuisines.js');


class FullRecipes extends React.Component {
  constructor() {
    super();
    this.state = {
      activePage: 1,
      totalPages: -1,
      cards:[],
      selectValue: '',
      sortVal: 'name',
      sortDir: 'asc'
    };
    this.handlePageChange = this.handlePageChange.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateValue = this.updateValue.bind(this)
    this.handleDrops = this.handleDrops.bind(this)
    this.sortCards = this.sortCards.bind(this)
  }

  handleDrops (e, evt){
    //console.log(e);
    var args = e.split(" ");
    console.log(args);
    this.setState({sortVal: args[0]}, () => {
      console.log(this.state.sortVal);
    });
    this.setState({sortDir: args[1]}, () => {
      console.log(this.state.sortDir);
      this.sortCards();
      //this.updateValue(this.state.selectValue);
    });
  }

  sortCards(){
    var cuisine_filter;
    var ords;
    let data;
    console.log(this.state.sortVal);
    if(this.state.selectValue){
      cuisine_filter = [{"name": "cuisine", "op": "equals", "val": this.state.selectValue}];
      ords = [{"field": this.state.sortVal, "direction": this.state.sortDir}];
      data = JSON.stringify({"filters": cuisine_filter, "order_by": ords});
    }else{
      cuisine_filter = [];
      ords = [{"field": this.state.sortVal, "direction": this.state.sortDir}];
      data = JSON.stringify({"filters": cuisine_filter, "order_by": ords});
    }
    console.log("sortVal "+this.state.sortVal);

    axios({
      method: 'get',
      url: 'http://pocketchef.me/api/recipes2',
      params: {
        q: data
      },
      config: { headers: {'Content-Type': "application/json", "Access-Control-Allow-Origin": "*"}}
      }).then(response => {
        this.setState({totalPages: response.data.num_results});
        this.setState({cards: response.data.objects});
        this.setState({activePage: 1});
      });
  }


  updateValue(newValue){
    if(!newValue){
      axios.get('http://pocketchef.me/api/recipes2',{
        params: {
          page: 1
        }
      }).then(response => {
          this.setState({cards: response.data.objects});
          this.setState({totalPages: response.data.num_results});
          })
          .catch(function (error) {
            console.log(error);})
            this.setState({activePage: 1});
            this.setState({selectValue: ''});
            this.setState({sortVal: 'name'});
            this.setState({sortDir: 'asc'});
    }else{
      var cuisine_filter = [{"name": "cuisine", "op": "equals", "val": newValue}];
      var ords = [{"field": this.state.sortVal, "direction": this.state.sortDir}];
      let data = JSON.stringify({"filters": cuisine_filter, "order_by": ords});
      axios({
        method: 'get',
        url: 'http://pocketchef.me/api/recipes2',
        params: {
          q: data
        },
        config: { headers: {'Content-Type': "application/json", "Access-Control-Allow-Origin": "*"}}
        }).then(response => {
          this.setState({totalPages: response.data.num_results});
          this.setState({cards: response.data.objects});});
      this.setState({selectValue: newValue});
    }
  }

  handlePageChange(pageNumber) {
    if (this.state.selectValue != ''){
      var cuisine_filter = [{"name": "cuisine", "op": "equals", "val": this.state.selectValue}];
      var ords = [{"field": "name", "direction": "asc"}];
      let data = JSON.stringify({"filters": cuisine_filter, "order_by": ords});
      axios.get('http://pocketchef.me/api/recipes2',{
        params: {
          page: pageNumber,
          q: data
        }
        }).then(response => {
          this.setState({totalPages: response.data.num_results});
          this.setState({cards: response.data.objects});})
          .catch(function (error) {
            console.log(error);})
      this.setState({activePage: pageNumber});
    }else{
      axios.get('http://pocketchef.me/api/recipes2',{
        params: {
          page: pageNumber
        }
        }).then(response => {
          this.setState({totalPages: response.data.num_results});
          this.setState({cards: response.data.objects});})
          .catch(function (error) {
            console.log(error);})
      this.setState({activePage: pageNumber});
    }
  }

  componentDidMount() {
    axios.get('http://pocketchef.me/api/recipes2')
      .then(response => {
        this.setState({totalPages: response.data.num_results});
        this.setState({cards: response.data.objects});})
        .catch(function (error) {
          console.log(error);})
  }

  render() {
    var options = DATA.CUISINES;
    return(
      <div>
        <Card className="fullRecipe">
          <CardTitle>
            <h1>Recipes</h1>
          </CardTitle>
          <Row className="show-grid">
            <Col xs={3} xsOffset={4}>
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
                valueKey="cuisine"/>
            </Col>
            <Col xs={3}>
              <b>Sort the Recipies<br/></b>
              <DropdownButton
                title={`${this.state.sortVal} ${this.state.sortDir}`}
                key={1}
                id={'recipe-sort-button'}
                onSelect={this.handleDrops}>
                <MenuItem eventKey= "prep_time desc" > Prep Time DESC </MenuItem>
                <MenuItem eventKey= "prep_time asc" > Prep Time ASC </MenuItem>
                <MenuItem eventKey= "name desc" > Name DESC </MenuItem>
                <MenuItem eventKey= "name asc" > Name ASC </MenuItem>
              </DropdownButton>
            </Col>
          </Row>
        </Card>
        <CardGroup>
          <Row className="show-grid text-center">
            {
              this.state.cards.map(rest => (
                <Col xs={12} sm={6} md={4} key={rest.name}>
                <RecipeCard name={rest.name} cuisine={rest.cuisine} servings={rest.servings}  prep_time={rest.prep_time} rating={rest.rating} link={rest.src_url}/>
                </Col>
              ))
            }
          </Row>
        </CardGroup>
        <Row className="show-grid text-center">
          <Pagination
            activePage={this.state.activePage}
            itemsCountPerPage={9}
            totalItemsCount={this.state.totalPages}
            pageRangeDisplayed={5}
            onChange={this.handlePageChange}/>
        </Row>
      </div>
    );
  }
}
export default FullRecipes
