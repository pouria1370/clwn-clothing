import React from "react";
import "./checkout.style.scss";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectCartItems, totalPrice } from "../../redux/cart/cart.selector";
import CheckOutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'
const CheckOut = ({ cartItems, totalPrice }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>product</span>
      </div>
      <div className="header-block">
        <span>description</span>
      </div>
      <div className="header-block">
        <span>quantity</span>
      </div>
      <div className="header-block">
        <span>price</span>
      </div>
      <div className="header-block">
        <span>remove</span>
      </div>
    </div>
    {
      cartItems.map(item=><CheckOutItem cartItem={item}/>)
    }
    {cartItems.map(cartItem=>
        cartItem.name
        
        )
    }
    
    <div className="total">Total:{totalPrice}$</div>
    <div className='test-warnning'>
    Please enter 4242-4242-4242-4242
    and Exp:1/20
    <br/>
    
    </div>
    <StripeCheckoutButton price={totalPrice}/>
  </div>
);
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: totalPrice,
});
export default connect(mapStateToProps)(CheckOut);
