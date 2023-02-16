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
import * as Sharing from "expo-sharing";
import * as MediaLibrary from "expo-media-library";

export const SelectDocFromCore = () => {
  const [documents, setDocuments] = useState([]);

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});

    if (result.type === "success") {
      setDocuments([...documents, result.uri]);
    }
  };

  const handleDocumentPress = async (uri) => {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status === "granted") {
      const asset = await MediaLibrary.createAssetAsync(uri);
      await MediaLibrary.createAlbumAsync("Exported Documents", asset, false);
    } else {
      console.error("Permission to access camera roll was denied");
      alert("нет доступа к медиафайлам, зайдите в настройки");
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Выбрать документ" onPress={pickDocument} />
      <FlatList
        data={documents}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleDocumentPress(item)}>
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
