import {
  Camera,
  CameraCapturedPicture,
  CameraType,
  Constants,
} from "expo-camera";
import { useRef, useState } from "react";
import {
  Button,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function page() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const cameraRef = useRef<Camera>(null);
  const [cameraResult, setCameraResult] = useState<CameraCapturedPicture[]>([]);

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  async function onTakePicture() {
    const result = await cameraRef.current?.takePictureAsync();
    console.log(result);

    if (result) setCameraResult((prev) => [...prev, result]);
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
    <View style={{ flex: 1 }}>
      <Camera className="h-[400px] w-[400px]" type={type} ref={cameraRef}>
        <View>
          <TouchableOpacity onPress={toggleCameraType}>
            <Text>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </Camera>
      <Button title="Take Picture" onPress={onTakePicture} />
      <ScrollView
        contentContainerStyle={{
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {cameraResult.map((result) => (
          <Image
            key={result.uri}
            source={{
              uri: result.uri,
            }}
            width={200}
            height={200}
          />
        ))}
      </ScrollView>
      {/* <FlatList
        data={cameraResult}
        numColumns={4}
        
        contentContainerStyle={{ flexDirection: "row" }}
        renderItem={({ item }) => (
          <View>
            <Image
              source={{
                uri: item.uri,
              }}
              width={200}
              height={200}
            />
          </View>
        )}
      /> */}
    </View>
  );
}
