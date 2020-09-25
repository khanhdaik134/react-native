import React, { useEffect, useState } from 'react'
import { Animated, Easing, Image, StyleSheet, Text, View } from 'react-native'

const selectData = {
  rock: require("../../../assets/rock.png"),
  paper: require("../../../assets/paper.png"),
  scissors: require("../../../assets/scissors.png")
};

const Player = ({ selection, type, round }) => {
  const [playerSelection, setPlayerSelection] = useState(require("../../../assets/hand.png"));
  const [showAnimate, setShowAnimate] = useState(false);
  const [count, setCount] = useState(1);
  useEffect(() => {
    if (selection) {
      setShowAnimate(true);
      Animated.loop(
        Animated.timing(
          spinValue,
          {
            toValue: 1,
            duration: 500,
            easing: Easing.linear,
            useNativeDriver: true
          }
        )
        ,
        {
          iterations: 3
        }).start();

      spinValue.addListener(({ value }) => {
        if (value >= 1) {
          setShowAnimate(false);
        }
      })
    }
  }, [selection, count]);
  const spinValue = new Animated.Value(0);
  Animated.loop(
    Animated.timing(
      spinValue,
      {
        toValue: 1,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: true
      }
    )
    ,
    {
      iterations: 3
    }).start()

  // Second interpolate beginning and end values (in this case 0 and 1)
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['-22deg', '10deg']
  })
  useEffect(() => {
    console.log('player selection: ', playerSelection);
  }, [playerSelection]);
  useEffect(() => {
    setCount(round);
  }, [round]);
  return (
    <View style={styles.playerWrapper}>
      <View style={styles.choiceWrapper}>
        {showAnimate ? (
          <Animated.Image source={require("../../../assets/hand.png")} style={[styles.image, {
            marginLeft: type === 'computer' ? 20 : -20,
            marginRight: type === 'computer' ? -20 : 20,
            transform: [
              {
                scaleX: type === 'computer' ? -1 : 1,
                rotate: spin
              }
            ]
          }]} resizeMode="contain" />
        ) : (
            <Animated.Image source={selectData[selection] || require("../../../assets/hand.png")} style={[styles.image, {
              marginLeft: type === 'computer' ? 20 : -20,
              marginRight: type === 'computer' ? -20 : 20,
              transform: [
                {
                  scaleX: type === 'computer' ? -1 : 1,
                }
              ]
            }]} resizeMode="contain" />
          )}
      </View>
    </View>
  )
}

export default Player;

const styles = StyleSheet.create({
  playerWrapper: {
    borderColor: '#ebebeb',
    borderWidth: 1,
    width: '48%'
  },
  choiceWrapper: {
    marginVertical: 20,
    overflow: 'hidden'
  },
  image: {
    width: null,
    height: 150
  }
})
