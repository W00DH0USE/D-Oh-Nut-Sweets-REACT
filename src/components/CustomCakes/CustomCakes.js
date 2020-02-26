import React, { Component } from 'react'

export default class CustomCakes extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-10 mx-auto text-center text-title text-capitalize">
            <h1 style={{ color: "red", paddingBottom: "15px"}}>We're Sorry</h1>
            <h1>Unfortunately our website is currently under construction</h1>
          </div>
        </div>

        {/* <form class="form-horizontal">
          <fieldset>

          <!-- Form Name -->
          <legend>Form Name</legend>

          <!-- Text input-->
          <div class="form-group">
            <label class="col-md-4 control-label" for="textinput">Oder Number</label>  
            <div class="col-md-4">
            <input id="textinput" name="textinput" type="text" placeholder="DNS-106" class="form-control input-md">
              
            </div>
          </div>

          <!-- Text input-->
          <div class="form-group">
            <label class="col-md-4 control-label" for="order-full-name">Full Name</label>  
            <div class="col-md-4">
            <input id="order-full-name" name="order-full-name" type="text" placeholder="Full Name" class="form-control input-md" required="">
              
            </div>
          </div>

          <!-- Text input-->
          <div class="form-group">
            <label class="col-md-4 control-label" for="order-email">Email</label>  
            <div class="col-md-4">
            <input id="order-email" name="order-email" type="text" placeholder="Email" class="form-control input-md" required="">
            <span class="help-block">example@example.com</span>  
            </div>
          </div>

          <!-- Text input-->
          <div class="form-group">
            <label class="col-md-4 control-label" for="order-phone-number">Mobile/Phone Number</label>  
            <div class="col-md-4">
            <input id="order-phone-number" name="order-phone-number" type="text" placeholder="" class="form-control input-md" required="">
              
            </div>
          </div>

          <!-- Multiple Radios -->
          <div class="form-group">
            <label class="col-md-4 control-label" for="order-flavours">Cupcakes Flavors (1 doz. minimum)</label>
            <div class="col-md-4">
            <div class="radio">
              <label for="order-flavours-0">
                <input type="radio" name="order-flavours" id="order-flavours-0" value="red-velvet" checked="checked">
                Red Velvet ($150.00)
              </label>
            </div>
            <div class="radio">
              <label for="order-flavours-1">
                <input type="radio" name="order-flavours" id="order-flavours-1" value="vanilla">
                Vanilla ($100.00)
              </label>
            </div>
            <div class="radio">
              <label for="order-flavours-2">
                <input type="radio" name="order-flavours" id="order-flavours-2" value="chocolate">
                Chocolate ($120.00)
              </label>
            </div>
            <div class="radio">
              <label for="order-flavours-3">
                <input type="radio" name="order-flavours" id="order-flavours-3" value="coconut">
                Coconut ($120.00)
              </label>
            </div>
            <div class="radio">
              <label for="order-flavours-4">
                <input type="radio" name="order-flavours" id="order-flavours-4" value="lemon">
                Lemon ($100.00)
              </label>
            </div>
            <div class="radio">
              <label for="order-flavours-5">
                <input type="radio" name="order-flavours" id="order-flavours-5" value="chocolate-mint">
                Chocolate Mint ($120.00)
              </label>
            </div>
            </div>
          </div>

          <!-- Select Basic -->
          <div class="form-group">
            <label class="col-md-4 control-label" for="order-cake-size">Cake Size</label>
            <div class="col-md-4">
              <select id="order-cake-size" name="order-cake-size" class="form-control">
                <option value="cake-small">Small  (4 inches)</option>
                <option value="cake-medium">Medium  (6 inches)</option>
                <option value="cake-large">Large  (8 inches)</option>
                <option value="cake-xlarge">X-Large  (10 inches)</option>
              </select>
            </div>
          </div>

          <!-- Multiple Radios -->
          <div class="form-group">
            <label class="col-md-4 control-label" for="radios">Multiple Radios</label>
            <div class="col-md-4">
            <div class="radio">
              <label for="radios-0">
                <input type="radio" name="radios" id="radios-0" value="1" checked="checked">
                Option one
              </label>
            </div>
            <div class="radio">
              <label for="radios-1">
                <input type="radio" name="radios" id="radios-1" value="2">
                Option two
              </label>
            </div>
            </div>
          </div>

          </fieldset>
          </form> */}


      </div>
    )
  }
}
