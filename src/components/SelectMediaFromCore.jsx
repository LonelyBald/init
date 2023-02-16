import React, { useState, useEffect } from "react";
import {
  Button,
  Image,
  View,
  FlatList,
  Linking,
  TouchableOpacity,
} from "react-native";
import * as DocumentPicker from "expo-document-picker";
import * as ImagePicker from "expo-image-picker";
import * as Sharing from "expo-sharing";
import * as MediaLibrary from "expo-media-library";

export const SelectMediaFromCore = () => {
  const [images, setImages] = useState([]);
  const [documents, setDocuments] = useState([]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImages([...images, result.uri]);
      handleMediaPress(result.uri);
    }
  };

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});

    if (result.type === "success") {
      setDocuments([...documents, result.uri]);
      handleMediaPress(result.uri);
    }
  };

  const handleMediaPress = async (uri) => {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status === "granted") {
      const asset = await MediaLibrary.createAssetAsync(uri);
      await MediaLibrary.addAssetsToAlbumAsync(asset, "Recents", true);
    } else {
      console.error("Permission to access camera roll was denied");
      alert("No access to media files, please go to settings");
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Select Photo" onPress={pickImage} />
      <Button title="Select Document" onPress={pickDocument} />
      <Button title="Check" />
      <FlatList
        data={images.concat(documents)}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleMediaPress(item)}>
            <Image
              source={{ uri: item }}
              style={{ width: 200, height: 200, marginTop: 20 }}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
