import './button.styles.scss'
/*
default

inverted

google sign in
*/

const BUTTON_TYPES_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted',
    
}

const Button = ({children, buttonType, onClick, type}) =>{
    return (
        <button type={type} onClick={onClick} className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`}>{children}</button>
    )
}

export default Button;