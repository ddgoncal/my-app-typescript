import React from 'react';
import { Image, View, Text, Button } from 'react-native';
import styles from './Post_styles';

interface PostProps {
  id: number;
  text?: string;
  description?: string;
  removePost: (id: number) => void;
}

const Post = ({ id, text, description, removePost }: PostProps) => {
  return (
    <View style={styles.postContainer}>
      <Image source={require('./assets/favicon.png')} />
      <Text style={styles.username}>{text}</Text>
      <Text>{description}</Text>
      <Button title="Remove" onPress={() => removePost(id)} />
    </View>
  );
};

export default Post;
