import React, { useState } from 'react';
import { LockClosedIcon} from '@heroicons/react/24/solid'
import Option from '../Option/Option';


const Question = ( {questionData, number,handleResult }) => {

  const { id,correctAnswer, options,question } = questionData;
  const [showResult, setShowResult]= useState(false)
  

  return (
    <div className='mt-5 mb-10 px-5 py-4 border border-gray-200 rounded-xl shadow-xl w-11/12 md:w-4/6 mx-auto relative'
    >
      <h2 className='text-center text-xl font-medium text-[#028090] mt-6'>Quiz {number + 1}: {question}</h2>

     <div className=' p-4 mt-4 md:grid grid-cols-2 gap-5'>
     {
        options.map(option=> 
         <Option
         key={option}
         option={option}
         id={id}
         handleResult={handleResult}
         correctAnswer={correctAnswer}
         ></Option>
         )
        }
     </div>
    
        {
         showResult && <div className='text-lg font-medium'> Correct answer: <span className='text-xl text-[#028090]'>{correctAnswer}</span></div>
        }
  
        <button className='absolute top-0 right-0 md:top-2 md:right-2 p-3 rounded-full bg-[#EDF913] hover:bg-[#DAE506]'
        onClick={()=>setShowResult(!showResult)}>
          <LockClosedIcon className='h-6 w-6 text-[#028090]'/>
          </button>
    </div> 
  );
};

export default Question;