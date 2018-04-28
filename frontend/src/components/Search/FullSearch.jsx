import React from 'react'
import RestaurantAPI from '../../api'
import VirtualizedSelect from 'react-virtualized-select';
import { Link } from 'react-router-dom'
import './css/FullSearch.css'
import Pagination from "react-js-pagination";
import {Grid, Row, Col, Image, Button, MenuItem, DropdownButton} from 'react-bootstrap' ;
import axios from 'axios'
import 'react-select/dist/react-select.css'
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardGroup } from 'reactstrap';
import RestaurantCard from '../Restaurants/RestaurantCard'
import RecipeCard from '../Recipes/RecipesCard'
import IngredientCard from '../Ingredients/IngredientCard'


class FullSearch extends React.Component {
  constructor() {
      super();
      this.state = {
            activePage: 1,
            totalPages: -1,
            cards: [],
            Icards: [],
            Rcards: [],
	          selectValue: '',

      };
      this.handlePageChange = this.handlePageChange.bind(this)
      this.componentDidMount = this.componentDidMount.bind(this)
      this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this)
      //this.handleDrops = this.handleDrops.bind(this)
  }

  componentWillReceiveProps(newValue){
    console.log("this.state.selectValue " +  this.state.selectValue)
    console.log("New name " +newValue.match.params.name)
    if(newValue != this.state.selectValue){
    this.setState({selectValue: newValue.match.params.name}, () => {
      this.handlePageChange(1);
    });
  }
  }

  handlePageChange(pageNumber) {
    var cuisine_filter = [{"name": "name", "op": "like", "val": `%${this.props.match.params.name}%`}]; //will depend heavenly  on  kind of kard
    var ords = [{"field": "name", "direction": "asc"}];
    let data = JSON.stringify({"filters": cuisine_filter, "order_by": ords});
    axios.get('http://pocketchef.me/api/restaurants2',{
    params: {
      page: pageNumber,
      q: data
    }
  })
      .then(response => {
      this.setState({totalPages: response.data.num_results});
      this.setState({cards: response.data.objects});
      this.setState({activePage: pageNumber});})
      .catch(function (error) {
        console.log(error);})
    }

    toTitleCase(str)
    {
       return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }

  componentDidMount() {
    var total_pages = 0;
    console.log("this.props.match.params.name " +  this.props.match.params.name)

    var cuisine_filter = [{"name": "name", "op": "like", "val": `%${this.props.match.params.name}%`}]; //will depend heavenly  on  kind of kard
    var ords = [{"field": "name", "direction": "asc"}];
    let data = JSON.stringify({"filters": cuisine_filter, "order_by": ords});
    axios.get('http://pocketchef.me/api/restaurants2',{
    params: {
      page: 1,
      q: data
    }
  })
      .then(response => {
        total_pages += response.data.num_results;
        //this.setState({totalPages: response.data.num_results});
      this.setState({cards: response.data.objects});
      this.setState({activePage: 1});})
      .catch(function (error) {
        console.log(error);})

    //var cuisine_filter = [{"name": "name", "op": "like", "val": `%${this.props.match.params.name}%`}]; //will depend heavenly  on  kind of kard
    //var ords = [{"field": "name", "direction": "asc"}];
    //let data = JSON.stringify({"filters": cuisine_filter, "order_by": ords});
    axios.get('http://pocketchef.me/api/recipes2',{
    params: {
      page: 1,
      q: data
    }
  })
      .then(response => {
        total_pages += response.data.num_results;
        //this.setState({totalPages: response.data.num_results});
      this.setState({Rcards: response.data.objects});
      //this.setState({activePage: 1});
      })
      .catch(function (error) {
        console.log(error);})

    //var cuisine_filter = [{"name": "name", "op": "like", "val": `%${this.props.match.params.name}%`}]; //will depend heavenly  on  kind of kard
    //var ords = [{"field": "name", "direction": "asc"}];
    //let data = JSON.stringify({"filters": cuisine_filter, "order_by": ords});
    axios.get('http://pocketchef.me/api/ingredients2',{
    params: {
      page: 1,
      q: data
    }
  })
      .then(response => {
        total_pages += response.data.num_results;
        this.setState({totalPages: total_pages});
        //this.setState({totalPages: response.data.num_results});
      this.setState({Icards: response.data.objects});
      //this.setState({activePage: 1});
      })
      .catch(function (error) {
        console.log(error);})


  }

   render() {
        return(
          <div>
          <Card style={{ backgroundColor: '#D8C3A5'}}>
          <CardTitle >
            <h1>Search</h1>
            </CardTitle>
             <Row className="show-grid">
	      </Row>
        </Card>
        <CardGroup>
            <Row className="show-grid text-center">
              {
              //  <RestaurantCard name={"this"} image={""} cuisine={"Mex"} rating={3} phone={"12341234"}/>
                this.state.cards.map(rest => (
                  <Col xs={12} sm={6} md={4} key={rest.name}>
                  <RestaurantCard name={rest.name} image={rest.img_link} cuisine={rest.cuisine} rating={rest.rating} phone={rest.phone}/>
                  </Col>
              ))

            }
            {
              this.state.Rcards.map(rest => (
                <Col xs={12} sm={6} md={4} key={rest.name}>
                <RecipeCard name={rest.name} cuisine={rest.cuisine} servings={rest.servings}  prep_time={rest.prep_time} rating={rest.rating} link={rest.src_url}/>
                </Col>
            ))
            }
            {
              this.state.Icards.map(rest => (
                <Col xs={12} sm={6} md={4} key={rest.name}>
                <IngredientCard name={rest.name} image={rest.picture}  protein={rest.protein} fat={rest.fat} calories={rest.calories}/>
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
                  onChange={this.handlePageChange}
                />
	                </Row>
                  </div>
        );
        }
}
export default FullSearch
