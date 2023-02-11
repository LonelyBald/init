import { View, Text, StyleSheet, Image } from "react-native";
import logo from "../../assets/logo.png";

export const Header = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  logo: {
    marginTop: 40,
    marginBottom: 10,
    width: "53%",
    height: 45,
  },
});
