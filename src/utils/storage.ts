import AsyncStorage from "@react-native-async-storage/async-storage";

const HIGH_SCORE_KEY = "SPACE_ESCAPE_HIGH_SCORE";

export async function getHighScore() {
  try {
    const value = await AsyncStorage.getItem(HIGH_SCORE_KEY);

    return value ? Number(value) : 0;

  } catch {

    return 0;

  }
}

export async function saveHighScore(score: number) {

  try {

    await AsyncStorage.setItem(
      HIGH_SCORE_KEY,
      score.toString()
    );

  } catch {

    console.log("Failed to save High Score");

  }

}