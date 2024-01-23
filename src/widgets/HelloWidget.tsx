import React from "react";
import { FlexWidget, TextWidget } from "react-native-android-widget";

interface HelloWidgetProps {
  clickCount: number;
  storedValue: string | null;
}

export function HelloWidget({
  clickCount,
  storedValue = null,
}: HelloWidgetProps) {
  return (
    <FlexWidget
      style={{
        height: "match_parent",
        width: "match_parent",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
        borderRadius: 16,
      }}
    >
      <TextWidget
        text={`Hello, clicked ${clickCount} times!`}
        style={{
          fontSize: 32,
          fontFamily: "Inter",
          color: "#000000",
        }}
        clickAction="COUNT_CLICKS"
        clickActionData={{ clickCount: clickCount }}
      />
      <TextWidget
        text={`stored ${storedValue ?? "NAN"}`}
        style={{
          fontSize: 32,
          fontFamily: "Inter",
          color: "#000000",
        }}
      />
      <TextWidget
        text={`Refresh`}
        style={{
          fontSize: 12,
          fontFamily: "Inter",
          color: "#000000",
        }}
        clickAction="WIDGET_REFRESH"
        clickActionData={{ clickCount: clickCount }}
      />
    </FlexWidget>
  );
}
