import React from 'react';

const Option = ({ option,id,handleResult,correctAnswer }) => {
  // console.log(id);
  return (
    <div className='mb-2  border p-2 border-gray-200 
    shadow-sm rounded'>
      <label htmlFor="" className='flex gap-2 items-center'
      onClick={()=>handleResult(option, correctAnswer)}>
        <input type="radio"
         name={id}
          id=""
          />
        <h3>{option}.</h3>
      </label>
    </div>
  );
};

export default Option;