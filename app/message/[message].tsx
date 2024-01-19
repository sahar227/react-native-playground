import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function Page() {
  const { message } = useLocalSearchParams();
  if (typeof message === "object") return <Text>Message</Text>;
  return (
    <View>
      <Text className="text-red-600">Hello there {message}</Text>
    </View>
  );
}
