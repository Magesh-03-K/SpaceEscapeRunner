import { useSharedValue } from "react-native-reanimated";
import { GAME } from "../constants/Game";

export default function useAsteroids() {

  const asteroids = [];

  for (let i = 0; i < 3; i++) {

    asteroids.push({

      id: i,


      //3different asteroids
      asteroidX: useSharedValue(
        Math.random() * 250 - 125
      ),

      asteroidY: useSharedValue(
          -(250 * i + Math.random() * 150)
      ),

      speed: useSharedValue(
        Math.random() * 4 + 3
      ),

      size: useSharedValue(
        Math.random() * 30 + 30
      ),

    });

  }

  return asteroids;

}