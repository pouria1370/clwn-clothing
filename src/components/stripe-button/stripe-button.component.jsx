import React from 'react';
import './stripe-button.style.scss'
import StripeCheckout from 'react-stripe-checkout'

 const StripeCheckoutButton =({price})=> {
  const priceForStripe=price*100;
  const publishableKey="pk_test_51Ikq0dKTzRoZjzeSyxVyex8I2uC2cByTXoYgpaAErymDKBBOK4rccy5zAnbc8hhCWcB0PO4iyB75l0G9UB2seovn00FbKe8x7q"
 const onToken=token=>{
console.log(token);
alert('payment is successful')
}
    return(
        <StripeCheckout
        label='Pay Now'
        name='CRWN clothing Ltd'
        billingAddress
        shippingAddress
        image="https:/svgshare.com/i/
        CUz.svg"
        description={`Your Total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={ onToken}
        stripeKey={publishableKey}
        >
        </StripeCheckout>
        )
  
}


export default StripeCheckoutButton