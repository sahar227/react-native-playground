import React from "react";
import { FlexWidget, TextWidget } from "react-native-android-widget";

interface HelloWidgetProps {
  clickCount: number;
}

export function HelloWidget(props: HelloWidgetProps) {
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
        text={`Hello, clicked ${props.clickCount} times!`}
        style={{
          fontSize: 32,
          fontFamily: "Inter",
          color: "#000000",
        }}
        clickAction="COUNT_CLICKS"
        clickActionData={{ clickCount: props.clickCount }}
      />
      <TextWidget
        text={`It was clicked ${props.clickCount} times!`}
        style={{
          fontSize: 32,
          fontFamily: "Inter",
          color: "#000000",
        }}
      />
    </FlexWidget>
  );
}
