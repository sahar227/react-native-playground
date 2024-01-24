import { Link } from "expo-router";
import App from "../App";
import { View } from "react-native";
import { Auth } from "../src/components/Auth";

export default function Page() {
  return (
    <>
      <View className="flex flex-row justify-center">
        {/* <Link className="p-10 text-red-500 bg-slate-200" href="/calculator">
          Calculator
        </Link>
        <Link className="p-10 text-red-500 bg-slate-200" href="/message/aaa">
          Your Message
        </Link>
        <Link className="p-10 text-red-500 bg-slate-200" href="/message/">
          My Message
        </Link> */}
        <Link className="p-10 text-red-500 bg-slate-200" href="/camera">
          Camera
        </Link>

        <Link className="p-10 text-red-500 bg-slate-200" href="/widgets">
          Widgets Preview
        </Link>
      </View>
      <Auth />
      <App />
    </>
  );
}
