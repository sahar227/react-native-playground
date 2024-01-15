import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Counter } from "./src/components/Counter";
import { SimpleCalculator } from "./src/components/SimpleCalculator";
import { CountDown } from "./src/components/CountDown";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Open up App.tsx to start working on your app!!!
      </Text>
      <View style={styles.examplesContainer}>
        <Counter />
        <SimpleCalculator />
        <CountDown />
      </View>
      <StatusBar style="inverted" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  text: {
    color: "red",
  },
  examplesContainer: {
    gap: 20,
  },
});
