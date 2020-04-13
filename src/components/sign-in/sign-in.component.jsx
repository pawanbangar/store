import React,{useState} from 'react';
import {connect} from 'react-redux';
import './sign-in.style.scss';
import {FormInput} from '../form-input/form-input.component';
import {CustomButton} from '../custom-button/custom-button';
import {googleSignInStart,emailSignInStart} from '../../redux/user/user.actions'

const SignIn=({emailSignIn,googleSignIn})=>{

const [userCredentials,setCredentials]=useState({email:'',password:''})
    const {email,password}=userCredentials;
     const handleSubmit= event =>{
        event.preventDefault();
         
         emailSignIn(email,password);
         
    }
     const handleChange= event =>{
         const {value,name} =event.target;
         setCredentials({...userCredentials,[name]:value})
     }
        return(
            <div className='sign-in'>
            <h2>I Aleready Have an Account?</h2>
            <span>Sign in with your Email and Password</span>
            <form onSubmit={handleSubmit}>
                <FormInput name='email' handleChange={handleChange} label='email' type='email' value={email}/>
                <FormInput name='password' handleChange={handleChange} label='password' type='password' value={password}/>
                <div className='buttons'>
                <CustomButton type='submit'>Sign In</CustomButton>
                <CustomButton type='button' onClick={googleSignIn} isGoogleSignIn>Sign In With Google</CustomButton>
                
                </div>
                
            </form>
                </div>
        
        )
    }

const mapDispatchToProps=dispatch=>({
    googleSignIn:()=>dispatch(googleSignInStart()),
    emailSignIn:(email,password)=>dispatch(emailSignInStart({email,password}))
})

export default connect(null,mapDispatchToProps)(SignIn);