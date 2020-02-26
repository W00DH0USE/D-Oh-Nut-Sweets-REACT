import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            img,
            info,
            ingredients,
            price,
            title,
            inCart
          } = value.detailProduct;

          return (
            <div className="container py-5">
              <Helmet>
                <title>D'Oh! Nut Sweets - Details</title>
              </Helmet>
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* end of title */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="" />
                </div>
                {/* product info */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    Description:
                  </p>
                  <p className="text-muted lead">{info}</p>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    Ingredients:
                  </p>
                  <p className="text-muted lead">{ingredients}</p>
                  <h4 className="text-blue">
                    <strong>
                      price : <span>$</span>
                      {price}
                    </strong>
                  </h4>
                  {/* buttons */}
                  <div>
                    <Link to="/store">
                      <ButtonContainer>back to products</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "in cart" : "add to cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
