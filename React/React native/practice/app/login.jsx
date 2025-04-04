import React, { useState } from "react";
import { Text, TextInput, Button, View, StyleSheet } from "react-native";

function Login({ navigation }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = () => {
    if (user == "1" && pass == "a") {
      console.log("Login successful");
      navigation.navigate("Form");
    } else {
      alert("Wrong or Empty credential");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Login</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Username"
          onChangeText={(newText) => setUser(newText)}
          defaultValue={user}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          onChangeText={(e) => setPass(e)}
          defaultValue={pass}
          secureTextEntry
        />
        <View style={{ gap: 10, margin: 10 }}>
          <Button title="Login" onPress={handleLogin} />
          <Button
            title="SignUp"
            onPress={() => {
              navigation.navigate("SignUp");
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  inputContainer: {
    marginBottom: 20,
    width: "100%",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
    color: "#333",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    fontSize: 16,
    backgroundColor: "#fff", 
  },
});

export default Login;
