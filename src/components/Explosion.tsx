import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useEffect } from "react";

export default function Explosion() {

  const scale = useSharedValue(0);

  const opacity = useSharedValue(1);

  useEffect(() => {

    scale.value = withTiming(4, {
      duration: 500,
    });

    opacity.value = withTiming(0, {
      duration: 500,
    });

  }, []);

  const style = useAnimatedStyle(() => ({

    transform: [
      {
        scale: scale.value,
      },
    ],

    opacity: opacity.value,

  }));

  return (

    <Animated.View
      style={[
        {
          position: "absolute",

          width: 60,

          height: 60,

          borderRadius: 30,

          backgroundColor: "#ff3300",
        },
        style,
      ]}
    />

  );

}