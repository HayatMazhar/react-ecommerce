import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div> <section className="section-name padding-y bg">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>Download app demo text</h3>
            <p>Get an amazing app  to make Your life easy</p>
          </div>
          <div className="col-md-6 text-md-right">
            <a href="/"><img src="assets/images/misc/appstore.png" height={40} alt=''/></a>
            <a href="/"><img src="assets/images/misc/appstore.png" height={40} alt='' /></a>
          </div>
        </div>
      </div>
    </section>
    <footer className="section-footer border-top bg">
      <div className="container">
        <section className="footer-top  padding-y">
          <div className="row">
            <aside className="col-md col-6">
              <h6 className="title">Brands</h6>
              <ul className="list-unstyled">
                <li> <a href="/">Adidas</a></li>
                <li> <a href="/">Puma</a></li>
                <li> <a href="/">Reebok</a></li>
                <li> <a href="/">Nike</a></li>
              </ul>
            </aside>
            <aside className="col-md col-6">
              <h6 className="title">Company</h6>
              <ul className="list-unstyled">
                <li> <a href="/">About us</a></li>
                <li> <a href="/">Career</a></li>
                <li> <a href="/">Find a store</a></li>
                <li> <a href="/">Rules and terms</a></li>
                <li> <a href="/">Sitemap</a></li>
              </ul>
            </aside>
            <aside className="col-md col-6">
              <h6 className="title">Help</h6>
              <ul className="list-unstyled">
                <li> <a href="/">Contact us</a></li>
                <li> <a href="/">Money refund</a></li>
                <li> <a href="/">Order status</a></li>
                <li> <a href="/">Shipping info</a></li>
                <li> <a href="/">Open dispute</a></li>
              </ul>
            </aside>
            <aside className="col-md col-6">
              <h6 className="title">Account</h6>
              <ul className="list-unstyled">
                <li> <a href="/"> User Login </a></li>
                <li> <a href="/"> User register </a></li>
                <li> <a href="/"> Account Setting </a></li>
                <li> <a href="/"> My Orders </a></li>
              </ul>
            </aside>
            <aside className="col-md">
              <h6 className="title">Social</h6>
              <ul className="list-unstyled">
                <li><a href="/"> <i className="fab fa-facebook" /> Facebook </a></li>
                <li><a href="/"> <i className="fab fa-twitter" /> Twitter </a></li>
                <li><a href="/"> <i className="fab fa-instagram" /> Instagram </a></li>
                <li><a href="/"> <i className="fab fa-youtube" /> Youtube </a></li>
              </ul>
            </aside>
          </div>
        </section>
        <section className="footer-bottom row">
          <div className="col-md-2">
            <p className="text-muted">   2021 Company name </p>
          </div>
          <div className="col-md-8 text-md-center">
            <span className="px-2">info@com</span>
            <span className="px-2">+000-000-0000</span>
            <span className="px-2">Street name 123, ABC</span>
          </div>
          <div className="col-md-2 text-md-right text-muted">
            <i className="fab fa-lg fa-cc-visa" />
            <i className="fab fa-lg fa-cc-paypal" />
            <i className="fab fa-lg fa-cc-mastercard" />
          </div>
        </section>
      </div>
    </footer></div>
    )
  }
}
