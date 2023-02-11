import {
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import { validated } from "../utils/validation";
import { ShowPasswordSVG } from "../../assets/svgs/ShowPasswordSVG";

export const AuthorizationPage = ({ navigation }) => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const isEmailValid = validated(emailInput);

  const logIn = () => {
    if (emailInput && passwordInput) {
      navigation.navigate("Home");
    } else {
      alert("Неверно введены данные");
    }
    setEmailInput("");
    setPasswordInput("");
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={emailInput}
          onChangeText={setEmailInput}
          keyboardType="email-address"
          textContentType="emailAddress"
          placeholder="Почта"
        />
        <TextInput
          style={styles.input}
          value={passwordInput}
          onChangeText={setPasswordInput}
          secureTextEntry={true}
          placeholder="Пароль"
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        disabled={!isEmailValid}
        onPress={logIn}
      >
        <Text style={styles.textButton}>Войти</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  inputContainer: {
    width: "90%",
    marginTop: "40%",
  },
  input: {
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    fontSize: 16,
    borderColor: "EDEFEE",
  },
  button: {
    width: "90%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    paddingRight: "3%",
    paddingLeft: "3%",
    backgroundColor: "#4299e1",
    borderRadius: 12,
  },
  textButton: {
    fontSize: 20,
    color: "white",
    padding: 5,
  },
});
