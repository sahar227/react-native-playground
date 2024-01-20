import { useEffect } from "react";
import { Text } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from "react-native-reanimated";

export function AnimatedBox() {
  const width = useSharedValue(100);
  const rotateZ = useSharedValue(360);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ rotateZ: `${rotateZ.value}deg` }],
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      width.value = withSpring(width.value + 50);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    rotateZ.value = withRepeat(
      withTiming(-rotateZ.value, { duration: 1000 }),
      -1,
      true
    );
  }, []);

  return (
    <Animated.View
      style={[
        {
          width,
          height: 100,
          backgroundColor: "red",
        },
        animatedStyles,
      ]}
    >
      <Text className="text-white">Animated Box!!!</Text>
    </Animated.View>
  );
}
