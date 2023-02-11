import { View, Text, StyleSheet } from "react-native";
import { Header } from "./components/Header";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { AuthorizationPage } from "./pages/AuthorizationPage";
import { Home } from "./pages/Home";
import header from "react-native/Libraries/NewAppScreen/components/Header";
import { NotificationsComponent } from "./components/NotificationsComponent";
import { MapPage } from "./pages/MapPage";

const Stack = createStackNavigator();
export const Layout = () => {
  return (
    <View style={styles.layout}>
      <Header />
      {/*<MapPage />*/}
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Authorization">
          <Stack.Screen
            name="Войти"
            component={AuthorizationPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerLeft: null, headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
  },
});
