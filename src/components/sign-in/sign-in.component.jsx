import React from 'react'
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.util'
const SignIn = () => {
    const loginGoogleUser = async ()=>{
        const {user} = await signInWithGooglePopup()
        createUserDocumentFromAuth(user)

    }
  return (
    <div>
    <h1>Sign In Page</h1>
    <button onClick={loginGoogleUser}>Sign In With Google</button>
    
    
    </div>
  )
}

export default SignIn