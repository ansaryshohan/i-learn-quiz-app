import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const QuizPage = () => {
  const quizData = useLoaderData();
  const { data } = quizData;
  const { id, logo, name, questions, total } = data;
  // console.log(data);

  const [results, setResults] = useState(false)
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  // console.log(answers);
  const handleResult = (chooosenAnswer, correctAnswer) => {
    // console.log(chooosenAnswer,correctAnswer);
    if (chooosenAnswer === correctAnswer) {
      setScore(score + 1)
    }
  }

  return (
    <div>
      <h1 className='text-2xl font-medium text-center mb-6 mt-5'> Quiz for <span className='text-3xl font-semibold text-[#a5890c] underline'>{name}</span></h1>
      {
        results ?
         <>
          <div className='text-center mt-20 text-5xl font-bold mb-6'> Score: <span className='text-6xl text-[#04736a]'>{score}</span></div>
          <div className='flex justify-center'>
          <button className='border mb-52 px-5 py-2 text-xl font-medium rounded-xl bg-[#028090] text-[#EDF913] hover:bg-[#EDF913] hover:text-[#028090] hover:border-[#028090] hover:font-semibold ease-in transition'
              onClick={() => setResults(!results)}>Start Again</button>
          </div>
         </>
          :
          <div className=''>{
            questions.map(question => <Question
              key={question.id}
              questionData={question}
              number={questions.indexOf(question)}
              handleResult={handleResult}
            ></Question>)
          }
            
            <div className='flex justify-center'>
            <button className='border px-5 py-2 text-xl font-medium rounded-xl bg-[#028090] text-[#EDF913] hover:bg-[#EDF913] hover:text-[#028090] hover:border-[#028090] hover:font-semibold ease-in transition'
                onClick={() => setResults(!results)}>Result</button>
            </div>
          
          </div>
      }

    </div>
  );
};

export default QuizPage;