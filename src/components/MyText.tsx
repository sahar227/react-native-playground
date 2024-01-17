import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";

interface Props {
  textStyle?: StyleProp<TextStyle>;
}
export function MyText(props: Props) {
  return <Text style={[styles.text, props.textStyle]}>My Text</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: "red",
  },
});
