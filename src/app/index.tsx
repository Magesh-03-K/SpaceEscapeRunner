import { View, Text, StyleSheet } from "react-native";
import GameButton from "../components/GameButton";
import { router } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>SPACE</Text>
        <Text style={styles.title}>ESCAPE</Text>
        <Text style={styles.title}>RUNNER</Text>
      </View>

      <View style={styles.scoreCard}>
        <Text style={styles.scoreTitle}>HIGH SCORE</Text>
        <Text style={styles.score}>0</Text>
      </View>

      <GameButton
        title="START GAME"
        onPress={() => router.push("/game")}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#050816",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },

  titleContainer: {
    alignItems: "center",
    marginBottom: 60,
  },

  title: {
    color: "white",
    fontSize: 42,
    fontWeight: "900",
    letterSpacing: 2,
  },

  scoreCard: {
    width: "100%",
    backgroundColor: "#151A2D",
    borderRadius: 20,
    paddingVertical: 20,
    alignItems: "center",
    marginBottom: 50,
  },

  scoreTitle: {
    color: "#8B95B7",
    fontSize: 16,
    marginBottom: 8,
  },

  score: {
    color: "#4CC9F0",
    fontSize: 40,
    fontWeight: "bold",
  },

  

});