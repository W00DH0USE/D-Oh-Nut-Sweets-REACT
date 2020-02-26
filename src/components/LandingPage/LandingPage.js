import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ButtonContainer } from "../Button";
import {Helmet} from "react-helmet";

export default class LandingPage extends Component {
  render() {
    return (
      <div style={{ paddingTop: "76px"}}>
        <Helmet>
          <title>D'Oh! Nut Sweets - Home</title>
        </Helmet>
        {/* Banner */}
        <section className="container-fluid" id="banner">
          <div className="row max-height justify-content-center align-items-center">
            <div className="col-10 mx-auto banner text-center">
              <h1 className="text-capitalize">
                welcome to 
                <strong className="banner-title">D'Oh! Nut Sweet's</strong>
              </h1>
              <Link to="/products">
                <ButtonContainer className="btn banner-link text-uppercase my-2">
                  store
                </ButtonContainer>
              </Link>
            </div>
          </div>
        </section>
        {/* About */}
        <section className="about py-5" id="about">
          <div className="container">
            <div className="row">
              <div className="col-10 mx-auto col-md-6 my-5">
                <h1 className="text-capitalize">
                  about
                  <strong className="banner-title"> us</strong>
                </h1>
                <p className="my-4 text-muted w-75">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita dolor mollitia maiores magni, corporis error, repellat nesciunt esse dignissimos voluptates repellendus ipsa. Veritatis, fuga. Iure.
                </p>
                <Link to="/products">
                  <ButtonContainer className="btn banner-link text-uppercase my-2">
                    store
                  </ButtonContainer>
                </Link>
              </div>
              <div className="col-10 mx-auto col-md-6 my-5 align-self-center">
                <div className="about-image__container">
                  <img src={require("../../assets/images/doughnut-brown.jpg")} className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Products */}
        <section className="services py-5" id="services">
          <div className="container">
            <div className="row">
              <div className="col-md-4 text-center my-3">
                <img src={require("../../assets/images/FAVPNG_donuts-coffee-and-doughnuts-jelly-doughnut-gelatin-dessert-clip-art_4nWykPuF.png")} className="services-img" alt="bread-icon" />
                <h6 className="text-uppercase my-3 service-title">donuts</h6>
                <p className="w-75 mx-auto text-left service-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id illum nobis delectus natus dolorum laudantium ad possimus? Ut, alias quasi.
                </p>
              </div>
              <div className="col-md-4 text-center my-3">
                <img src={require("../../assets/images/FAVPNG_donuts-sufganiyah-coffee-and-doughnuts-clip-art_mPkNEf1T.png")} className="services-img" alt="cupcake-icon" />
                <h6 className="text-uppercase my-3 service-title">custom donuts</h6>
                <p className="w-75 mx-auto text-left service-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id illum nobis delectus natus dolorum laudantium ad possimus? Ut, alias quasi.
                </p>
              </div>
              <div className="col-md-4 text-center my-3">
                <img src={require("../../assets/images/FAVPNG_wedding-cake-torte-marriage_XZUPsgfa.png")} className="services-img" alt="cake-icon" />
                <h6 className="text-uppercase my-3 service-title">wedding cakes</h6>
                <p className="w-75 mx-auto text-left service-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id illum nobis delectus natus dolorum laudantium ad possimus? Ut, alias quasi.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Cakes */}
        <section className="cakes py-5" id="cakes">
          <div className="container">
            <div className="row">
              <div className="col-10 mx-auto col-sm-6 text-center">
                <h1 className="text-capitalize">
                  order 
                  <strong className="banner-title"> cake</strong>
                </h1>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-11 mx-auto col-md-6 col-lg-4 my-4 text-capitalize text-center">
                <h3 className="py-3">birthday cake</h3>
                <div className="text-muted">
                  <p className="my-3">birthday cake with a name</p>
                  <p className="my-3">custom ingredients</p>
                  <p className="my-3">custom size</p>
                  <p className="my-3">custom design</p>
                  <Link to="/custom">
                    <ButtonContainer className="btn btn-pink text-capitalize mb-3">
                      order now
                    </ButtonContainer>
                  </Link>
                  <p className="text-lowercase mb-4">starting at $30</p>
                  <img src={require("../../assets/images/trans-cake.png")} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-sm-11 mx-auto col-md-6 col-lg-4 my-4 text-capitalize text-center">
                <h3 className="py-3">custom cake</h3>
                <div className="text-muted">
                  <p className="my-3">birthday cake with a name</p>
                  <p className="my-3">custom ingredients</p>
                  <p className="my-3">custom size</p>
                  <p className="my-3">custom design</p>
                  <Link to="/custom">
                    <ButtonContainer className="btn btn-pink text-capitalize mb-3">
                      order now
                    </ButtonContainer>
                  </Link>
                  <p className="text-lowercase mb-4">starting at $50</p>
                  <img src={require("../../assets/images/trans-custom.png")} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-sm-11 mx-auto col-md-6 col-lg-4 my-4 text-capitalize text-center">
                <h3 className="py-3">wedding cake</h3>
                <div className="text-muted">
                  <p className="my-3">birthday cake with a name</p>
                  <p className="my-3">custom ingredients</p>
                  <p className="my-3">custom size</p>
                  <p className="my-3">custom design</p>
                  <Link to="/custom">
                    <ButtonContainer className="btn btn-pink text-capitalize mb-3">
                      order now
                    </ButtonContainer>
                  </Link>
                  <p className="text-lowercase mb-4">starting at $80</p>
                  <img src={require("../../assets/images/trans-wedding.png")} className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 footer-title py-5">
                <h1 className="text-capitalize text-center">
                  <strong className="banner-title">D'Oh! Nut Sweets</strong>
                </h1>
                <div className="footer-icons mt-3 d-flex justify-content-around flex-wrap">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#" className="footer-icon">
                    <i className="fab fa-facebook"></i>
                  </a>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#" className="footer-icon">
                    <i className="fab fa-twitter"></i>
                  </a>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#" className="footer-icon">
                    <i className="fab fa-instagram"></i>
                  </a>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#" className="footer-icon">
                    <i className="fab fa-google-plus"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-6 footer-contact text-capitalize text-center py-5">
                <h3 className="mb-5">contact</h3>
                <p className="d-flex flex-wrap">
                  <span className="mr-4 footer-icon">
                    <i className="fas fa-map fa-black"></i>
                  </span>
                  <span>123 Main Street, carlsbad CA 92008</span>
                </p>
                <p className="d-flex flex-wrap">
                  <span className="mr-4 footer-icon">
                    <i className="fas fa-phone fa-black"></i>
                  </span>
                  <span>(123) 456-789</span>
                </p>
                <p className="d-flex flex-wrap">
                  <span className="mr-4 footer-icon">
                    <i className="fas fa-envelope fa-black"></i>
                  </span>
                  <span>info@duh-nut-sweets.com</span>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}
