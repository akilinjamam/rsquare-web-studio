import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from './firebase.init';
import './Login.css'

const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        // loading,
        // error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleSubmit = (event) => {

        event.preventDefault()

        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email, password)


    }

    if (user) {
        console.log('success')
    }
    return (
        <div className='flex'>
            <div className='left-side'>
                <div className='left-side-title'>
                    <p>Welcome to Rsquare.</p>
                </div>
                <div className='left-side-paragraph'>
                    <p>Lets get you all set up so start with your account and begin setting up your profile</p>
                </div>
            </div>

            <div className='right-side'>
                <div className='right-side-title'>
                    <p>Welcome Back!</p>
                </div>

                <div className='right-side-paragraph'>
                    <p>Please Enter your Details</p>
                </div>

                <div className='right-side-form'>
                    <form onSubmit={handleSubmit}>

                        <p>Email Address</p>
                        <input className='input' type="text" name="email" id="" required />

                        <p>Password</p>
                        <input className='input' type="text" name="password" id="" required />

                        <div className='flex justify-between'>
                            <div className='flex'>

                                <input style={{ marginRight: '8px' }} type="checkbox" name="" id="" />
                                <p>Remember me</p>

                            </div>

                            <div style={{ marginRight: '37px' }}>
                                <Link to="">Forgot password ?</Link>
                            </div>
                        </div>

                        <button type="submit">submit</button>
                    </form>
                </div>


            </div>
        </div>
    );
};

export default Login;