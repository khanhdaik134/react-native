import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from './Lesson4StyleSheet';
import Complete from './Complete';
import All from './All';
import Active from './Active';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createBottomTabNavigator();

const tabs = [
  {
    name: "Complete",
    component: Complete,
    options: {
      tabBarLabel: 'Complete',
      tabBarIcon: ({ color, size, focused }) => (
        <MaterialIcons name="done" size={24} color={focused ? "red" : "grey"} />
      ),
    }
  },
  {
    name: "All",
    component: All,
    options: {
      tabBarLabel: 'All',
      tabBarIcon: ({ color, size, focused }) => (
        <MaterialIcons name="playlist-add" size={24} color={focused ? "red" : "grey"} />
      ),
    }
  },
  {
    name: "Active",
    component: Active,
    options: {
      tabBarLabel: 'Active',
      tabBarIcon: ({ color, size, focused }) => (
        <MaterialIcons name="notifications-active" size={24} color={focused ? "red" : "grey"} />
      ),
    }
  }
]

const Lesson4 = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="All" tabBarOptions={{
        activeTintColor: "red",
        inactiveTintColor: "grey"
      }}>
        {tabs.map((el) => {
          return <Tab.Screen name={el.name} component={el.component} options={el.options} key={`tab-${el.name}`} />
        })}
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Lesson4

