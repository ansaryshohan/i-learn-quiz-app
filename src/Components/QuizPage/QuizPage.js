import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizPage = () => {
  const quizData= useLoaderData();
  console.log(quizData)
  return (
    <div>
      the quiz page
    </div>
  );
};

export default QuizPage;