import React, { Component } from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import {ProductConsumer} from "../context";

export default class Navbar extends Component {

  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {cart, cartSubTotal} = value;
          return (
            <nav className="navbar navbar-expand-sm  navbar-dark px-sm-5">
              <Link to="/">
                <img src={require("../assets/images/logo.svg")} alt="store" className="navbar-brand" />
              </Link>
              <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                  <Link to="/" className="nav-link">
                    home
                  </Link>
                </li>
                <li className="nav-item ml-5">
                  <HashLink to="/#about" className="nav-link">
                    about
                  </HashLink>
                </li>
                <li className="nav-item ml-5">
                  <Link to="/store" className="nav-link">
                    store
                  </Link>
                </li>
                <li className="nav-item ml-5">
                  <HashLink to="/#services" className="nav-link">
                    services
                  </HashLink>
                </li>
                <li className="nav-item ml-5">
                  <Link to="/custom" className="nav-link">
                    custom cakes
                  </Link>
                </li>
              </ul>
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