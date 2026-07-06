import { useEffect } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

type StarProps = {
  x: number;
  startY: number;
  size: number;
  opacity: number;
  duration: number;
  paused: boolean;
};

export default function Star({
  x,
  startY,
  size,
  opacity,
  duration,
  paused,
}: StarProps) {

  const y = useSharedValue(startY);

  useEffect(() => {

    if (paused) return;

    y.value = withRepeat(
        withTiming(startY + 900, {
        duration,
        }),
        -1,
        false
    );

    }, [paused]);

  const animatedStyle = useAnimatedStyle(() => ({
    position: "absolute",
    left: x,
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor: "white",
    opacity,

    transform: [
      {
        translateY: y.value,
      },
    ],
  }));

  return <Animated.View style={animatedStyle} />;
}