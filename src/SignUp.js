import React from 'react';
import { Link } from 'react-router-dom';

import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './SignUp.css'
import auth from './firebase.init';

const SignUp = () => {


    const [
        createUserWithEmailAndPassword,
        user

    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true })


    const handleSubmit = async (event) => {

        event.preventDefault()
        console.log('clicked')

        const name = event.target.firstName.value;
        const lastName = event.target.lastName.value;
        const phoneNumber = event.target.phoneNumber.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password)

    }


    if (user) {
        console.log('user:', user)
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
                    <p>Begin your journey!</p>
                </div>

                <div className='right-side-paragraph'>
                    <p>Get started with the best platform for design</p>
                </div>

                <div className='right-side-form'>
                    <form onSubmit={handleSubmit} >
                        <div className='flex'>
                            <div>
                                <p>First Name*</p>
                                <input className='input' type="text" name="firstName" id="" />
                            </div>

                            <div>
                                <p>Last Name*</p>
                                <input className='input' type="text" name="lastName" id="" />
                            </div>
                        </div>

                        <div className='flex'>
                            <div>
                                <p>Email Address*</p>
                                <input className='input' type="text" name="email" id="" />
                            </div>

                            <div>
                                <p>Phone Number*</p>
                                <input className='input' type="number" name="phoneNumber" id="" />
                            </div>
                        </div>
                        <div className='flex'>
                            <div>
                                <p>Password*</p>
                                <input className='input' type="password" name="password" id="" />
                            </div>
                        </div>

                        <div className='flex right-side-note'>
                            <input type="checkbox" name="" id="" />
                            <p>By Signing up,you agree to our user Agreement, Terms of Service & privacy policy</p>
                        </div>

                        <button type="submit" className='signup-button'>Sign Up</button>
                    </form>
                    <p style={{ marginTop: '8px' }}>Already have an account? <Link className='text-blue-800' to="/login">Log In</Link> </p>
                </div>


            </div>
        </div>
    );
};

export default SignUp;