import { View, StyleSheet } from "react-native";
import Animated, { useAnimatedStyle, SharedValue } from "react-native-reanimated";

type SpaceShipProps = {
    x: SharedValue<number>;
    
};

export default function SpaceShip({
  x,
  
}: SpaceShipProps) {

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: x.value,
        },
        
      ],
    };
  });

  return (
    <Animated.View style={animatedStyle}>
      <View style={styles.container}>

          {/* Cockpit */}
          <View style={styles.cockpit} />

          {/* Nose */}
          <View style={styles.nose} />

          {/* Main Body */}
          <View style={styles.body}>

              {/* Wings */}

              <View style={styles.leftWing} />

              <View style={styles.rightWing} />

          </View>

          {/* Engine */}

          <View style={styles.engineRow}>

              <View style={styles.flame} />

              <View style={styles.flame} />

          </View>

      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({

  container: {
    alignItems: "center",
  },

  cockpit: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#AEEBFF",
    marginBottom: 2,
  },

  nose: {
      width: 10,
      height: 16,
      backgroundColor: "#59D8FF",
      borderTopLeftRadius: 6,
      borderTopRightRadius: 6,
  },

  body: {
      width: 30,
      height: 24,
      backgroundColor: "#29B6F6",
      justifyContent: "center",
      alignItems: "center",
  },

  leftWing: {
      position: "absolute",
      left: -14,
      width: 16,
      height: 10,
      backgroundColor: "#3AAFEA",
      borderTopLeftRadius: 8,
      borderBottomLeftRadius: 8,
  },

  rightWing: {
      position: "absolute",
      right: -14,
      width: 16,
      height: 10,
      backgroundColor: "#3AAFEA",
      borderTopRightRadius: 8,
      borderBottomRightRadius: 8,
  },

  engineRow: {
      flexDirection: "row",
      marginTop: 2,
  },

  flame: {
      width: 6,
      height: 12,
      backgroundColor: "#FF9800",
      marginHorizontal: 3,
      borderBottomLeftRadius: 6,
      borderBottomRightRadius: 6,
  },

});