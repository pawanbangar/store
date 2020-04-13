import React from 'react';
import './App.css';

import {Switch,Route,Redirect} from 'react-router-dom';
import {Homepage} from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import checkoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';
import {connect} from 'react-redux';
import {SignInandSignOutPage} from './pages/sign-in-and-sign-out/sign-in-and-sign-out';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/user/user.selectors';
import {checkUserSession} from './redux/user/user.actions';


class App extends React.Component {
  unsubscribeFromAuth=null;
    componentDidMount(){
      const {checkUserSession}=this.props;
      checkUserSession();
    //   {/*  addCollectionAndDocuments('collections',collectionsArray.map(({title,items})=>({title,items}))); */}
}

componentWillUnmount(){
    this.unsubscribeFromAuth();
}
  render(){
      return (
    <div>
      <Header/>
      <Switch>
      <Route exact path='/' component={Homepage} />
        <Route exact path='/checkout' component={checkoutPage} />
      <Route path='/shop' component={ShopPage}/>
      <Route exact path='/signin' render={()=>this.props.currentUser?(<Redirect to='/'/>):(<SignInandSignOutPage/>)}/>
      </Switch>
    </div>
  );
  }
}
const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
});

const mapDispatchToProps=dispatch=>({
  checkUserSession:()=>dispatch(checkUserSession())
});
export default connect(mapStateToProps,mapDispatchToProps)(App);
