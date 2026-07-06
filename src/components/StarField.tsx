import { View, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const stars = Array.from({ length: 60 }, (_, index) => ({
    id: index,
    x: Math.random() * width,
    y: Math.random() * height,
    size: Math.random() * 3 + 1,
    opacity: Math.random() * 0.8 + 0.2,
}));

export default function StarField() {
    return (
        <>
            {stars.map((star) => (
                <View
                    key={star.id}
                    style={[
                        styles.star,
                        {
                            left: star.x,
                            top: star.y,
                            width: star.size,
                            height: star.size,
                            opacity: star.opacity,
                        },
                    ]}
                />
            ))}
        </>
    );
}

const styles = StyleSheet.create({
    star: {
        position: "absolute",
        backgroundColor: "white",
        borderRadius: 10,
    },
});