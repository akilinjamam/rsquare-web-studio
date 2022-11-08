import React from 'react';
import './SignUp.css'

const SignUp = () => {
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
                    <form action="">
                        <div className='flex'>
                            <div>
                                <p>First Name*</p>
                                <input type="text" name="" id="" />
                            </div>

                            <div>
                                <p>Last Name*</p>
                                <input type="text" name="" id="" />
                            </div>
                        </div>

                        <div className='flex'>
                            <div>
                                <p>Email Address*</p>
                                <input type="text" name="" id="" />
                            </div>

                            <div>
                                <p>Phone Number*</p>
                                <input type="number" name="" id="" />
                            </div>
                        </div>
                        <div className='flex'>
                            <div>
                                <p>Password*</p>
                                <input type="password" name="" id="" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;