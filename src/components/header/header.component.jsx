import React from 'react';
import './header-component.style.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.util';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart.selector';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({currentUser,hidden}) =>(
     <div className='header'>
        <Link className='logo-container' to='/'>
        <Logo className='logo' />
        </Link>
        <div className='options'>
        <Link to='/shop' className='option'>
            Shop
        </Link>
            <Link to='/contact' className='option'>
            Contact
        </Link>
            {
                currentUser?
                    <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
                    :
                <Link to='/signin' className='option'>
                    SIGN IN
                </Link>
            }
        <CartIcon/>
        </div>
        {
            hidden?null:<CartDropdown/>
        }
      
    </div>
)
const mapStateToProps=createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
});

export default connect(mapStateToProps)(Header);