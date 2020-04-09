import React from 'react';
import {CustomButton} from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item.component';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selector';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {createStructuredSelector} from 'reselect';
import './cart-dropdown.style.scss';

const CartDropdown =({cartItems,history,dispatch})=>(
    <div className='cart-dropdown'>
    <div className='cart-items'>
        {
            cartItems.length?
            cartItems.map(item=>(
            <CartItem key={item.id} item={item}/>
            ))
            :
                <span className='empty-message'>Your Cart is Empty</span>
        }
        </div>
    <CustomButton onClick={()=>{
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }}>GO TO CHECKOUT</CustomButton>
    </div>
)
const mapStateToProps=createStructuredSelector({
    cartItems:selectCartItems
})
export default withRouter(connect(mapStateToProps)(CartDropdown));