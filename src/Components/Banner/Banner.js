import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
  return (
    <div>
      <div className='background-image'>
        <div className='text-white flex flex-col items-center'>
          <h1 className='text-5xl font-bold'>i<span className='text-[#ceb33a]'>Learn</span></h1>
          <p className='text-2xl font-medium'>Quizes for learning things better</p>
          <p className='text-xl'>Prepare for the job interviews with <span className='text-[#ceb33a]'>iLearn</span></p>
          <Link to='/topics'>
            <button className='bg-[#ceb33a] mt-2 px-5 py-2 text-2xl font-semibold rounded-xl'>Get started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;