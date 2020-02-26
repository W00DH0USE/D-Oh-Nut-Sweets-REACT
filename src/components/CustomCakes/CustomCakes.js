import React, { Component } from 'react'
import Title from "../Title";
import {Helmet} from "react-helmet";
import { ProductConsumer } from "../../context";
import CustomCakeOrderModal from './CustomCakeOrderModal';

export default class CustomCakes extends Component {
  state = {
    orderModalOpen: false
  }

  openModal = () => {
    this.setState(() => {
      return { orderModalOpen: true };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { orderModalOpen: false };
    });
  };

  render() {
    const { orderModalOpen } = this.state;

    return (
      <ProductConsumer>
        {value => {
          return (
            <div className="container mt-5" style={{ paddingTop: "76px"}}>
              <Helmet>
                <title>D'Oh! Nut Sweets - Home</title>
              </Helmet>
              <Title name="order a" title="Custom Cake" />

              <form class="cc-form form-horizontal">
                <fieldset>

                  {/* Order Number */}
                  <div class="form-group">
                    <label class="control-label" for="textinput">Order Number</label>  
                    <div>
                    <input id="textinput" name="textinput" type="text" placeholder="DNS-106" class="form-control input-md" disabled/>
                    </div>
                  </div>

                  {/* Full Name */}
                  <div class="form-group">
                    <label class="control-label" for="order-full-name">Full Name</label>  
                    <div>
                    <input id="order-full-name" name="order-full-name" type="text" placeholder="Full Name" class="form-control input-md" required="" />
                    </div>
                  </div>

                  {/* Email */}
                  <div class="form-group">
                    <label class="control-label" for="order-email">Email</label>  
                    <div>
                    <input id="order-email" name="order-email" type="email" placeholder="example@example.com" class="form-control input-md" required="" /> 
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div class="form-group">
                    <label class="control-label" for="order-phone-number">Mobile / Phone Number</label>  
                    <div>
                    <input id="order-phone-number" name="order-phone-number" type="number" placeholder="(012) 345 6789" class="form-control input-md" required="" />
                    </div>
                  </div>

                  {/* Cake Flavors */}
                  <div class="form-group">
                    <label class="control-label" for="order-flavours">Cake Flavor</label>
                    <div>
                      <select id="order-cake-size" name="order-cake-size" class="form-control">
                        <option value="red-velvet">Red Velvet</option>
                        <option value="vanilla">Vanilla</option>
                        <option value="chocolate">Chocolate</option>
                        <option value="coconut">Coconut</option>
                        <option value="lemon">Lemon</option>
                        <option value="chocolate-mint">Chocolate Mint</option>
                      </select>
                    </div>
                  </div>

                  {/* Cake Size */}
                  <div class="form-group">
                    <label class="control-label" for="order-cake-size">Cake Size</label>
                    <div>
                      <select id="order-cake-size" name="order-cake-size" class="form-control">
                        <option value="cake-small">Small  (4 inches)</option>
                        <option value="cake-medium">Medium  (6 inches)</option>
                        <option value="cake-large">Large  (8 inches)</option>
                        <option value="cake-xlarge">X-Large  (10 inches)</option>
                      </select>
                    </div>
                  </div>

                  {/* Butter Cream frosting flavors */}
                  <div class="form-group">
                    <label class="control-label" for="cake-frosting-flavors">Butter Cream frosting flavors</label>
                    <div>
                      <select id="order-cake-size" name="order-cake-size" class="form-control">
                        <option value="vanilla">Vanilla</option>
                        <option value="red-velvet">Red Velvet</option>
                        <option value="cream-cheese">Cream Cheese</option>
                        <option value="chocolate">Chocolate</option>
                        <option value="coconut">Coconut</option>
                        <option value="lemon">Lemon</option>
                        <option value="chocolate-mint">Chocolate Mint</option>
                        <option value="Almond">Almond</option>
                        <option value="salted-caramel">Salted Caramel</option>
                      </select>
                    </div>
                  </div>

                  {/* Pickup Date */}
                  <div class="form-group">
                    <label class="control-label" for="pickup-date">Choose your date for pick up (Please allow up to 48 hours)</label>  
                    <div>
                    <input id="pickup-date" name="pickup-date" type="date" placeholder="02-26-2020" class="form-control input-md" required="" />
                    </div>
                  </div>

                  {/* Extra Details */}
                  <div class="form-group">
                    <label class=" control-label" for="cake-details">Details (if any)</label>
                    <div>                     
                      <textarea class="form-control" id="cake-details" name="cake-details" cols="30" rows="5" placeholder="If you have any extra details/requirements, please fill them in here."></textarea>
                    </div>
                  </div>

                  {/* Upload Photo Button  */}
                  <div class="form-group">
                    <label class=" control-label" for="user-photo">Upload a photo</label>
                    <div>
                      <input id="user-photo" name="user-photo" class="input-file" type="file" style={{ height: "45px"}}/>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="btn-form" onClick={() => {this.openModal(); value.addToCart(99)}}>Submit</div>

                </fieldset>
              </form>

              {/* Order Modal */}
              { orderModalOpen === true ?
                <CustomCakeOrderModal onClick={() => this.closeModal()}/> 
                :
                ""
              }
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}
