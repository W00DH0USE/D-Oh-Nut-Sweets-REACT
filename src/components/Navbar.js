import React, { Component } from "react";
import { Link } from "react-router-dom";
import {ProductConsumer} from "../context";

export default class Navbar extends Component {
  state = {
    mobileNavOpen: false,
  };

  openMobileNav = () => {
    this.setState((prevState) => {
      return { mobileNavOpen: !prevState.mobileNavOpen };
    });
  };

  closeMobileNav = () => {
    this.setState(() => {
      return { mobileNavOpen: false };
    });
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
              <button class="navbar-toggler" type="button" onClick={() => this.openMobileNav()}>
                <span class="navbar-toggler-icon"><i class="fa fa-bars" aria-hidden="true"></i></span>
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
                      custom cake
                    </Link>
                  </li>
                </ul>
              </div>
              {this.state.mobileNavOpen === true ? 
                <div className="mobile-nav">
                  <ul>
                  <li class="nav-item active">
                      <Link to="/" className="mobile-nav-link nav-link ml-4" onClick={() => this.closeMobileNav()}>
                        home
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/store" className="mobile-nav-link nav-link ml-4" onClick={() => this.closeMobileNav()}>
                        store
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/custom" className="mobile-nav-link nav-link ml-4" onClick={() => this.closeMobileNav()}>
                        custom cake
                      </Link>
                    </li>
                  </ul>
                </div>
                :
                <div></div>
              }
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