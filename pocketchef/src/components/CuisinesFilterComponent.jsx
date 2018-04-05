import React from 'react'
import RestaurantAPI from '../api'
import VirtualizedSelect from 'react-virtualized-select';
import { Link } from 'react-router-dom'
import Pagination from "react-js-pagination";
import {Grid, Row, Col, Image, Button, MenuItem, DropdownButton} from 'react-bootstrap' ;
const DATA = require('../../../frontend/cuisines');

class CuisinesFilterComponent extends React.Component{

    render() {
        var options = DATA.CUISINES;
        return(
            <div>
            <VirtualizedSelect ref="cuisineSelect"
              options={options}
              simpleValue
              clearable
              name="select-cuisine"
              value={this.state.selectValue}
              onChange={this.updateValue}
              searchable
              labelKey="cuisine"
              valueKey="cuisine"
		      		/>
            </div>
        );
    }
}