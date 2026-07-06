import { Pressable, StyleSheet, Text } from "react-native";

type GameButtonProps = {
  title: string;
  onPress: () => void;
};

export default function GameButton({
  title,
  onPress,
}: GameButtonProps) {
  return (
    <Pressable
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.text}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: "#4CC9F0",
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: "center",
  },

  text: {
    color: "#050816",
    fontSize: 20,
    fontWeight: "bold",
  },
});