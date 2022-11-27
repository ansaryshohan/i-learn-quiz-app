import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import SingleTopic from '../SingleTopic/SingleTopic';

const Topics = () => {
  const loadedDatas= useLoaderData();
 const {data}=loadedDatas;
//  console.log(data);

  return (
    <div className='w-10/12 mx-auto mt-32'>
       <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto '>
       {
          data.map(topic=> <SingleTopic
          key={topic.id}
          topic={topic}
          ></SingleTopic>)
        }
       </div>
    </div>
  );
};

export default Topics;