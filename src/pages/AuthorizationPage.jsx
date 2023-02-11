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
import { emailValidate, passwordValidate } from "../utils/validation";
import { HidePassSVG } from "../../assets/svgs/HidePassSVG";
import { ShowPasswordSVG } from "../../assets/svgs/ShowPasswordSVG";
export const AuthorizationPage = ({ navigation }) => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [passVisible, setPassVisible] = useState(false);
  const isEmailValid = emailValidate(emailInput);
  const isPassValid = passwordValidate(passwordInput);

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
          style={styles.inputEmail}
          value={emailInput}
          onChangeText={setEmailInput}
          keyboardType="email-address"
          textContentType="emailAddress"
          placeholder="Почта"
        />
        <View style={styles.passContainer}>
          <TextInput
            style={styles.inputPass}
            value={passwordInput}
            onChangeText={setPasswordInput}
            secureTextEntry={!passVisible}
            placeholder="Пароль"
          />
          <Pressable
            style={styles.passButton}
            onPress={() => setPassVisible(!passVisible)}
          >
            {passVisible ? <ShowPasswordSVG /> : <HidePassSVG />}
          </Pressable>
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        disabled={!isEmailValid && !isPassValid}
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
  passContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 8,
    borderWidth: 1,
    height: 40,
    marginBottom: 15,
  },
  inputEmail: {
    borderRadius: 8,
    borderWidth: 1,
    height: 40,
    marginBottom: 15,
    padding: 10,
    fontSize: 16,
  },
  inputPass: {
    fontSize: 16,
    padding: 10,
    width: "90%",
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
  passButton: {
    width: 24,
    height: 24,
    marginRight: 10,
    marginTop: 7,
  },
});
