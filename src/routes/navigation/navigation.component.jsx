import React, {Fragment, useContext} from 'react'
import { Outlet, Link } from 'react-router-dom';
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import { UserContext } from '../../context/user.context';
import { CartContext } from '../../context/cart.context';
import {signOutUser} from '../../utils/firebase/firebase.util'
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import {LogoContainer, NavigationContainer, NavLink, NavLinksContainer } from './navigation.styles.jsx'

const Navigation = () => {
  const {currentUser  } = useContext(UserContext)
  const {isCartOpen} = useContext(CartContext)

    return (
      <Fragment>
        <NavigationContainer className='navigation'>
        <LogoContainer className='logo-container' to='/'>
                <CrwnLogo className='logo'>LOGO</CrwnLogo>
        </LogoContainer>
         <NavLinksContainer className='nav-links-container'>
                <NavLink className='nav-link' to='/shop'>Shop</NavLink>
                {
                  currentUser ? 
                 <NavLink as='span'className='nav-link' onClick={signOutUser}>Sign Out</NavLink> :  <NavLink className='nav-link' to='/auth'>Sign In</NavLink>
                }

                <CartIcon />
               
         </NavLinksContainer>
         {
         isCartOpen && <CartDropdown />

         }

        </NavigationContainer>
      <Outlet/>
      </Fragment>
    )
  }


  export default Navigation;
