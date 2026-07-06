export function isColliding(
  shipX: number,
  shipY: number,
  shipWidth: number,
  shipHeight: number,

  asteroidX: number,
  asteroidY: number,
  asteroidSize: number
) {

  return (
    shipX <
      asteroidX + asteroidSize &&

    shipX + shipWidth >
      asteroidX &&

    shipY <
      asteroidY + asteroidSize &&

    shipY + shipHeight >
      asteroidY
  );

}