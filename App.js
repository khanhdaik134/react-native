import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from "expo-constants"
import FirstAssignment from './FirstAssignment';
import Lesson3 from './Lesson3/Lesson3';
import Lesson4 from './Lesson4/Lesson4';

export default function App() {
  return (
    <Lesson4 />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item1: {
    backgroundColor: "blue", 
    width: 80, 
    height: 80
  },
  item2: {
    backgroundColor: "red", 
    width: 80, 
    height: 80
  },
  item3: {
    backgroundColor: "green", 
    width: 80, 
    height: 80
  }
});
