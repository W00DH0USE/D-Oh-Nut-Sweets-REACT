import React, { Component } from "react";
import { ButtonContainer } from "../Button";
import { Link } from "react-router-dom";

export default class CustomCakeOrderModal extends Component {
  render() {
    return (
      <div className="modalContainer">
        <div className="container">
          <div className="row">
            <div
              className="col-8 mx-auto col-md-6 col-lg-4 p-5 text-center text-capitalize"
              id="modal"
            >
              <h5>Your cake has been added to the cart</h5>
              <Link to="/store">
                <ButtonContainer className="btn"
                  onClick={() => {}}
                >
                  Continue Shopping
                </ButtonContainer>
              </Link>
              <Link to="/cart">
                <ButtonContainer
                  cart
                  onClick={() => {}}
                >
                  Go To Cart
                </ButtonContainer>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
