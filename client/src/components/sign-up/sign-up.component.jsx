import React,{useState} from 'react';
import {FormInput} from '../form-input/form-input.component';
import {CustomButton} from '../custom-button/custom-button';
import {signUpStart} from '../../redux/user/user.actions';
import {connect} from 'react-redux';
import './sign-up.style.scss';
const Signup =({signUpStart})=>{
    const [userCredentials,setCredentials]=useState({email:'',password:'',displayName:'',confirmPassword:''});
    const {displayName,email,password,confirmPassword}=userCredentials;

    const handleSubmit =async event =>{
        event.preventDefault();
               
            if(password!==confirmPassword){
                alert('password don\'t match');
            }
            signUpStart({displayName,email,password});
    }
    const handleChange =(event)=>{
        const {name,value}=event.target;
        setCredentials({...userCredentials,
            [name]:value
        })
    }
        return(
            <div className='sign-up'>
            <h2 className='title'>I Do Not Have an Account</h2>
            <span>Sign Up With Your Email and Password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label='Display Name'
                    required
                    >
                
                </FormInput>
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='Email'
                    required
                    >
                
                </FormInput>  
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label='Password'
                    required
                    >
                
                </FormInput>  
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='Confirm Password'
                    required
                    >
                
                </FormInput>
                <CustomButton
                    type='submit'>
                SIGN UP
                </CustomButton>
            </form>
            </div>
        )
    }

const mapDispachToProps=dispatch=>({
    signUpStart:(userCredentials)=>dispatch(signUpStart(userCredentials))
});
export default connect(null,mapDispachToProps)(Signup);