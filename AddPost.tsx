import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

interface AddPostProps {
  addPost: (text: string, description: string, imagem: string) => void;
}

const AddPost = ({ addPost }: AddPostProps) => {
  const [text, setText] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    addPost(text, description, './assets/favicon.png');
    setText('');
    setDescription('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Text"
        value={text}
        onChangeText={setText}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Add Post" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export default AddPost;
