import React,{useEffect,lazy,Suspense} from 'react';
import './App.css';

import {Switch,Route,Redirect} from 'react-router-dom';
import Spinner from './components/spinner/spinner.component';
import Header from './components/header/header.component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/user/user.selectors';
import {checkUserSession} from './redux/user/user.actions';

const Homepage=lazy(()=>import('./pages/homepage/homepage.component'));
const ShopPage=lazy(()=>import('./pages/shop/shop.component'));
const checkoutPage=lazy(()=>import('./pages/checkout/checkout.component'));
const SignInandSignOutPage=lazy(()=>import('./pages/sign-in-and-sign-out/sign-in-and-sign-out'));

const App=({checkUserSession,currentUser}) =>{
  useEffect(()=>{
    checkUserSession();
  },[checkUserSession]);
      return (
    <div>
      <Header/>
      <Switch>
        <Suspense fallback={<Spinner/>}>
      <Route exact path='/' component={Homepage} />
        <Route exact path='/checkout' component={checkoutPage} />
      <Route path='/shop' component={ShopPage}/>
      <Route exact path='/signin' render={()=>currentUser?(<Redirect to='/'/>):(<SignInandSignOutPage/>)}/>
      </Suspense>
      </Switch>
    </div>
  );
  }
const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
});

const mapDispatchToProps=dispatch=>({
  checkUserSession:()=>dispatch(checkUserSession())
});
export default connect(mapStateToProps,mapDispatchToProps)(App);
