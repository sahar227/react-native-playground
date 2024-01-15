import { Image, View } from "react-native";

const size = 500;
export function MyImage() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        style={{ width: size, height: size }}
        source={require("../../assets/splash.png")}
      />
      <Image
        source={{
          uri: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWl0ZmNoNHNvdWlwN3poeTY0bmpkbjhnOTB6dnFmbnNhOGN2a2lscSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2A75RyXVzzSI2bx4Gj/giphy.gif",
          width: 100,
          height: 100,
        }}
      />
    </View>
  );
}
