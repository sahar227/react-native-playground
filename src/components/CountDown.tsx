import { useEffect, useRef, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const useCountdown = (initialValue: number) => {
  const [count, setCount] = useState(initialValue);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  function createInterval() {
    return setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);
  }
  useEffect(() => {
    intervalRef.current = createInterval();

    return () => clearInterval(intervalRef.current!);
  }, []);

  useEffect(() => {
    if (count === 0) {
      clearInterval(intervalRef.current!);
    }
  }, [count]);

  function resetCount() {
    setCount(initialValue);
    clearInterval(intervalRef.current!);
    intervalRef.current = createInterval();
  }

  return { count, resetCount };
};

export function CountDown() {
  const { count, resetCount } = useCountdown(5);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count}</Text>
      <Button title="Reset" onPress={resetCount} />
      {count === 0 && <Text style={styles.text}>Time's up!</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    gap: 20,
  },
  text: {
    color: "red",
  },
});
