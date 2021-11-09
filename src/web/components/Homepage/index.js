import React, { Fragment } from 'react';
import Navbar from '../Navbar';
import Main from '../templates/main';
import SearchProducts from '../SearchProducts';
import Categories from '../Categories';
import BottomNavigationBar from '../BottomNavigationBar';

const Homepage = () => (
  <Fragment>
    <Navbar />
    <Main>
      <SearchProducts />
      <Categories />
    </Main>
    <BottomNavigationBar />
  </Fragment>
);

export default Homepage;
