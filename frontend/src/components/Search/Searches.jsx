import React, { Component } from 'react';
import { Link, BrowserRouter, Switch, Route} from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap' ;
import './css/FullSearch.css'
import './Search.jsx'
import FullSearch from './FullSearch'
import Search from './Search'


export default class SearchContainer extends Component {
  render(){
    return (
      <Switch>
        <Route path='/search/:name' component={FullSearch}/>
      </Switch>
    );
  }
}
