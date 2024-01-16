import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Button, Text } from "react-native";
import { RESET, atomWithStorage, createJSONStorage } from "jotai/utils";
import { useAtom } from "jotai";

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

const storage = createJSONStorage<number>(() => AsyncStorage);
const jotaiKey = "jotaiStoredValue3";

const valueAtom = atomWithStorage(jotaiKey, 0, storage);

export function StoredValueWithJotai() {
  const [value, setValue] = useAtom(valueAtom);

  function increment() {
    setValue(async (prev) => (await prev) + 1);
  }
  return <Button title={`StoredValue Jotai -  ${value}`} onPress={increment} />;
}
