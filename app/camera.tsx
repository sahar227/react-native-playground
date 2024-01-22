import { Camera, CameraType } from "expo-camera";
import { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function page() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  if (!permission) {
    return (
      <View>
        <Button title="grant camera permission" onPress={requestPermission} />
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View>
        <Text>Camera permission not granted.</Text>
        <Button title="grant camera permission" onPress={requestPermission} />
      </View>
    );
  }

  return (
    <View>
      <Camera className="h-[400px] w-[400px]" type={type}>
        <View>
          <TouchableOpacity onPress={toggleCameraType}>
            <Text>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}
