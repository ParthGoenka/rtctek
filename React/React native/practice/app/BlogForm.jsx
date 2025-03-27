import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

function BlogForm({navigation}) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handlePost = () => {
    if(title && description){
        console.log('Blog Posted:', { title, description });
    navigation.navigate("Home")
    }
    else{
        alert("Enter Data")
    }
    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create a Blog Post</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Enter Description"
        value={description}
        onChangeText={(text) => setDescription(text)}
        multiline={true}
        numberOfLines={4}
      />

      <Button title="Post" onPress={handlePost} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
  },
  textArea: {
    height: 100,
  },
});

export default BlogForm;
