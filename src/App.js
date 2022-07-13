/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import axios from 'axios';
import Header from './components/shared/layout/Header.js';
import Banner from './components/shared/layout/Banner.js';
import Footer from './components/shared/layout/Footer.js';
import Home from './components/core/Home.js';

class App extends React.Component {

  render() {
    return (

      <div classname="App">
        <Header />
        <Banner />
        <Home />
        <Footer />
      </div>
    );
  }
}
export default App