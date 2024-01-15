import { useState } from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => {
          setCount((prev) => prev + 1);
        }}
      >
        <Text style={styles.buttonText}>{`I was clicked ${count} times!`}</Text>
      </Pressable>
      <Button
        title="Reset"
        onPress={() => {
          setCount(0);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  button: {
    backgroundColor: "red",
    height: "100%",
    borderRadius: 10,
    padding: 10,
    alignContent: "center",
  },
  buttonText: {
    color: "white",
  },
});
