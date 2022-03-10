import {View, Text, Alert,onPress} from 'react-native';
import React from 'react';
import {QuizView} from './Quiz.view';

export function Quiz() {
  // mock
  const mockData = {
    question: 'What const is doing?',
    answers: [
      'Create variable',
      'define function',
      'Shot down computer',
      'And one more stupid idea',
    ],
    correctAnswer: 3,
  };

  const checkAnswer = index => {
    alert(mockData.answer[index]);
    console.log("I'm checking the answer", index);
  };

  return <QuizView data={mockData} press={checkAnswer} />;
}