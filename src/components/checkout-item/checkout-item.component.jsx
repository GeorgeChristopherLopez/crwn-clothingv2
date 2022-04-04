import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import './checkout-item.styles.scss'

const CheckoutItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    const {clearItemFromCart, addItemToCart, removeItemFromCart} = useContext(CartContext)


    const clearItem = () => clearItemFromCart(cartItem)

    const increment = () => addItemToCart(cartItem)

    const decrement = () => removeItemFromCart(cartItem)
    return(
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
        
            <div onClick={decrement}  className='arrow'>&#10094;</div>
            
           <span className='value'>
           {quantity}
           </span> 
            
            <div onClick={increment}  className='arrow'>&#10095;</div>
            
            </span>
            <span className='price'>{price}</span>
            <div onClick={clearItem}className='remove-button'>&#10005;</div>
        </div>
    )
}

export default CheckoutItem;