import './cart-icon.styles.scss'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'
const CartIcon  = () => {
    const {isCartOpen, setIsCartOpen} = useContext(CartContext)

    const toggle =()=>{
setIsCartOpen(!isCartOpen)
    }
    return (
        <div onClick={toggle} className='cart-icon-container'>
        <ShoppingIcon  className='shopping-icon'/>
        <span className='item-count'>10</span>
        </div>
    )
}

export default CartIcon