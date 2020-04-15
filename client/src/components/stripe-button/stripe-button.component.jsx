import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton=({price})=>{
    const priceForStripe=100*price;
     const publishableKey='pk_test_pJSPbP6z7LW73Td69Ur2c8CE00yunIC5N5';
   const onToken=token=>{
       console.log(token);
       axios({
           url:'https://us-central1-store-f7b54.cloudfunctions.net/app/payment',
           method:'post',
           description:'description',
           data:{
               amount:priceForStripe,
               token
           }
       }).then(response=>{
        alert('Payment Successfull'+response.JSON());
       }).catch(error=>{
           alert(JSON.stringify(error));
       })
       
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
            detail="sdsuysgsd dsgsyugs"
            token={onToken}
            stripeKey={publishableKey}
            />
    );
};

export default StripeCheckoutButton;