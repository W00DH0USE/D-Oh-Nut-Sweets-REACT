import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { storeProducts } from "../data";
import { ProductConsumer } from "../context";

export default class ProductList extends Component {
  state = {
    products: storeProducts
  };
  render() {
    return (
      <React.Fragment>
        <div className="productWrapper pb-5" style={{ paddingTop: "76px"}}>
          <div className="container">
            <Title name="our" title="store" />
            <div className="row products-container">
              <ProductConsumer>
                {value => {
                  return value.products.map(product => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
