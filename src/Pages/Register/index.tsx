import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Register = () => {
  const navigation = useNavigation();

  function handleLoginNavigation() {
    navigation.navigate("Login");
  }
  return (
    <ImageBackground
      source={require("../../assets/background.jpg")}
      style={styles.img}
    >
      <View style={styles.backFilter}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <View style={styles.container}>
          <View style={styles.containerInput}>
            <FontAwesome
              name="user-circle"
              size={24}
              color="#494949"
              style={styles.iconInput}
            />
            <TextInput
              style={styles.input}
              placeholder={"Username"}
              placeholderTextColor="#494949"
            />
          </View>
          <View style={styles.containerInput}>
            <FontAwesome
              name="envelope"
              size={24}
              color="#494949"
              style={styles.iconInput}
            />
            <TextInput
              style={styles.input}
              placeholder={"Email"}
              placeholderTextColor="#494949"
            />
          </View>
          <View style={styles.containerInput}>
            <FontAwesome
              name="unlock-alt"
              size={24}
              color="#494949"
              style={styles.iconInput}
            />
            <TextInput
              style={styles.input}
              placeholder={"Password"}
              secureTextEntry={true}
              placeholderTextColor="#494949"
            />
          </View>
          <Text style={styles.signUP} onPress={handleLoginNavigation}>
            Sign Up!
          </Text>
        </View>

        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: "100%",
  },
  backFilter: {
    backgroundColor: "rgba(0,0,0,0.40)",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 300,
    height: 60,
    marginBottom: 2,
  },
  container: {
    height: 230,
    width: 350,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 25,
    paddingLeft: 25,
    paddingRight: 25,
  },
  containerInput: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: "#494949",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  iconInput: {
    marginRight: 5,
  },
  input: {
    width: 280,
    height: 45,
    color: "#494949",
    fontSize: 15,
  },
  signUP: {
    color: "#760BE9",
    textDecorationLine: "underline",
  },
  containerButton: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: -20,
    borderColor: "#FFF",
    borderWidth: 3,
    borderRadius: 14,
    backgroundColor: "#FFF",
  },
  button: {
    width: 200,
    height: 45,
    borderRadius: 12,
    backgroundColor: "#760BE9",
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "500",
  },
});

export default Register;
