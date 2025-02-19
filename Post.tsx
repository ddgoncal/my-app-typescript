import React from 'react';
import { Image, View, Text, Button } from 'react-native';
import styles from './Post_styles';

interface PostProps {
  id: number;
  text?: string;
  description?: string;
  imagem?: string;
  removePost: (id: number) => void;
}

const Post = ({ id, text, description, imagem="./assets/favicon.png", removePost }: PostProps) => {
  return (
    <View style={styles.postContainer}>
      <Image source={{ uri: imagem }} style={styles.postImage} />
      <Text style={styles.username}>{text}</Text>
      <Text>{description}</Text>
      <Button title="Remove" onPress={() => removePost(id)} />
    </View>
  );
};

export default Post;
