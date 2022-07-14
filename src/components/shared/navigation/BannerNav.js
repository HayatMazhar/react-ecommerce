import React, { Component } from 'react'
import axios from 'axios';

export default class BannerNav extends Component {

  state = {
    categories: []
  }

  componentDidMount() {
    //calling rest api for products data
    axios.get('https://dummyjson.com/products/categories')
      .then(res => {
        const categories = res.data.slice(0, 7);
        // const products = res.data.products;
        this.setState({ categories });
      })

  }


  render() {
    return (
      <div><nav className="card">
        <ul className="menu-category">
          {this.state.categories.map((result) => {
            return (
              <li><a href="/">{result.toUpperCase()}</a></li>
            )
          })}
        </ul>
      </nav></div>
    )
  }
}
