import React, { Component } from 'react'

export default class BannerNav extends Component {
  render() {
    return (
      <div><nav className="card">
      <ul className="menu-category">
        <li><a href="/">Best clothes</a></li>
        <li><a href="/">Automobiles</a></li>
        <li><a href="/">Home interior</a></li>
        <li><a href="/">Electronics</a></li>
        <li><a href="/">Technologies</a></li>
        <li><a href="/">Digital goods</a></li>
        <li><a href="/">Online goods</a></li>
      </ul>
    </nav></div>
    )
  }
}
