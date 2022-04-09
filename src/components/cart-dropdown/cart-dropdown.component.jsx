import { useContext } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import { CartContext } from '../../context/cart.context';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles.jsx'

const CartDropdown = () =>{
    const {cartItems} = useContext(CartContext)
    const navigate = useNavigate()

    const goToCheckoutPage = () => {
        navigate("/checkout")
    }
    return (
        <CartDropdownContainer >
            <CartItems >
                {
                    cartItems.length ? (cartItems.map((item)=> (
                        <CartItem key={item.id} cartItem={item}/>

                    )) 

                    ): <EmptyMessage>Cart Empty</EmptyMessage>
                }

                {
                    
                }
            </CartItems>
            <Button onClick={goToCheckoutPage}>Checkout</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown;