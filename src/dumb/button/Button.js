import {Text, TouchableOpacity, pressed} from 'react-native';
import React from 'react';

const style = {
  container: {
    paddingHorizontal: 20, //size "large", by default "regular". if "large" vertical: 25, horizontal 30
    paddingVertical: 20,
    backgroundColor: pressed ? 'green' : 'red', //color
    borderRadius: 20,
  },
  buttonPress: {
      paddingHorizontal: 20, //size "large", by default "regular". if "large" vertical: 25, horizontal 30
      paddingVertical: 20,
      backgroundColor: 'green', //color
      borderRadius: 20,
  },

  title: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },

};

// xxs, v5, h2
//xs v8, h 4
// sm v10, h7,
// sm, md, lg, xxl

export const Button = ({title, color, size}) => {
  return (
    <TouchableOpacity style={style.container}>
      <Text style={style.title}>{title}</Text>
    </TouchableOpacity>
  );
};