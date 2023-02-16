import React, { useState, useEffect } from "react";
import {
  Button,
  Image,
  View,
  FlatList,
  Linking,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Sharing from "expo-sharing";
import * as MediaLibrary from "expo-media-library";

export const SelectPhotoFromCore = () => {
  const [images, setImages] = useState([]);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImages([...images, result.uri]);
      handleImagePress(result.uri);
    }
  };

  const handleImagePress = async (uri) => {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status === "granted") {
      const asset = await MediaLibrary.createAssetAsync(uri);
      await MediaLibrary.createAlbumAsync("Exported Images", asset, false);
    } else {
      console.error("Permission to access camera roll was denied");
      alert("нет доступа к медиафайлам, зайдите в настройки");
    }
  };

  useEffect(() => {
    if (setImages) {
      console.log("save");
    } else {
      return null;
    }
  }, [setImages]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Выбрать фотку" onPress={pickImage} />
      <FlatList
        data={images}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item }}
            style={{ width: 200, height: 200, marginTop: 20 }}
          />
        )}
      />
    </View>
  );
};

//import React, { useState, useEffect } from "react";
// import {
//   Button,
//   Image,
//   View,
//   FlatList,
//   Linking,
//   TouchableOpacity,
// } from "react-native";
// import * as ImagePicker from "expo-image-picker";
// import * as Sharing from "expo-sharing";
// import * as MediaLibrary from "expo-media-library";
//
// export const Autoload = () => {
//   const [images, setImages] = useState([]);
//
//   const pickImage = async () => {
//     // No permissions request is necessary for launching the image library
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });
//
//     console.log(result);
//
//     if (!result.canceled) {
//       setImages([...images, result.uri]);
//     }
//   };
//
//   const handleImagePress = async (uri) => {
//     const { status } = await MediaLibrary.requestPermissionsAsync();
//     if (status === "granted") {
//       const asset = await MediaLibrary.createAssetAsync(uri);
//       await MediaLibrary.createAlbumAsync("Exported Images", asset, false);
//     } else {
//       console.error("Permission to access camera roll was denied");
//       alert("нет доступа к медиафайлам, зайдите в настройки");
//     }
//   };
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Button title="Выбрать фотку" onPress={pickImage} />
//       <FlatList
//         data={images}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item }) => (
//           <TouchableOpacity onPress={() => handleImagePress(item)}>
//             <Image
//               source={{ uri: item }}
//               style={{ width: 200, height: 200, marginTop: 20 }}
//             />
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   );
// };
