import React from 'react'
import expect from 'expect'
import { shallow, mount, configure, render, spyLifecycle } from 'enzyme'
//import sinon from 'sinon';


import RecipeCard from '../src/components/Recipes/RecipesCard'
import Adapter from 'enzyme-adapter-react-16'
import App from '../src/App'
import Navbar from '../src/components/pcNavbar'

import Ingredients from '../src/components/Ingredients/Ingredients';
import Recipes from '../src/components/Recipes/Recipes';
import Restaurants from '../src/components/Restaurants/Restaurants';

import RestaurantCard from '../src/components/Restaurants/RestaurantCard'
import FullRecipes from '../src/components/Recipes/FullRecipes'
import FullIngredients from '../src/components/Ingredients/FullIngredients'
import FullRestaurants from '../src/components/Restaurants/FullRestaurants'
import About from '../src/components/About/About'
import Home from '../src/components/Home/Home'

import { BrowserRouter as Router, Route } from 'react-router-dom';


configure({ adapter: new Adapter() });


describe('<App/>', function () {
  it('check state', function () {
    shallow(<App />);
  });
});

describe('<pcNavbar/>', function () {
  it('check state', function () {
    shallow(<App />);
  });
});

describe('<Recipes/>', function () {
  it('check state', function () {
    shallow(<App />);
  });
});

describe('<Restaurants/>', function () {
  it('check state', function () {
    shallow(<App />);
  });
});

describe('<RestaurantCard/>', function () {
  it('check state', function () {
    shallow(<App />);
  });
});

describe('<Ingredients/>', function () {
  it('check state', function () {
    shallow(<App />);
  });
});

describe('<FullRecipes/>', function () {
  it('check state', function () {
    shallow(<App />);
  });
});

describe('<FullIngredients/>', function () {
  it('check state', function () {
	const wrapper = shallow(<FullIngredients />);
    expect(wrapper.state().activePage).toBe(1);  });
});

describe('<FullRestaurants/>', function () {
  it('check state', function () {
    shallow(<App />);
  });
});

describe('<About/>', function () {
  it('check state', function () {
    shallow(<App />);
  });
});

describe('<Home/>', function () {
  it('check state', function () {
    shallow(<App />);
  });
});
