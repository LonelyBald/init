import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import { Layout } from "./src/Layout";
import { store } from "./src/redux";
import { Provider } from "react-redux";
export default function App() {
  return (
    <Provider store={store}>
      <View>
        <Layout />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}
