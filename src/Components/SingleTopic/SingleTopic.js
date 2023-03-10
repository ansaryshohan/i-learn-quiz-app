import React from 'react';
import { Link } from 'react-router-dom';
import './SingleTopic.css'

const SingleTopic = ({ topic }) => {
  const {id, name, logo,total } = topic;
  // console.log(topic)
  return (
    <div className='p-6 rounded shadow-xl single-container text-[#F0F3BD]'>
      <div className="img-container">
        <img src={logo} alt="" className='w-11/12 h-64 shadow-lg mx-auto bg-[#026F7D]' />
      </div>

      <div className="flex justify-between items-center mt-8 w-11/12 mx-auto">
        <p className='text-2xl font-semibold shadow-transparent'>{name} <br /> <span className='text-lg underline'>Questions: {total}</span></p>
        <div>
          <Link to={`/topic/${id}`}>
          <button className="topic-btn inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide transition duration-200 rounded shadow-md bg-teal-accent-400 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none"
        >
          Get Now
        </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleTopic;