import { Slot } from "expo-router";
import { Text } from "react-native";

export default function Latout() {
  return (
    <>
      <Text className="pt-8">Main pages!</Text>
      <Slot />
    </>
  );
}
