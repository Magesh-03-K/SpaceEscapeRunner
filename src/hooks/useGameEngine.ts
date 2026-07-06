import { Dimensions } from "react-native";
import { useState } from "react";

import usePlayer from "./usePlayer";
import useAsteroids from "./useAsteroid";
import useGameLoop from "./useGameLoop";
import { useRef } from "react";

//storing high score
import { getHighScore, saveHighScore } from "../utils/storage";
import { useEffect } from "react";

//collision detection
import { isColliding } from "../utils/collision";
import { GAME } from "../constants/Game";

export default function useGameEngine() {

    const { width } = Dimensions.get("window");


    const [gameOver, setGameOver] = useState(false);

    const [exploding, setExploding] = useState(false);

    const player = usePlayer();

    const asteroids = useAsteroids();

    

    const [score, setScore] = useState(0);

    const [highScore, setHighScore] = useState(0);

    const lastScoreUpdate = useRef(Date.now());

    useEffect(() => {

        async function loadScore() {

            const score = await getHighScore();

            setHighScore(score);

        }

        loadScore();

    }, []);

    useGameLoop(() => {

        if (gameOver) return;
        const now = Date.now();

        if (now - lastScoreUpdate.current >= 1000) {

            setScore((previous) => previous + 1);

            lastScoreUpdate.current = now;

        }


        

        asteroids.forEach((asteroid) => {

            asteroid.asteroidY.value += asteroid.speed.value;

            if (asteroid.asteroidY.value > 900) {

                asteroid.asteroidY.value = -100;

                asteroid.asteroidX.value =
                    Math.random() * (width - 80)
                    - (width / 2 - 40);

                asteroid.speed.value =
                    Math.random() * 4 + 3;

                asteroid.size.value =
                    Math.random() * 30 + 30;
            }

            const shipX =
                width / 2 -
                GAME.SHIP_WIDTH / 2 +
                player.playerX.value;

            const asteroidX = asteroid.asteroidX.value;

            const hit = isColliding(
                shipX,
                player.playerY.value,
                GAME.SHIP_WIDTH,
                GAME.SHIP_HEIGHT,
                asteroidX,
                asteroid.asteroidY.value,
                asteroid.size.value
            );

        
            if (hit) {
                console.log("💥 Collision!");

                if (score > highScore) {

                    setHighScore(score);

                    saveHighScore(score);

                }

                setGameOver(true);

            }
            if (hit && !exploding && !gameOver) {

                setExploding(true);

                setTimeout(() => {

                    setGameOver(true);

                    setExploding(false);

                }, 700);

            }

        });
        }, true);

    

    function restartGame() {

        setGameOver(false);
        setExploding(false);

        setScore(0);

        lastScoreUpdate.current = Date.now();

        player.playerX.value = 0;

        asteroids.forEach((asteroid, index) => {

            asteroid.asteroidY.value =
                -(250 * index + Math.random() * 150);

            asteroid.asteroidX.value =
                Math.random() * (width - 80)
                - (width / 2 - 40);

            asteroid.speed.value =
                Math.random() * 3 + 4;

            asteroid.size.value =
                Math.random() * 30 + 30;

        });

    }

    return {

        player,

        asteroids,

        score,

        highScore,

        exploding,

        gameOver,

        

        restartGame,
        

    };

    


}
