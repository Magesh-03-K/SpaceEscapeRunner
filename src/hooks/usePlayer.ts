import { Dimensions } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import { GAME } from "../constants/Game";

const { height } = Dimensions.get("window");

export default function usePlayer() {

  const playerX = useSharedValue(0);

  const startX = useSharedValue(0);

  // Ship is fixed vertically for now
  const playerY = useSharedValue(
    height - GAME.SHIP_HEIGHT - 70
  );

  return {

    playerX,

    playerY,

    startX,

  };

}