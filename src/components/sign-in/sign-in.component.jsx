import React from 'react'
import SignUpForm from '../sign-up/sign-up-form.component'
import { 
  signInWithGooglePopup,
  createUserDocumentFromAuth } from '../../utils/firebase/firebase.util'

const SignIn = () => {
    const loginGoogleUser = async ()=>{
       const {user} = await signInWithGooglePopup()
       const userDocRef = await createUserDocumentFromAuth(user)

    }
/*
    const loginGoogleRedirectUser = async ()=>{
      console.log("redirect")
      const {user} = await signInWithGoogleRedirect()
      console.log({user})
    //  createUserDocumentFromAuth(user)

  }
  */
  return (
    <div>
    <h1>Sign In Page</h1>
    <button onClick={loginGoogleUser}>Sign In With Google Popup</button>
    <SignUpForm/>
    </div>
  )
}

export default SignIn