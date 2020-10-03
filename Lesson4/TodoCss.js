import { StyleSheet } from 'react-native'
export default StyleSheet.create({
  todoCard: {
    flexDirection: 'row',
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#fff',
    margin: 10,
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10
  },
  todoTitle: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 10,
    letterSpacing: 2
  },
  totoDescription: {
    fontSize: 15,
    fontWeight: "400",
    opacity: 0.6
  }
})