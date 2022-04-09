import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon.styles.jsx'
import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'
const CartIcon  = () => {
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext)
    
    const toggle =()=>{
setIsCartOpen(!isCartOpen)
    }
    return (
        <CartIconContainer onClick={toggle} >
        <ShoppingIcon  />
        <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon