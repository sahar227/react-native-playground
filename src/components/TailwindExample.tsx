import { useState } from "react";
import { Pressable, Text, View } from "react-native";

export default function TailwindExample() {
  const [count, setCount] = useState(0);
  return (
    <View className="p-4 bg-slate-500">
      <Text className="text-center text-white">Hello World - {count}</Text>
      <Pressable
        className="items-center justify-center p-2 mt-2 rounded-xl bg-slate-400"
        onPress={() => setCount((count) => count + 1)}
      >
        <Text className="text-white">Press Me</Text>
      </Pressable>
    </View>
  );
}
