import React, { Component } from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import {ProductConsumer} from "../context";

export default class Navbar extends Component {
  state = {
    navOpen: false,
  };

  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {cart, cartSubTotal} = value;
          return (
            <nav class="navbar navbar-expand-md fixed-top">
              <Link to="/">
                <img src={require("../assets/images/logo.svg")} alt="store" className="navbar-brand" />
              </Link>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarsExample04">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <Link to="/" className="nav-link ml-5">
                      home
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/store" className="nav-link ml-4">
                      store
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/custom" className="nav-link ml-4">
                      custom cakes
                    </Link>
                  </li>
                  <li class="nav-item dropdown">
                    <div class="dropdown-menu" aria-labelledby="dropdown04">
                      <Link class="dropdown-item" to="/store">Store</Link>
                      <HashLink class="dropdown-item" to="/services">Services</HashLink>
                      <Link class="dropdown-item" to="/custom">Custom Cakes</Link>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="nav-number align-items-center justify-content-between">
                <span class="info-icon mx-lg-3">
                  <i class="fas fa-phone"></i>
                </span>
                <p class="mb-0">+ 123 456 789</p>
              </div>
              <div className="navbar-info" id="cart-info">
                { cart.length > 0 ?
                  <Link to="/cart" className="navbar-info navbar-info-cart">
                    <span className="navbar-info-icon">
                      <i className="fas fa-shopping-cart"></i>
                    </span>
                    { cart.length === 1 ? 
                      <p>
                      <span id="item-count">{cart.length}</span>
                      {" "}item - $
                      <span className="item-total">
                        {cartSubTotal}
                      </span>
                    </p>
                    :
                    <p>
                      <span id="item-count">{cart.length}</span>
                      {" "}items - $
                      <span className="item-total">
                        {cartSubTotal}
                      </span>
                    </p>
                    }
                  </Link>
                  : 
                  <Link to="/cart" className="navbar-info navbar-info-cart">
                    <span className="navbar-info-icon">
                      <i className="fas fa-shopping-cart"></i>
                    </span>
                    <p>
                      <span className="item-total">
                        cart empty
                      </span>
                    </p>
                  </Link>
                }
                </div>
            </nav>
          )
        }}
      </ProductConsumer>
    )
  }
}