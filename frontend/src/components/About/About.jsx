import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap' ;
import './css/About.css'
import axios from 'axios'


//https://api.github.com/repos/Connorlb/IDBSite/contributors?anon=1

export default class About extends Component {
    constructor() {
        super();
        this.state = {
          Matthew: {commits: 0, issues: 0},
          Jesus: {commits: 0, issues: 0},
          Connor: {commits: 0, issues: 0},
          Adtya: {commits: 0, issues: 0},
          Patrick: {commits: 0, issues: 0},

        };
        this.componentDidMount = this.componentDidMount.bind(this)
        }
        componentDidMount() {
          var Matthew = {commits: 0, issues: 0}
          var Jesus = {commits: 0, issues: 0}
          var Connor = {commits: 0, issues: 0}
          var Adtya = {commits: 0, issues: 0}
          var Patrick = {commits: 0, issues: 0}

        axios.get('https://api.github.com/repos/Connorlb/IDBSite/contributors?anon=1')
        .then(response => {
            response.data.map(coder => {
                //console.log(coder)
              if(coder.login == "AdityaPrasad1"){
                Adtya.commits += coder.contributions
              }
              else if(coder.login == "Jesus-Romero"){
                Jesus.commits += coder.contributions
              }
              else if(coder.login == "Connorlb" || coder.login == "connor.burkman@gmail.com"){
                Connor.commits += coder.contributions
              }
              else if(coder.login == "pdalisay"){
                Patrick.commits += coder.contributions
              }
              else if(coder.login == "mmcurtis55" || coder.type == "Anonymous"){
                Matthew.commits += coder.contributions
              }

            })

        })
        .catch(function (error) {
          console.log(error);})

          axios.get('https://api.github.com/repos/Connorlb/IDBSite/issues?state=all&creator=mmcurtis55')
          .then(response => {
            response.data.map(coder => {
              Matthew.issues += 1
            })
            console.log("Matthew.issues "+ Matthew.issues )
            this.setState({Matthew: Matthew });
          })

          axios.get('https://api.github.com/repos/Connorlb/IDBSite/issues?state=all&creator=AdityaPrasad1')
          .then(response => {
            response.data.map(coder => {
              Adtya.issues += 1
            })
            console.log("Adtya.issues "+ Adtya.issues )
            this.setState({Adtya: Adtya });
          })

          axios.get('https://api.github.com/repos/Connorlb/IDBSite/issues?state=all&creator=Jesus-Romero')
          .then(response => {
            response.data.map(coder => {
              Jesus.issues += 1
            })
            console.log("Jesus.issues "+ Jesus.issues )
            this.setState({Jesus: Jesus });
          })

          axios.get('https://api.github.com/repos/Connorlb/IDBSite/issues?state=all&creator=pdalisay')
          .then(response => {
            response.data.map(coder => {
              Patrick.issues += 1
            })
            console.log("Patrick.issues "+ Patrick.issues )
            this.setState({Patrick: Patrick });
          })

          axios.get('https://api.github.com/repos/Connorlb/IDBSite/issues?state=all&creator=Connorlb')
          .then(response => {
            response.data.map(coder => {
              Connor.issues += 1
            })
            console.log("Connor.issues "+ Connor.issues )
            this.setState({Connor: Connor });
          })


          console.log(Matthew)
          console.log(Jesus)
          console.log(Connor)
          console.log(Patrick)
          console.log(Adtya)
          console.log(Adtya.commits + Matthew.commits +Jesus.commits +Connor.commits + Patrick.commits)
        }

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
        <Row align= "center">
          <Col xs={12} sm={4} >
            <Image width={200} height={200} alt="200x200" src="https://i.imgur.com/9iA21IL.jpg" circle align="center"/>
            <h3>Aditya Prasad</h3>
            <li class="list-group-item"><b>About:</b> Aditya is a third-year CS student who is super into playing instruments, but not one specific one. He plays four different ones. He really enjoys going to Halal Bros.</li>
            <li class="list-group-item"><b>Major Responsibilities:</b> Full Stack, setting up server</li>
            <li class="list-group-item"><b>Commits:</b>{this.state.Adtya.commits}</li>
            <li class="list-group-item"><b>Issues:</b>{this.state.Adtya.issues}</li>
            <li class="list-group-item"><b>Unit Tests:</b>2</li>
          </Col>
          <Col xs={12} sm={4}>
            <Image width={200} height={200} alt="200x200" src="https://i.imgur.com/bXpurgB.jpg" circle align="center"/>
            <h3>Connor Burkman</h3>
            <li class="list-group-item"><b>About:</b> Connor is a fourth-year CS student who thinks Panda Express is too spicy. He's in love with some of the food at Song La.</li>
            <li class="list-group-item"><b>Major Responsibilities:</b> Full Stack, setting up server</li>
            <li class="list-group-item"><b>Commits:</b>{this.state.Connor.commits}</li>
            <li class="list-group-item"><b>Issues:</b>{this.state.Connor.issues}</li>
            <li class="list-group-item"><b>Unit Tests:</b>0</li>
          </Col>
          <Col xs={12} sm={4}>
            <Image width={200} height={200} alt="200x200" src="https://i.imgur.com/puiutQZ.jpg" circle align="center"/>
            <h3>Jesus Romero</h3>
            <li class="list-group-item"><b>About:</b> Jesus is a fourth-year CS student who loves tamales. He's an advocate of Olive Garden and splurges at Sushi Junai.</li>
            <li class="list-group-item"><b>Major Responsibilities:</b> Full Stack, setting up server</li>
            <li class="list-group-item"><b>Commits:</b>{this.state.Jesus.commits}</li>
            <li class="list-group-item"><b>Issues:</b>{this.state.Jesus.issues}</li>
            <li class="list-group-item"><b>Unit Tests:</b>0</li>
          </Col>
        </Row>
        <Row align= "center">
          <Col xs={12} sm={4} smOffset={2}>
            <Image width={200} height={200} alt="200x200" src="https://i.imgur.com/H158r6O.jpg" circle align="center"/>
            <h3>Matthew Curtis</h3>
            <li class="list-group-item"><b>About:</b> Matthew is a fourth-year CS students who has the misfortune of having first names for both first and last names. He loves the take on Asian cuisine at the local food truck Pinch.</li>
            <li class="list-group-item"><b>Major Responsibilities:</b> Full Stack, managing server redeployment, creating and tracking issues, writting user stories, writting html pages</li>
            <li class="list-group-item"><b>Commits:</b>{this.state.Matthew.commits}</li>
            <li class="list-group-item"><b>Issues:</b>{this.state.Matthew.issues}</li>
            <li class="list-group-item"><b>Unit Tests:</b>11</li>
          </Col>
          <Col xs={12} sm={4}>
            <Image width={200} height={200} alt="100x100" src="https://i.imgur.com/BmRVX02.jpg" circle align="center"/>
            <h3>Patrick Dalisay</h3>
            <li class="list-group-item"><b>About:</b> Patrick is a third-year CS student who enjoys long walks on the beach and competitive dancing. His favorite place to eat is at basically any taco truck that serves some nice, cheap tacos al pastor.</li>
            <li class="list-group-item"><b>Major Responsibilities:</b> Full Stack, setting up server, writting html pages</li>
            <li class="list-group-item"><b>Commits:</b>{this.state.Patrick.commits}</li>
            <li class="list-group-item"><b>Issues:</b>{this.state.Patrick.issues}</li>
            <li class="list-group-item"><b>Unit Tests:</b>0</li>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={3}>
            <h3>Stats:</h3>
            <p>Total no. of commits:{this.state.Connor.commits + this.state.Adtya.commits + this.state.Matthew.commits + this.state.Jesus.commits + this.state.Patrick.commits}</p>
            <p>Total no. of issues:{this.state.Adtya.issues + this.state.Connor.issues + this.state.Jesus.issues + this.state.Matthew.issues + this.state.Patrick.issues}</p>
            <p>Total no. of unit tests:13</p>
          </Col>
          <Col xs={12} sm={3}>
            <h3>Data:</h3>
            <p>https://spoonacular.com/food-api : wrote a API scraper in Python to scrape ingredient and recipe information by running http requests in a loop, then commiting the information to the database.</p>
            <p>https://developers.zomato.com/api : wrote another API scraper in Python to scrape nutritional information and then commited the values to the database.</p>
            <p>https://www.yelp.com/developers : wrote Python API scrapers to scrape restaurant specifics, such as name, location, and rating.</p>
            <p>https://developers.google.com/maps/ : used restaurant coordinates and address to produce a map of the area</p>
          </Col>
          <Col xs={12} sm={3}>
            <h3>Tools:</h3>
            <p>Amazon Web Services: Website Host</p>
            <p>Bootstrap: CSS Framework</p>
            <p>React-Boostrap: Front-End Framework</p>
            <p>Webpack: Module Bundler</p>
            <p>Flask: Web Framework</p>
            <p>Github: Version Control & File Hosting</p>
            <p>Namecheap: Custom Domain Name</p>
            <p>Postman: API Documentation</p>
            <p>Slack: Communication Device</p>
            <p>Mocha: Test Framework </p>
            <p>Selenium: Automated Browser Testing Framework</p>
            <p>PostgreSQL: Databse System</p>
            <p>SQLAlchemy: Python SQL Tooklkit</p>
            <p>Psycopg2: PostgreSQL Adapter for Python</p>
          </Col>
          <Col xs={12} sm={3}>
            <h3>Links:</h3>
            <p><a href="https://github.com/Connorlb/IDBSite"><h3 className="link">Github Repo</h3></a></p>
            <p><a href="https://www.gitbook.com/book/connorlb/pocketchef/details"><h3 class = "link">Gitbook</h3></a></p>
          </Col>
        </Row>
      </Grid>
    );
  }
}
