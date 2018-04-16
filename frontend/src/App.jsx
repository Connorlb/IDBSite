import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Ingredients from './components/Ingredients/Ingredients';
import Recipes from './components/Recipes/Recipes';
import Restaurants from './components/Restaurants/Restaurants';
import Restaurants from './components/Restaurants/Searches';
import Navbar from './components/pcNavbar';
import Restaurants from './components/Search/Restaurants';



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
        <Route path="/search" component={Searches} />
      </div>
      </Router>
    );
  }
}

export default App;
