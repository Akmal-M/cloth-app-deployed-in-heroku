import React, {useEffect} from 'react';
import HomePage from "./Pages/homepage/Homepage.component";
import {Route, Switch, Redirect} from "react-router-dom";
import ShopPage from "./Pages/shop/Shop.component";
import Header from "./Components/header/header.component";
import SignInAndSignUp from "./Pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {connect} from "react-redux";
import {checkUserSession} from "./redux/user/user.actions";
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "./redux/user/user.selectors";
import CheckoutPage from "./Pages/checkout/checkout.component";
import './App.scss';

const App = ({checkUserSession, currentUser}) => {

    useEffect(() => {
        checkUserSession()
    }, [checkUserSession]);

    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/shop' component={ShopPage}/>
                <Route exact path='/checkout' component={CheckoutPage}/>
                <Route exact path='/signin'
                       render={() => currentUser ?
                           (<Redirect to='/'/>)
                           : (<SignInAndSignUp/>)}/>
            </Switch>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
