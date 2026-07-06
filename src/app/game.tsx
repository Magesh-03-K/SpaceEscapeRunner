import { View, StyleSheet } from "react-native";

import Background from "../components/Background";
import ScoreBoard from "../components/ScoreBoard";
import SpaceShip from "../components/SpaceShip";
import StarField from "../components/StarField";
import useGameEngine from "../hooks/useGameEngine";
import { Text } from "react-native";
import GameButton from "../components/GameButton";



//Asteroid 

import Asteroid from "../components/Asteroid";


import {
  Gesture,
  GestureDetector,
} from "react-native-gesture-handler";



import { Dimensions } from "react-native";

import { clamp } from "react-native-reanimated";


export default function GameScreen() {
  const game = useGameEngine();




  const SHIP_LIMIT = Dimensions.get("window").width / 2 - 40;

  const panGesture = Gesture.Pan()
    .enabled(!game.gameOver)

    .onBegin(() => {
      "worklet";

      game.player.startX.value = game.player.playerX.value;
    })

    .onUpdate((event) => {
      "worklet";

      game.player.playerX.value = clamp(
        game.player.startX.value + event.translationX,
        -SHIP_LIMIT,
        SHIP_LIMIT
      );
    });
  
  

    

  return (
    <GestureDetector gesture={panGesture}>
    <View style={styles.container}>

      <Background />
      <StarField />

      <ScoreBoard score={game.score} />

      {
          game.gameOver && (

              <View style={styles.gameOverContainer}>

                  <Text style={styles.gameOverTitle}>
                      GAME OVER
                  </Text>

                  <Text style={styles.finalScore}>
                      Final Score : {game.score}
                  </Text>
                  <Text style={styles.highScore}>
                      High Score : {game.highScore}
                  </Text>

                  <View style={{ width: 220, marginTop: 25 }}>
                      <GameButton
                          title="PLAY AGAIN"
                          onPress={game.restartGame}
                      />
                  </View>

              </View>

          )
      }



      {
          game.asteroids.map((asteroid) => (

              <Asteroid
                  key={asteroid.id}
                  x={asteroid.asteroidX}
                  y={asteroid.asteroidY}
                  size={asteroid.size}

              />

          ))
      }
            
        <View style={styles.shipContainer}>
            <SpaceShip
                x={game.player.playerX}
               
            />
        </View>
      

    </View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
    shipContainer: {
      position: "absolute",
      bottom: 70,
      alignSelf: "center",
  },
  gameOverContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

    justifyContent: "center",
    alignItems: "center",

      backgroundColor: "rgba(0,0,0,0.65)",
  },

  gameOverTitle: {
      color: "#FF4D4D",
      fontSize: 42,
      fontWeight: "bold",
  },

  finalScore: {
      color: "white",
      fontSize: 22,
      marginTop: 20,
  },
  highScore: {
    color: "#FFD54F",
    fontSize: 22,
    marginTop: 10,
    fontWeight: "bold",
  },

  
});