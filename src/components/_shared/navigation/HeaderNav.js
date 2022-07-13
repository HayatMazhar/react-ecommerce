import React, { Component } from 'react'

export default class HeaderNav extends Component {
    render() {
        return (
            <div>  <nav className="navbar navbar-main navbar-expand-lg navbar-light border-bottom">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav" aria-controls="main_nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="main_nav">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Supermarket</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Partnership</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Baby &amp; Toys</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Fitness sport</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Clothing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Furnitures</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="/"> More</a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="/">Foods and Drink</a>
                                    <a className="dropdown-item" href="/">Home interior</a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="/">Category 1</a>
                                    <a className="dropdown-item" href="/">Category 2</a>
                                    <a className="dropdown-item" href="/">Category 3</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav></div>
        )
    }
}
