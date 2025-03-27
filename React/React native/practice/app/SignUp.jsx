import React, { useState } from 'react';
import { Text, TextInput, Button, View, StyleSheet } from 'react-native';

function SignUp({navigation}) {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const handleSignUp = () => {
    if(user && pass)
      {
        console.log('Login successful');
      navigation.navigate("Form");
      }
      else{
        alert("Empty credential")
      }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>SignUp</Text>
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
      </View>

      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  inputContainer: {
    marginBottom: 20,
    width: '100%',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
});

export default SignUp;
