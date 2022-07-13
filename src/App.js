/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import axios from 'axios';
import Header from './components/_shared/layout/Header.js';
import Banner from './components/_shared/layout/Banner.js';
import Footer from './components/_shared/layout/Footer.js';
import Home from './components/Core/Home.js';

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