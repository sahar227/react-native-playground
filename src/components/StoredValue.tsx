import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Button } from "react-native";

const key = "storedValue";

async function getStoredValue() {
  const value = await AsyncStorage.getItem(key);
  return value;
}
export default function StoredValue() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    getStoredValue().then((value) => {
      if (value) {
        setValue(Number(value));
      }
    });
  }, []);

  async function increment() {
    setValue((prev) => prev + 1);
    await AsyncStorage.setItem(key, value.toString());
  }
  return <Button title={`StoredValue -  ${value}`} onPress={increment} />;
}
