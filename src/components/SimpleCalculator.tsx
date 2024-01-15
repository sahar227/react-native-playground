import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export function SimpleCalculator() {
  const [firstInput, setFirstInput] = useState(0);
  const [secondInput, setSecondInput] = useState(0);
  const result = firstInput + secondInput;
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        maxLength={2}
        defaultValue={firstInput.toString()}
        onChangeText={(v) => setFirstInput(+v)}
      />
      <Text style={styles.text}>+</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        maxLength={2}
        defaultValue={secondInput.toString()}
        onChangeText={(v) => setSecondInput(+v)}
      />
      <Text style={styles.text}>=</Text>
      <Text style={styles.text}>{result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },

  input: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    textAlign: "center",
  },
  text: {
    color: "red",
  },
});
