import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import styles from './Lesson4StyleSheet';
import { createStackNavigator } from '@react-navigation/stack';
import Todo from './Todo';
import DetailTodo from './DetailTodo';
import { AntDesign } from '@expo/vector-icons';
import AddTodo from './AddTodo';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

const All = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Todo" component={Todo} options={{
        headerRight: () => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate("AddTodo")}>
              <AntDesign name="plus" size={24} color="black" />
            </TouchableOpacity>
          )
        },
        headerRightContainerStyle: {
          padding: 12
        }
      }} />
      <Stack.Screen name="DetailTodo" component={DetailTodo} />
      <Stack.Screen name="AddTodo" component={AddTodo} />
    </Stack.Navigator>
  )
}

export default All
