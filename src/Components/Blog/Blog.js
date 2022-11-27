import React from 'react';

const Blog = () => {
  return (
    <div>
      <div className='w-4/5 mx-auto pl-10 py-8 border  mt-10  shadow-xl mb-5 rounded-xl'>
        <h1 className='text-xl font-medium text-[#028090] mb-3'>Q. What is the purpose of react router?</h1>
        <p className='text-lg font-normal pl-4'>React Router is a JavaScript framework that lets us handle client and server-side routing in React applications. <br /> It enables the creation of single-page web or mobile apps that allow navigating without refreshing the page. <br /> It also allows us to use browser history features while preserving the right application view.</p>
      </div>
      <div className='w-4/5 mx-auto pl-10 pr-5 py-8 border shadow-xl mb-5 rounded-xl'>
        <h1 className='text-xl font-medium text-[#028090] mb-3'>Q. How does context API works?</h1>
        <p className='text-lg font-normal pl-4'>Context API is  the alternative of "prop drilling" or moving props from grandparent to child to parent, and so on. The React Context API is a way for a React app to effectively produce global variables that can be passed around. <br />
         <span className='pl-4'> 1. First we have to create a context by using createContext hook.</span> <br />
        <span className='pl-4'>2. Then we have to wrap the app.js source render with contextName.Provider and pass a value with it.</span> <br />
        <span className='pl-4'>3. Then we can use useContext hook to use the value provided by the context passed.</span></p>
      </div>
      <div className='w-4/5 mx-auto pl-10 pr-5 py-8 border shadow-xl mb-5 rounded-xl'>
        <h1 className='text-xl font-medium text-[#028090] mb-3'>Q. What is the purpose of useRef hook?</h1>
        <p className='text-lg font-normal pl-4'>The useRef Hook allows us to persist values between renders.
          It can be used to store a mutable value that does not cause a re-render when updated.
          It can be used to access a DOM element directly. <br />
         <span className='pl-4'> 1. useState hook re-renders several time which is a problem. to avoid the problem we use useRef hook. useRef hook returns only one item. It returns a object which is called current.</span> <br /> 
         <span className='pl-4'> 2. The useRef Hook can also be used to keep track of previous state values.This is because we are able to persist useRef values between renders.</span></p>
      </div>
    </div>
  );
};

export default Blog