import { View, Text, StyleSheet } from "react-native";

type ScoreBoardProps = {
  score: number;
};

export default function ScoreBoard({
  score,
}: ScoreBoardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>SCORE</Text>
      <Text style={styles.score}>{score}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 70,
    alignSelf: "center",
    alignItems: "center",
  },

  label: {
    color: "#A0AEC0",
    fontSize: 14,
    letterSpacing: 2,
  },

  score: {
    color: "white",
    fontSize: 34,
    fontWeight: "bold",
    marginTop: 6,
  },
});