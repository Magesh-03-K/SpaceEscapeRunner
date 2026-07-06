import { StyleSheet, View } from "react-native";
import { useEffect } from "react";

import Animated, {
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
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

   const rotation = useSharedValue(0);

    useEffect(() => {

        rotation.value = withRepeat(

            withTiming(360, {

                duration: 5000,

            }),

            -1,

            false

        );

    }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
        { translateX: x.value },
        { translateY: y.value },
        {
            rotate: `${rotation.value}deg`,
        },
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
          style={[
              styles.rock,
              rockStyle,
          ]}
      >

          <View style={styles.craterSmall} />

          <View style={styles.craterLarge} />

          <View style={styles.craterTiny} />

      </Animated.View>
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

  craterSmall: {

    position: "absolute",

    width: 8,

    height: 8,

    borderRadius: 4,

    backgroundColor: "#555",

    left: 8,

    top: 8,

  },

  craterLarge: {

      position: "absolute",

      width: 12,

      height: 12,

      borderRadius: 6,

      backgroundColor: "#5E5E5E",

      right: 10,

      bottom: 12,

  },

  craterTiny: {

      position: "absolute",

      width: 5,

      height: 5,

      borderRadius: 3,

      backgroundColor: "#4A4A4A",

      left: 20,

      bottom: 8,

  },
});