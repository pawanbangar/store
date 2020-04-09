import React from 'react';
import './sign-in.style.scss';
import {FormInput} from '../form-input/form-input.component';
import {CustomButton} from '../custom-button/custom-button';
import {auth,SignInWithGoogle} from '../../firebase/firebase.util.js';
class SignIn extends React.Component{
    constructor(props){
        super(props);
    this.state={
        email:'',
        password:''
    }
   
    }
     handleSubmit= event =>{
        event.preventDefault();
         const {email,password}=this.state;
         try{
             (auth.signInWithEmailAndPassword(email,password)).then(
             this.setState({
                 email:'',
                 password:''
             }));
             
         }catch(error){
             alert('an error occured');
         }
         
    }
     handleChange= event =>{
         const {value,name} =event.target;
         this.setState({
            [name]:value
         });
     }
    render(){
        return(
            <div className='sign-in'>
            <h2>I Aleready Have an Account?</h2>
            <span>Sign in with your Email and Password</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput name='email' handleChange={this.handleChange} label='email' type='email' value={this.state.email}/>
                <FormInput name='password' handleChange={this.handleChange} label='password' type='password' value={this.state.password}/>
                <div className='buttons'>
                <CustomButton type='submit'>Sign In</CustomButton>
                <CustomButton onClick={SignInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                
                </div>
                
            </form>
                </div>
        
        )
    }
    
    
}
export default SignIn;