import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap' ;
import './About.css'



export default class About extends Component {
  render(){
    return (
      <Grid>
        <Row>
          <h2>About PocketChef</h2>
          <p>Pocketchef.me was created in hopes of streamlining the process of learning new recipes from recipes at their favorite restaurants so users can make them at home. The website offers data on popular menu items at restaurants, as well as recipes for these menu items and information including prep-time and nutritional facts on all the ingredients included in those recipes.</p>
          <p>The website is useful for any aspring cook or anybody who has fallen in love with a particular dish (or few dishes) from a restaurant. Such a person can easily navigate the site to find recipes for those dishes as well as information regarding how much time it would take them to make at home and recipes including full instructions on how to prepare the dish.</p> 
        </Row>
        <Row>
          <h2 align="center">Team SWEats</h2>
        </Row>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} md={4} className="image-wrap">
            <Image width={200} height={200} alt="200x200" src="https://i.imgur.com/9iA21IL.jpg" circle className="contributor-pic" />
            <h3>Aditya Prasad</h3>
            <li class="list-group-item"><b>About:</b> Aditya is a third-year CS student who is super into playing instruments, but not one specific one. He plays four different ones. He really enjoys going to Halal Bros.</li>
            <li class="list-group-item"><b>Major Responsibilities:</b> Full Stack, setting up server</li>
            <li class="list-group-item"><b>Commits:</b>32</li>
            <li class="list-group-item"><b>Issues:</b>0</li>
            <li class="list-group-item"><b>Unit Tests:</b>0</li>
          </Col>
          <Col xs={12} sm={4} className="image-wrap">
            <Image width={200} height={200} alt="200x200" src="https://i.imgur.com/bXpurgB.jpg" circle className="contributor-pic" />
            <h3>Connor Burkman</h3>
            <li class="list-group-item"><b>About:</b> Connor is a fourth-year CS student who thinks Panda Express is too spicy. He's in love with some of the food at Song La.</li>
            <li class="list-group-item"><b>Major Responsibilities:</b> Full Stack, setting up server</li>
            <li class="list-group-item"><b>Commits:</b>32</li>
            <li class="list-group-item"><b>Issues:</b>0</li>
            <li class="list-group-item"><b>Unit Tests:</b>0</li>
          </Col>
          <Col xs={12} sm={4} className="image-wrap">
            <Image width={200} height={200} alt="200x200" src="https://i.imgur.com/puiutQZ.jpg" circle className="contributor-pic" />
            <h3>Jesus Romero</h3>
            <li class="list-group-item"><b>About:</b> Jesus is a fourth-year CS student who loves tamales. He's an advocate of Olive Garden and splurges at Sushi Junai.</li>
            <li class="list-group-item"><b>Major Responsibilities:</b> Full Stack, setting up server</li>
            <li class="list-group-item"><b>Commits:</b>3</li>
            <li class="list-group-item"><b>Issues:</b>0</li>
            <li class="list-group-item"><b>Unit Tests:</b>0</li>
          </Col>
          <Col xs={12} sm={4} className="image-wrap">
            <Image width={200} height={200} alt="200x200" src="https://i.imgur.com/H158r6O.jpg" circle className="contributor-pic" />
            <h3>Matthew Curtis</h3>
            <li class="list-group-item"><b>About:</b> Matthew is a fourth-year CS students who has the misfortune of having first names for both first and last names. He loves the take on Asian cuisine at the local food truck Pinch.</li>
            <li class="list-group-item"><b>Major Responsibilities:</b> Full Stack, managing server redeployment, creating and tracking issues, writting user stories, writting html pages</li>
            <li class="list-group-item"><b>Commits:</b>35</li>
            <li class="list-group-item"><b>Issues:</b>18</li>
            <li class="list-group-item"><b>Unit Tests:</b>0</li>
            </Col>
          <Col xs={12} sm={4} className="image-wrap">
            <Image width={200} height={200} alt="100x100" src="https://i.imgur.com/BmRVX02.jpg" circle className="contributor-pic" />
            <h3>Patrick Dalisay</h3>
            <li class="list-group-item"><b>About:</b> Patrick is a third-year CS student who enjoys long walks on the beach and competitive dancing. His favorite place to eat is at basically any taco truck that serves some nice, cheap tacos al pastor.</li>
            <li class="list-group-item"><b>Major Responsibilities:</b> Full Stack, setting up server, writting html pages</li>
            <li class="list-group-item"><b>Commits:</b>16</li>
            <li class="list-group-item"><b>Issues:</b>0</li>
            <li class="list-group-item"><b>Unit Tests:</b>0</li>          
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={4}>
            <h3>Stats:</h3>
          </Col>
          <Col xs={12} sm={4}>
            <h3>Data:</h3>
          </Col>
          <Col xs={12} sm={4}>
            <h3>Tools:</h3>
          </Col>
          <Col xs={12} sm={4}>
            <h3>Links:</h3>
          </Col>
        </Row>
      </Grid>
    );
  }
}
