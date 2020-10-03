import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Switch, TextInput, TouchableOpacity } from 'react-native-gesture-handler'

const AddTodo = ({ navigation }) => {
  const [titleValue, setTitleValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');
  const [status, setStatus] = useState(false);
  const toggleStatus = () => setStatus(value => !value);
  return (
    <View style={styles.container}>
      <Text>Title *</Text>
      <TextInput
        value={titleValue}
        onChangeText={setTitleValue}
        style={styles.input}
      />
      <Text>Description</Text>
      <TextInput
        value={descriptionValue}
        onChangeText={setDescriptionValue}
        style={[styles.input, {
          height: 100
        }]}
        multiline={true}
        numberOfLines={4}
      />
      <Text style={{marginVertical: 10}}>Status</Text>
      <Switch
        trackColor={{ false: "#f5f5f5", true: "green" }}
        thumbColor="#fff"
        ios_backgroundColor="#f5f5f5"
        onValueChange={toggleStatus}
        value={status}
      />
      <TouchableOpacity style={[styles.button, {
        backgroundColor: titleValue ? '#73dff1' : '#ccc'
      }]} onPress={() => {
        navigation.navigate('Todo', {
          title: titleValue,
          description: descriptionValue,
          status
        })
      }} disabled={titleValue.length <= 0}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AddTodo

const styles = StyleSheet.create({
  container:{
    padding: 10,
    backgroundColor: '#fff',
    height: '100%'
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    marginVertical: 10,
    padding: 10,
    borderRadius: 5
  },
  button: {
    textAlign: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginVertical: 20,
    backgroundColor: '#ccc',
    padding: 15,
    borderRadius: 5
  }
})
