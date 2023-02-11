import {
  Text,
  StyleSheet,
  FlatList,
  View,
  Linking,
  Button,
  Alert,
  Share,
} from "react-native";
import dataJSON from "../data.json";
import { useCallback } from "react";
import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from "expo-file-system";

const supportedURL = "https://docs.expo.dev/versions/latest/sdk/notifications/";
const shareDocument = async () => {
  try {
    await Share.share({
      url: "file.docx",
    });
  } catch (error) {
    console.error(error);
  }
};

const saveDocument = async () => {
  try {
    const result = await DocumentPicker.getDocumentAsync({});

    if (result.type === "success") {
      const fileUri = result.uri;
      const fileName = result.name;
      const newPath = `${FileSystem.documentDirectory}/${fileName}`;

      await FileSystem.copyAsync({ from: fileUri, to: newPath });
      console.log(`File saved at: ${newPath}`);
    }
  } catch (error) {
    console.error(error);
  }
};

const data = dataJSON.data;
const Item = ({ year, car, model, color }) => (
  <View style={styles.item}>
    <Text>{year}</Text>
    <Text>{car}</Text>
    <Text>{model}</Text>
    <Text>{color}</Text>
    <OpenURLButton url={supportedURL}>URL</OpenURLButton>
    <Button title="From system in app" onPress={saveDocument} />
    <Button title="From app in system" onPress={shareDocument} />
  </View>
);
const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};

export const Home = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Item
            car={item.car}
            year={item.year}
            color={item.color}
            model={item.model}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  item: {
    width: 360,
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 8,
    padding: 20,
    marginVertical: 8,
  },
});
