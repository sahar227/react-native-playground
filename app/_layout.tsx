import { Slot, Stack } from "expo-router";
import { Text } from "react-native";
import { CustomSplash } from "../src/components/CustomSplash";
import { registerWidgetTaskHandler } from "react-native-android-widget";
import { widgetTaskHandler } from "../src/widgets/widget-task-handler";

registerWidgetTaskHandler(widgetTaskHandler);

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function loadApp() {
  await sleep(1000);
}

export default function Latout() {
  return (
    <CustomSplash loadApp={loadApp}>
      <Text className="pt-8">Main pages!</Text>
      <Stack />
      {/* <Slot /> */}
    </CustomSplash>
  );
}
