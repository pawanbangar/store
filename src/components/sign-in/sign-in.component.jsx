import React from 'react';
import {connect} from 'react-redux';
import './sign-in.style.scss';
import {FormInput} from '../form-input/form-input.component';
import {CustomButton} from '../custom-button/custom-button';
import {googleSignInStart,emailSignInStart} from '../../redux/user/user.actions'

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
        const {emailSignIn}=this.props;
         const {email,password}=this.state;
         emailSignIn(email,password);
         
    }
     handleChange= event =>{
         const {value,name} =event.target;
         this.setState({
            [name]:value
         });
     }
    render(){
        const {googleSignIn} =this.props;
        return(
            <div className='sign-in'>
            <h2>I Aleready Have an Account?</h2>
            <span>Sign in with your Email and Password</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput name='email' handleChange={this.handleChange} label='email' type='email' value={this.state.email}/>
                <FormInput name='password' handleChange={this.handleChange} label='password' type='password' value={this.state.password}/>
                <div className='buttons'>
                <CustomButton type='submit'>Sign In</CustomButton>
                <CustomButton type='button' onClick={googleSignIn} isGoogleSignIn>Sign In With Google</CustomButton>
                
                </div>
                
            </form>
                </div>
        
        )
    }
    
    
}

const mapDispatchToProps=dispatch=>({
    googleSignIn:()=>dispatch(googleSignInStart()),
    emailSignIn:(email,password)=>dispatch(emailSignInStart({email,password}))
})

export default connect(null,mapDispatchToProps)(SignIn);