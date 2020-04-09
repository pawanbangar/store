import React from 'react';
import {removeItemFromCart,removeItem,addItem} from '../../redux/cart/cart.actions';
import {connect} from 'react-redux';
import './checkout.styles.scss';

const CheckoutItem=({cartItem,clearItem,removeItem,addItem})=>{
    const {name,imageUrl,quantity,price}=cartItem;
    return(
        <div className='checkout-item'>
    <div className='image-container'>
        <img src={imageUrl} alt='item'/>
    </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={()=>removeItem(cartItem)}>&#10094; </div>
            <span className='value'>{quantity}</span>
             <div className='arrow' onClick={()=>addItem(cartItem)}>&#10095; </div>
            </span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={()=>clearItem(cartItem)}>&#10005;</div>
    </div>
)
}
const mapDispathToProps=(dispatch)=>({
    clearItem:item=>dispatch(removeItemFromCart(item)),
    removeItem:item=>dispatch(removeItem(item)) ,
    addItem:item=>dispatch(addItem(item))
    });
export default connect(null,mapDispathToProps)(CheckoutItem);