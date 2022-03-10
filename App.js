/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Pressable,
} from 'react-native';


import {Button} from './src/dumb/button/Button';
import {Quiz} from './src/smart/quiz/Quiz';
import {QuizStyle} from './src/smart/quiz/Quiz.style';
import {QuizView} from './src/smart/quiz/Quiz.view';

const App = () => {
  const styles = {
    divider: {
      marginVertical: 10,
    },
  };
  return (

    <Pressable>
       <Quiz/>
    </Pressable>
  );
};

export default App;