import React, { useCallback, useEffect, useState } from 'react'
import { Modal, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import Constants from "expo-constants"
import Player from './Components/Player/Player';
import { FontAwesome } from '@expo/vector-icons';

const rules = {
  rock: (value) => {
    return value === 'paper';
  },
  paper: (value) => {
    return value === 'scissors';
  },
  scissors: (value) => {
    return value === 'rock';
  },
};
const choices = ['rock', 'paper', 'scissors'];
const message = {
  win: {
    text: "Hooray!",
    color: 'green'
  },
  ties: {
    text: "I don't have time for this",
    color: 'orange'
  },
  lose: {
    text: "You're better than this",
    color: 'red'
  }
}

const Lesson3 = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [round, setRound] = useState(1);
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  useEffect(() => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setRound(1);
    setResult(null);
    setHistory([]);
  }, []);
  const handleToggleHistory = useCallback(() => setShowHistory(!showHistory), [showHistory]);
  const handleChoice = (value) => {
    const computer = choices[Math.floor(Math.random() * 3)];
    setComputerChoice(computer);
    setPlayerChoice(value);
    let currentResult = 'ties';
    if (computer === value) setResult('ties');
    else {
      const solo = rules[computer](value);
      setResult(solo ? 'win' : 'lose');
      currentResult = solo ? 'win' : 'lose';
    }
    setHistory([...history, currentResult]);
    setRound(value => value + 1);
  }
  return (
    <ScrollView>
      <View>
        <Modal animationType="slide" transparent={true} visible={showHistory} onRequestClose={handleToggleHistory}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={handleToggleHistory}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
        </Modal>
        <Text style={styles.round}>round {round}</Text>
        <View style={styles.report}>
          <View>
            <Text style={styles.reportTitle}>WIN</Text>
            <Text style={styles.reportNumber}>{history.filter((value) => {
              return value === 'win';
            }).length}</Text>
          </View>
          <View>
            <Text style={styles.reportTitle}>TIES</Text>
            <Text style={styles.reportNumber}>{history.filter((value) => {
              return value === 'ties';
            }).length}</Text>
          </View>
          <View>
            <Text style={styles.reportTitle}>LOSE</Text>
            <Text style={styles.reportNumber}>{history.filter((value) => {
              return value === 'lose';
            }).length}</Text>
          </View>
        </View>
        {result && (
          <View style={styles.result}>
            <Text style={[styles.resultText, {
              color: message[result].color
            }]}>{message[result].text}</Text>
          </View>
        )}
        <View style={styles.playerWrapper}>
          <Player type="player" selection={playerChoice} round={round} />
          <Player type="computer" selection={computerChoice} round={round} />
        </View>
        <View style={styles.report}>
          <TouchableOpacity style={styles.button} onPress={() => handleChoice('rock')}>
            <FontAwesome name="hand-rock-o" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleChoice('paper')}>
            <FontAwesome name="hand-paper-o" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleChoice('scissors')}>
            <FontAwesome name="hand-scissors-o" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.result}>
        <TouchableOpacity onPress={handleToggleHistory}>
          <Text>History</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default Lesson3

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    marginTop: Constants.statusBarHeight + 50,
    paddingHorizontal: 30,
  },
  result: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  resultText: {
    marginVertical: 20
  },
  round: {
    color: '#e62649',
    textTransform: "uppercase",
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 50,
    letterSpacing: 3,
    fontSize: 17
  },
  report: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    marginVertical: 30,
    marginHorizontal: 50
  },
  reportTitle: {
    color: '#9d9cb8',
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: 3,
    fontSize: 16
  },
  reportNumber: {
    color: '#000',
    fontWeight: "normal",
    textAlign: 'center',
    marginTop: 10,
    fontSize: 20
  },
  playerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20
  },
  button: {
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e62649',
    width: 60,
    height: 60,
    color: '#fff'
  },
  textWhite: {
    color: "#fff"
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
