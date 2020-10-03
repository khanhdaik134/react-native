import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AntDesign } from '@expo/vector-icons';

const DetailTodo = ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{route.params.id}. {route.params.title}</Text>
        <Text style={styles.description}>{route.params?.description}</Text>
      </View>
      <View>
        {!route?.status ? <AntDesign name="clockcircle" size={24} color="orange" /> : <AntDesign name="checkcircle" size={24} color="green" />}
      </View>
    </View>
  )
}

export default DetailTodo

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
    flexDirection: 'row',
    justifyContent: "space-between",
    height: '100%'
  },
  title: {
    fontWeight: "500",
    fontSize: 20,
    marginBottom: 20
  },
  description: {
    fontSize: 16,
    fontWeight: "400",
    opacity: 0.6
  }
})
