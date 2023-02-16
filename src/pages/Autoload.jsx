// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   FlatList,
//   Image,
//   StyleSheet,
//   TouchableOpacity,
//   Share,
// } from "react-native";
// import * as MediaLibrary from "expo-media-library";
// import * as downloadResumable from "expo-file-system";
//
// export const Autoload = () => {
//   const [photos, setPhotos] = useState([]);
//
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/photos")
//       .then((response) => response.json())
//       .then((data) => setPhotos(data));
//     Share.share({
//       url: "file.docx",
//     });
//   }, []);
//
//   const saveToGallery = async () => {
//     try {
//       const { uri } = await downloadResumable.downloadAsync(
//         "https://jsonplaceholder.typicode.com/photos",
//         photos,
//         undefined
//       );
//       console.log("Finished downloading to ", uri);
//       await Share.share({
//         url: "file.docx",
//       });
//     } catch (err) {
//       console.warn(err);
//     }
//   };
//
//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={photos}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.itemContainer}>
//             <Image source={{ uri: item.url }} style={styles.image} />
//             <Text>{item.title}</Text>
//             <TouchableOpacity onPress={saveToGallery} style={styles.saveButton}>
//               <Text style={styles.saveButtonText}>Save to Gallery</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//       />
//     </View>
//   );
// };
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     padding: 16,
//   },
//   itemContainer: {
//     flex: 1,
//     margin: 16,
//     alignItems: "center",
//   },
//   image: {
//     width: 200,
//     height: 200,
//     borderRadius: 4,
//   },
//   saveButton: {
//     backgroundColor: "#007aff",
//     padding: 12,
//     borderRadius: 4,
//     marginTop: 16,
//   },
//   saveButtonText: {
//     color: "#fff",
//     fontWeight: "bold",
//   },
// });

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

export const Autoload = () => {
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
