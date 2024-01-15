import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Counter } from "./src/components/Counter";
import { SimpleCalculator } from "./src/components/SimpleCalculator";
import { CountDown } from "./src/components/CountDown";
import { Posts } from "./src/components/Posts";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <View style={styles.container}>
        <Text style={styles.text}>
          Open up App.tsx to start working on your app!!!
        </Text>
        <View style={styles.examplesContainer}>
          <Counter />
          <SimpleCalculator />
          <CountDown />
          <Posts />
        </View>
        <StatusBar style="inverted" />
      </View>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    paddingTop: 100,
  },
  text: {
    color: "red",
  },
  examplesContainer: {
    gap: 20,
  },
});
