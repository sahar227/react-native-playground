import { View } from "react-native";
import { WidgetPreview } from "react-native-android-widget";
import { HelloWidget } from "../src/widgets/HelloWidget";

export default function page() {
  return (
    <View className="items-center justify-center flex-1">
      <WidgetPreview
        renderWidget={() => <HelloWidget />}
        height={200}
        width={320}
      />
    </View>
  );
}
