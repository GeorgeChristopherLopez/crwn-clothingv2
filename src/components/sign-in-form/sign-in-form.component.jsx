import { useState, useContext } from 'react'
import {UserContext} from '../../context/user.context'
import {
    createUserDocumentFromAuth, 
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword

} from '../../utils/firebase/firebase.util'
import Button, {BUTTON_TYPES_CLASSES} from '../button/button.component'
import FormInput from '../form-input/form-input.component'
import './sign-in-form.styles.scss'
 
const defaultFormFields = {
    email: '',
    password: '',
   
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const {email, password} = formFields;
    
    //const {setCurrentUser} = useContext(UserContext)

    const signInWithGoogle = async ()=>{
        await signInWithGooglePopup() 
 
    }
    const resetFormFields = () =>{
        setFormFields(defaultFormFields)
    }
    const handleSubmit = async (event) => {
        event.preventDefault() // prevent form default behavior


        // check auth
        // create userdoc
        try {
          console.log("attempting to sign in...")
          const {user} = await signInAuthUserWithEmailAndPassword(email, password)
         // setCurrentUser(user)
          resetFormFields()
          
        } catch (error) {
            switch(error.code){
                case 'auth/wrong-password':
                    alert('incorrect password for email')
                    break;
                case 'auth/user-not-found':
                    alert('no user associated with this email')
                    break;
                default:
                    console.log(error)
            }

          
           
      
        }


    }
    const handleChange = (event) => {
        const { name , value} = event.target;

        setFormFields({...formFields, [name]: value})
    }
    return(
        <div className='sign-in-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password.</span>
            <form onSubmit={handleSubmit}>
               
            
             
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>
          
                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />
             
                <div className='buttons-container'>
                    <Button type="submit" buttonType={BUTTON_TYPES_CLASSES.base}>Sign In</Button>
                    <Button type="button" buttonType={BUTTON_TYPES_CLASSES.google} onClick={signInWithGoogle}>Sign In Google</Button>
                </div>
             
                </form>
             
              
        </div>
    )
}

export default SignInForm