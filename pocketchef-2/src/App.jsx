import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Route, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Ingredients from './components/Ingredients';
import Recipes from './components/Recipes';
import Restaurants from './components/Restaurants';
import Navbar from './components/pcNavbar';


class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/ingredients" component={Ingredients} />
        <Route path="/recipes" component={Recipes} />
        <Route path="/restaurants" component={Restaurants} />
      </div>
      </Router>
    );
  }
}

export default App;
