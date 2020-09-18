import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from "expo-constants"
import FirstAssignment from './FirstAssignment';

export default function App() {
  return (
    <FirstAssignment />
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
