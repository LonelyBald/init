import { View, StyleSheet } from "react-native";
import MapView, { Polygon } from "react-native-maps";
import { flattenDeep } from "../utils/polygonCoordinates";
export const MapPage = () => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        <Polygon
          strokeColor="blue"
          // fillColor="#BEE3F8"
          strokeWidth={2}
          coordinates={flattenDeep}
          onPress={() => console.log("fea")}
        />
        {/*<Polygon*/}
        {/*  strokeColor="blue"*/}
        {/*  fillColor="#BEE3F8"*/}
        {/*  strokeWidth={2}*/}
        {/*  coordinates={result[1]}*/}
        {/*/>*/}
        {/*<Polygon*/}
        {/*  strokeColor="blue"*/}
        {/*  fillColor="#BEE3F8"*/}
        {/*  strokeWidth={2}*/}
        {/*  coordinates={result[2]}*/}
        {/*/>*/}
        {/*<Polygon*/}
        {/*  strokeColor="blue"*/}
        {/*  fillColor="#BEE3F8"*/}
        {/*  strokeWidth={2}*/}
        {/*  coordinates={result[3]}*/}
        {/*/>*/}
        {/*<Polygon*/}
        {/*  strokeColor="blue"*/}
        {/*  fillColor="#BEE3F8"*/}
        {/*  strokeWidth={2}*/}
        {/*  coordinates={result[4]}*/}
        {/*/>*/}
        {/*<Polygon*/}
        {/*  strokeColor="blue"*/}
        {/*  fillColor="#BEE3F8"*/}
        {/*  strokeWidth={2}*/}
        {/*  coordinates={result[5]}*/}
        {/*/>*/}
        {/*<Polygon strokeColor="blue" strokeWidth={2} coordinates={result[6]} />*/}
        {/*<Polygon strokeColor="blue" strokeWidth={2} coordinates={result[7]} />*/}
        {/*<Polygon strokeColor="blue" strokeWidth={2} coordinates={result[8]} />*/}
        {/*<Polygon strokeColor="blue" strokeWidth={2} coordinates={result[9]} />*/}
        {/*<Polygon strokeColor="blue" strokeWidth={2} coordinates={result[10]} />*/}
        {/*<Polygon strokeColor="blue" strokeWidth={2} coordinates={result[11]} />*/}
        {/*<Polygon strokeColor="blue" strokeWidth={2} coordinates={result[12]} />*/}
        {/*<Polygon strokeColor="blue" strokeWidth={2} coordinates={result[13]} />*/}
        {/*<Polygon strokeColor="blue" strokeWidth={2} coordinates={result[14]} />*/}
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
});
