import { StyleSheet } from "react-native";
import Animated, {
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

type AsteroidProps = {
  x: SharedValue<number>;
  y: SharedValue<number>;
  size: SharedValue<number>;
};

export default function Asteroid({
  x,
  y,
  size,
}: AsteroidProps) {

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: x.value },
      { translateY: y.value },
    ],
  }));

  const rockStyle = useAnimatedStyle(() => ({
    width: size.value,
    height: size.value,
    borderRadius: size.value / 2,
  }));

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <Animated.View
        style={[styles.rock, rockStyle]}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
  },

  rock: {
    backgroundColor: "#7A7A7A",
    borderWidth: 3,
    borderColor: "#BDBDBD",
  },
});