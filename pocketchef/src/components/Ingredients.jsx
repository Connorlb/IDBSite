import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button,  Panel} from 'react-bootstrap' ;
import './Ingredients.css'

export default class Ingredients extends Component {
  render(){
    return (
    <div>
      <Panel>
        <Panel.Heading>
          <Panel.Title componentClass="h3">Panel heading with a title</Panel.Title>
        </Panel.Heading>
        <Panel.Body>Panel content</Panel.Body>
      </Panel>
    </div>
    );
  }
}
