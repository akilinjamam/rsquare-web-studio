import React from 'react';
import './Home.css';
import theImage from './images/job-task-home-image.png'

const Home = () => {
    return (
        <div>
            <div className='flex justify-between w-5/6 mx-auto mt-7'>
                <h1 className='font-bold text-2xl'>Media Library</h1>
                <button className='bg'> <p>Upload New Image</p></button>
            </div>

            <div>
                <img src={theImage} alt="" />
            </div>
        </div>
    );
};

export default Home;