import React, { useCallback, useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import styles from './TodoCss';
import { AntDesign } from '@expo/vector-icons';

const TodoCard = ({ id, title, description, status, navigation, onDelete, onUpdate }) => {
  return (
    <TouchableOpacity style={styles.todoCard} onPress={() => {
      navigation.navigate('DetailTodo', {
        id, title, description, status
      })
    }} onLongPress={() => {
      onUpdate({
        id, status: !status
      });
    }}>
      <View>
        <Text style={styles.todoTitle}>{id}. {title}</Text>
        <Text style={styles.totoDescription}>{description}</Text>
      </View>
      <View>
        {!status ? <AntDesign name="clockcircle" size={24} color="orange" /> : <AntDesign name="checkcircle" size={24} color="green" />}
      </View>
    </TouchableOpacity>
  );
}

const Todo = ({ navigation, route }) => {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: 'Homeword',
      description: 'Finish',
      status: true
    },
    {
      id: 2,
      title: 'Go to school',
      description: 'Description',
      status: false
    }
  ]);
  const handleUpdate = useCallback((newValue) => {
    setTodoList(value => value.map((el) => {
      return {
        ...el, status: newValue.id === el.id ? newValue.status : el.status
      }
    }));
  });
  useEffect(() => {
    if (route.params?.title) {
      const { title, description, status } = route.params;
      setTodoList(value => [...value, {
        id: value.length + 1,
        title: title,
        description: description,
        status: status
      }]);
    }
  }, [route]);
  return (
    <ScrollView>
      <View>
        {todoList.map((el) => {
          return <TodoCard {...el} key={el.id} navigation={navigation} onUpdate={handleUpdate} />
        })}
      </View>
    </ScrollView>
  )
}

export default Todo
