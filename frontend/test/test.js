import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import { expect, assert } from 'chai';
import Navbar from '../src/components/pcNavbar'
import RecipesContainer from '../src/components/Recipes/Recipes'
import RestaurantsContainer from '../src/components/Restaurants/Restaurants'
import RestaurantCard from '../src/components/Restaurants/RestaurantCard'
import IngredientsContainer from '../src/components/Ingredients/Ingredients'
import FullRecipes from '../src/components/Recipes/FullRecipes'
import FullIngredients from '../src/components/Ingredients/FullIngredients'
import FullRestaurants from '../src/components/Restaurants/FullRestaurants'
import About from '../src/components/About/About'
import Home from '../src/components/Home/Home'

describe('<App/>', function () {
  it('pls render', function () {
    shallow(<App />);
  });
});

describe('<Navbar/>', function () {
  it('pls render', function() {
    shallow(<Navbar />);
  });
  it('should say PocketChef', function() {
    const navWrap = shallow(<Navbar />);
    expect(navWrap.find('Navbar.brand').render().text()).to.equal('PocketChef');
  });
  it('should have about, ingredients, recipes, restaurants', function () {
    const navWrap = shallow(<Navbar />);
    const navItems = navWrap.find('NavItem');
    expect(navItems).to.have.length(5);
    expect(navItems.at(0).render().text()).to.equal('Home');
    expect(navItems.at(1).render().text()).to.equal('Restaurants');
    expect(navItems.at(2).render().text()).to.equal('Recipes');
    expect(navItems.at(3).render().text()).to.equal('Ingredients');
    expect(navItems.at(4).render().text()).to.equal('About');
  });
});

describe('<About/>', function () {
  it('pls render', function() {
    shallow(<About />);
  });
});

