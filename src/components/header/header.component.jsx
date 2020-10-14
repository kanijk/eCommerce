import React from 'react';
import {Link} from 'react-router-dom';
import { connect} from "react-redux";

import CartIcon from '../cart-icon/cart-icon.component'; 

import {createStructuredSelector} from "reselect";
import { ReactComponent as Logo } from '../../assets/crownsvg.svg';
import CartDropdown from "./../cart-dropdown/cart-dropdown.component";
import {auth} from './../../firebase/firebase.utils';
import './header.style.scss';

import { selectCurrentUser } from "../../redux/user/user.selectors"
import { selectCartHidden } from "../../redux/cart/cart-selectors";


const Header =({currentUser, hidden})=>(
    <div className = 'header'>
        <Link to = '/' className ='logo-container'>
            <Logo className='logo'></Logo> 
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/shop'>CONTACT</Link>
            {
                currentUser?
                <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>:
            <Link className='option' to='/signIn'>SIGN IN</Link>
            }
            <CartIcon/>

        
        </div>
        {hidden?null: <CartDropdown></CartDropdown>}
        

    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);