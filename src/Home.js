import React from 'react';
import './Home.css';
import theImage from './images/job-task-home-image.png'

const Home = () => {
    return (
        <div className='w-5/6 mx-auto'>
            <div className='flex justify-between div-1'>
                <h1 className='font-bold text-2xl'>Media Library</h1>
                <button className='bg'> <p>Upload New Image</p></button>
            </div>

            <div className='img-width'>
                <img className='mx-auto' src={theImage} alt="" />
            </div>

            <p className='last-font'>Click on 'Upload' to start adding images</p>
        </div>
    );
};

export default Home;