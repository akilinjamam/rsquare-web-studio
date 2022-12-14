import React from 'react';
import './Home.css';
import theImage from './images/job-task-home-image.png'
import addIcon from './images/add-icon.png'

const Home = () => {
    return (
        <div className='w-5/6 mx-auto'>
            <div className='flex justify-between div-1'>
                <div>
                    <h1 className='font-bold text-2xl'>Media Library</h1>
                    <p style={{ textAlign: 'left', fontSize: '14px', opacity: '0.5' }} >images</p>
                </div>
                <div className='flex items-center bg'>
                    <img className='icon' src={addIcon} alt="" />
                    <button > <p>Upload New Image</p></button>
                </div>
            </div>

            <div className='img-width'>
                <h1 className='text-red-600'>I can do this task completely but some very personal problem i couldn,t finish the rest task within given time. if you consider me one day more, i can complete the rest.</h1>
                <img className='mx-auto' src={theImage} alt="" />
            </div>

            <p className='last-font'>Click on 'Upload' to start adding images</p>
        </div>
    );
};

export default Home;