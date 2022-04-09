import {BaseButton, InvertedButton, GoogleSignInButton} from './button.styles.jsx'
import React from 'react'
/*
default

inverted

google sign in
*/

export const BUTTON_TYPES_CLASSES = {
    base: "base",
    google: 'google-sign-in',
    inverted: 'inverted',
    
}

const getButton = (buttonType = BUTTON_TYPES_CLASSES.base) => ({
    [BUTTON_TYPES_CLASSES.base]: BaseButton,
    [BUTTON_TYPES_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPES_CLASSES.inverted]: InvertedButton,
 
}[buttonType])

const Button = ({children, buttonType, onClick, type}) =>{

    const CustomButton = getButton(buttonType)
   
    return (

         <CustomButton type={type} onClick={onClick}>{children}</CustomButton>

               
        
    )
}

export default Button;

/*
 {
            buttonType === "base" ?   <BaseButton type={type} onClick={onClick}>{children}</BaseButton>
 : null
        }

        {
            buttonType === "google" ?   <GoogleSignInButton type={type} onClick={onClick}>{children}</GoogleSignInButton>
 : null
        }

        {
            buttonType === "inverted" ?   <InvertedButton type={type} onClick={onClick}>{children}</InvertedButton>
 : null
        }

*/