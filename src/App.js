import React from 'react';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { Route, Switch } from 'react-router-dom';
import Header  from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import { connect} from "react-redux";
import {setCurrentUser } from "./redux/user/user.actions"



class App extends React.Component {


  unsubscribeFromAuth = null ;
  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
      console.log(userAuth);
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        console.log(userRef);
        userRef.onSnapshot(snapShot =>{
          console.log(snapShot.data())
          setCurrentUser({currentUser:{
            id: snapShot.id,
            ...snapShot.data()
          }
          })
        })
        console.log(this.state);
      }
      setCurrentUser(userAuth);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path='/shop' component={ShopPage}></Route>
        <Route path ='/signIn' component={SignInAndSignUp}></Route>
      </Switch>
    </div>
  );
}

}

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(null, mapDispatchToProps )(App);
