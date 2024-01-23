import React from "react";
import type { WidgetTaskHandlerProps } from "react-native-android-widget";
import { HelloWidget } from "./HelloWidget";
import AsyncStorage from "@react-native-async-storage/async-storage";

const nameToWidget = {
  // Hello will be the **name** with which we will reference our widget.
  Hello: HelloWidget,
};

export async function widgetTaskHandler(props: WidgetTaskHandlerProps) {
  const widgetInfo = props.widgetInfo;
  const Widget =
    nameToWidget[widgetInfo.widgetName as keyof typeof nameToWidget];

  switch (props.widgetAction) {
    case "WIDGET_ADDED":
      const value = await AsyncStorage.getItem("storedValue");
      props.renderWidget(<Widget clickCount={0} storedValue={value} />);
      break;

    case "WIDGET_UPDATE":
      // Not needed for now
      break;

    case "WIDGET_RESIZED":
      // Not needed for now
      break;

    case "WIDGET_DELETED":
      // Not needed for now
      break;

    case "WIDGET_CLICK":
      if (props.clickAction === "COUNT_CLICKS") {
        const clickCount = (props?.clickActionData?.clickCount as number) ?? 0;
        const value = await AsyncStorage.getItem("storedValue");

        props.renderWidget(
          <Widget clickCount={clickCount + 1} storedValue={value} />
        );
      }
      if (props.clickAction === "WIDGET_REFRESH") {
        const clickCount = (props?.clickActionData?.clickCount as number) ?? 0;
        const value = await AsyncStorage.getItem("storedValue");
        props.renderWidget(
          <Widget clickCount={clickCount} storedValue={value} />
        );
      }
      break;

    default:
      break;
  }
}
