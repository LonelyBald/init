import React from "react";
import { View, StyleSheet } from "react-native";
import { Header } from "./components/Header";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { AuthorizationPage } from "./pages/AuthorizationPage";
import { Home } from "./pages/HomePage";

const Stack = createStackNavigator();

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = () => {
  return (
    <View style={styles.layout}>
      <Header />
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
            options={{ headerShown: false }}
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
