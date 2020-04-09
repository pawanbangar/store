import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton=({price})=>{
    const priceForStripe=100*price;
    const publishableKey='pk_test_pJSPbP6z7LW73Td69Ur2c8CE00yunIC5N5';
   const onToken=token=>{
       console.log(token);
       alert('Payment Successfull');
   }
    return(
        <StripeCheckout
             label='PAY NOW'
            name='P.one Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your Total is $${price}`}
            amount={priceForStripe}
            panelLabel='PAY NOW'
            token={onToken}
            stripeKey={publishableKey}
            />
    );
};

export default StripeCheckoutButton;