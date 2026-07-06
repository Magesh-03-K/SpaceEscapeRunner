//import { View, StyleSheet, Dimensions } from "react-native";
import { Dimensions } from "react-native";
import Star from "./Star";
const { width, height } = Dimensions.get("window");

const stars = Array.from({ length: 70 }, (_, index) => ({
    id: index,
    x: Math.random() * width,

    y: Math.random() * height,

    size: Math.random() * 3 + 1,

    opacity: Math.random() * 0.8 + 0.2,

    duration: Math.random() * 6000 + 4000,
}));

export default function StarField() {
    return (
        <>
            {stars.map((star) => (

                <Star
                    key={star.id}
                    x={star.x}
                    startY={star.y}
                    size={star.size}
                    opacity={star.opacity}
                    duration={star.duration}
                />

            ))}
        </>
    );
};