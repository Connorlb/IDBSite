import React from 'react'
import RestaurantAPI from '../../api'
import VirtualizedSelect from 'react-virtualized-select';
import { Link } from 'react-router-dom'
import IngredientCard from './IngredientCard'
import '../Recipes/css/Recipes.css'
import './css/Ingredients.css'
import Pagination from "react-js-pagination";
import {Grid, Row, Col, Image, Button, MenuItem, DropdownButton} from 'react-bootstrap' ;
import axios from 'axios'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardGroup } from 'reactstrap';
import InputRange from 'react-input-range';
import 'react-select/dist/react-select.css'
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'
import 'react-input-range/lib/css/index.css'

const DATA = require('../../functionalityassets/cuisines.js');


class FullIngredients extends React.Component {
  constructor() {
      super();
      this.state = {
            activePage: 1,
            totalPages: -1,
            cards: [],
            value: 20,
            sortVal: 'name',
            sortDir: 'asc'
      };

      this.handlePageChange = this.handlePageChange.bind(this)
      this.componentDidMount = this.componentDidMount.bind(this)
      this.updateValue = this.updateValue.bind(this)
      this.handleDrops = this.handleDrops.bind(this)
      }

      handleDrops (e, evt){
      var args = e.split(" ");
      this.setState({sortVal: args[0]}, () => {
      });
      this.setState({sortDir: args[1]}, () => {
      this.sortCards();
      });
      }

      sortCards(){
      var cuisine_filter;
      var ords;
      let data;

      cuisine_filter = [];
      ords = [{"field": this.state.sortVal, "direction": this.state.sortDir}];
      data = JSON.stringify({"filters": cuisine_filter, "order_by": ords});

      axios({
      method: 'get',
      url: 'http://pocketchef.me/api/ingredients2',
      params: {
        q: data
      },
      config: { headers: {'Content-Type': "application/json", "Access-Control-Allow-Origin": "*"}}
      }).then(response => {
      this.setState({totalPages: response.data.total_pages});
      this.setState({activePage: response.data.page});
      this.setState({cards: response.data.objects});
      });

      }

      updateValue(newValue){

      var protein_filter = [{"name": "protein", "op": "lt", "val": newValue}];
      var ords = [{"field": this.state.sortVal, "direction": this.state.sortDir}];
      let data = JSON.stringify({"filters": protein_filter, "order_by": ords});
      axios({
      method: 'get',
      url: 'http://pocketchef.me/api/ingredients2',
      params: {
        q: data
      },
      config: { headers: {'Content-Type': "application/json", "Access-Control-Allow-Origin": "*"}}
      }).then(response => {
      console.log(response.data.objects);
      this.setState({totalPages: response.data.num_results});
      this.setState({activePage: response.data.page});
      this.setState({cards: response.data.objects});});

      this.setState({value: newValue});
      }

      handlePageChange(pageNumber) {
        var cuisine_filter;
        var ords;
        let data;
        console.log("sortVal "+this.state.sortVal);
        if(this.state.sortVal){
          cuisine_filter = [{"name": "protein", "op": "lt", "val": this.state.value}];
          ords = [{"field": this.state.sortVal, "direction": this.state.sortDir}];
          data = JSON.stringify({"filters": cuisine_filter, "order_by": ords});
        }else{
          cuisine_filter = [{"name": "protein", "op": "lt", "val": this.state.value}];
          ords = [{"field": "protein", "direction": "asc"}];
          data = JSON.stringify({"filters": cuisine_filter, "order_by": ords});
        }

      axios.get('http://pocketchef.me/api/ingredients2',{
      params: {
      page: pageNumber,
      q: data
      }
      })
      .then(response => {
      this.setState({totalPages: response.data.num_results});
      this.setState({cards: response.data.objects});})
      .catch(function (error) {
        console.log(error);})
        this.setState({activePage: pageNumber});
      }

      componentDidMount() {
      axios.get('http://pocketchef.me/api/ingredients2')
      .then(response => {
        this.setState({totalPages: response.data.num_results});
        this.setState({activePage: response.data.page});
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
            <h1>Ingredients</h1>
            </CardTitle>
             <Row className="show-grid">
              <Col xs={3} xsOffset={4}>
                <b>Filter by Protein</b>
                <form className="form">
                <InputRange
                        maxValue={20}
                        minValue={0}
                        value={this.state.value}
                        formatLabel={value => value.toFixed(2)}
                        onChange={this.updateValue} />
                </form>
              </Col>

    <Col xs={3}>
    <b>Sort the Ingredients<br/></b>
      <DropdownButton
        title={'Sort by...'}
        key={1}
        id={'recipe-sort-button'}
        onSelect={this.handleDrops}>
        <MenuItem eventKey="fat desc"> Fat DESC </MenuItem>
        <MenuItem eventKey="fat asc"> Fat ASC </MenuItem>
        <MenuItem eventKey="name desc"> Name DESC </MenuItem>
        <MenuItem eventKey="name asc"> Name ASC </MenuItem>
      </DropdownButton>
      </Col>
        </Row>
         </Card>
         <CardGroup>
            <Row className="show-grid text-center">
              {

                this.state.cards.map(rest => (
                  <Col xs={12} sm={6} md={4} key={rest.name}>
                  <IngredientCard name={rest.name} image={rest.picture} calories={rest.calories} protein={rest.protein} fat={rest.fat}/>
                  </Col>


              ))
            }

              </Row>
              </CardGroup>
            <Row className="show-grid">
                <Col xs={6} xsOffset={5}>
              <Pagination
                  activePage={this.state.activePage}
                  itemsCountPerPage={9}
                  totalItemsCount={this.state.totalPages}
                  pageRangeDisplayed={5}
                  onChange={this.handlePageChange}
                />
		            </Col>
	              </Row>
                </div>
        );
        }
}

export default FullIngredients
