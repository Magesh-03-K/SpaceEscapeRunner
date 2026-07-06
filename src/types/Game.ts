export type Player = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type Asteroid = {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
};

export type GameState = {
  player: Player;
  asteroids: Asteroid[];
  score: number;
  highScore: number;
  gameOver: boolean;
};