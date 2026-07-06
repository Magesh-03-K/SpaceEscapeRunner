import { View, StyleSheet } from "react-native";

export default function Background() {
  return <View style={styles.background} />;
}

const styles = StyleSheet.create({
  background: {

    //...StyleSheet.absoluteFillObject

    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

    // Background color
    backgroundColor: "#050816",
  },
});