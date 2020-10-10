import React from 'react';
import './sign-in.style.scss';
import SignInAndSignUp from '../../pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import FormInput from '../form-input/form-input.component';
import CustomButton from './../custom-button/custom-button.component';
import {auth, signInWithGoogle } from '../../firebase/firebase.utils';


class SignIn extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password : "",
        }
    }

    handleSubmit=async(event)=>{
        event.preventDefault();
        const {email, password } = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({email:'', password:''})
        }
        catch(err){
            console.log(err);
        }

    
    }

    handleChange=event=>{
        const {name,value} = event.target
        this.setState({[name]:value})
    }

    render(){
        return (
        <div className='sign-in'>
            <h1>I already have an account</h1>
            <span>Sign in with your email and password</span>
            <form onSubmit={this.handleSubmit}>


                <FormInput type='email'
                    name='email'
                    value={this.state.email}
                    handleChange={this.handleChange} 
                    required
                    label="Email"
                    ></FormInput>
                <FormInput type='password'
                    name='password' 
                    value={this.state.password}
                    handleChange={this.handleChange} 
                    required
                    label='Password'
                    ></FormInput>
                <div className="buttons">
                <CustomButton type='submit'>
                    SIGN IN
                </CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                    SIGN IN WITH GOOGLE
                </CustomButton>
                </div>

            </form>
        </div>)
    }
}


export default SignIn;