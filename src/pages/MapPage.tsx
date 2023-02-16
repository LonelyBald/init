import { View, StyleSheet, Text, Pressable } from "react-native";
import MapView, { Polygon } from "react-native-maps";
import { flattenDeep, result } from "../utils/polygonCoordinates";
import { useState } from "react";

export const MapPage = () => {
  const coordsKZ = {
    latitude: 48.0196,
    longitude: 66.9237,
    latitudeDelta: 43,
    longitudeDelta: 43,
  };
  const [mapRegion, setMapRegion] = useState(coordsKZ);

  const handlePolygonPress = (coordinates) => {
    const center = coordinates.reduce(
      (acc, cur) => {
        acc.latitude += cur.latitude;
        acc.longitude += cur.longitude;
        return acc;
      },
      { latitude: 0, longitude: 0 }
    );
    center.latitude /= coordinates.length;
    center.longitude /= coordinates.length;

    const newRegion = {
      latitude: center.latitude,
      longitude: center.longitude,
      latitudeDelta: 10,
      longitudeDelta: 10,
    };
    setMapRegion(newRegion);
  };

  const polygons = result.map((coordinates, index) => {
    return (
      <Polygon
        key={index}
        strokeColor="blue"
        strokeWidth={2}
        coordinates={coordinates}
        onPress={() => handlePolygonPress(coordinates)}
      />
    );
  });

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={mapRegion}>
        <View style={styles.zoomContainer}>
          <Pressable
            style={styles.buttonZoom}
            onPress={() => setMapRegion(coordsKZ)}
          >
            <Text style={styles.action}>-</Text>
          </Pressable>
          <Pressable style={styles.buttonZoom}>
            <Text style={styles.action}>+</Text>
          </Pressable>
        </View>
        {polygons}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "90%",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  zoomContainer: {
    flexDirection: "column",
  },
  buttonZoom: {
    width: 40,
    height: 40,
    backgroundColor: "grey",
    marginTop: 15,
    marginLeft: 15,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  action: {
    fontSize: 35,
    color: "white",
  },
});
