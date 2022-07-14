/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import axios from 'axios';

export default class Home extends Component {

    state = {
        products: []
    }

    componentDidMount() {
        //calling rest api for products data
        axios.get('https://dummyjson.com/products/category/smartphones')
            .then(res => {
                // fetch 5 random products from the data
                const products = res.data.products.slice(1, 9);
                // const products = res.data.products;
                this.setState({ products });
            })

    }

    render() {
        return (
            <div> <section className="section-name padding-y-sm">
            <div className="container">
              <header className="section-heading">
                <a href="#" className="btn btn-outline-primary float-right">See all</a>
                <h3 className="section-title">Popular products</h3>
              </header>
              <div className="row">
                {this.state.products.map((result) => {
                  return (
                    <div className="col-md-3">
                      <div href="#" className="card card-product-grid">
                        <a href="#" className="img-wrap"> <img src={result.thumbnail} /> </a>
                        <figcaption className="info-wrap">
                          <a href="#" className="title">{result.title}</a>
                          <div className="price mt-1">{result.price}</div>
                        </figcaption>
                      </div>
                    </div>
                  )
                })}
  
              </div>
            </div>
          </section></div>
        )
    }
}
