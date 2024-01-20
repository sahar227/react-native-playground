import { SplashScreen } from "expo-router";
import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { Counter } from "./Counter";

// Instruct SplashScreen not to hide yet, we want to do this manually
SplashScreen.preventAutoHideAsync();

interface Props {
  children: React.ReactNode;
  loadApp?: () => Promise<void>;
}

export function CustomSplash(props: Props) {
  const [isAppReady, setIsAppReady] = React.useState(false);

  useEffect(() => {
    async function loadApp() {
      try {
        SplashScreen.hideAsync();
        await props.loadApp?.();
      } catch (e) {
        console.warn(e);
      } finally {
        setIsAppReady(true);
      }
    }

    loadApp();
  }, []);

  if (isAppReady) return props.children;

  return (
    <View className="items-center justify-center">
      <Text>Custom Splash!!!</Text>
      <Counter />
    </View>
  );
}
