import React from 'react';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import {selectCartItems,selectCountTotal} from '../../redux/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import './checkout.styles.scss';

const checkoutPage=({cartItems,total})=>(
<div className='checkout-page'>
<div className='checkout-header'>
<div className='header-block'>
    <span>Product</span>
    </div>
    <div className='header-block'>
    <span>Description</span>
    </div>
    <div className='header-block'>
    <span>Quantity</span>
    </div>
    <div className='header-block'>
    <span>Price</span>
    </div>
      <div className='header-block'>
    <span>Remove</span>
    </div>
</div>
    {
        cartItems.map(cartItem=>
           <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
        )
    }
    <div className='total'>
    <span>Total: ${total}</span>
    </div>
    <StripeCheckoutButton price={total} />
    <div class='test-warning'>Please use the following Details:-<br/>
    Card No:4242 4242 4242 -EXP:06/20 -CVV:123
    
    </div>
    </div>
)
const mapStateToProps=createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCountTotal
}
)

export default connect(mapStateToProps)(checkoutPage);
