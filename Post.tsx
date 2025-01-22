import React from 'react';
import { Image, View, Text} from 'react-native';
import styles from './Post_styles';

interface PostProps {
  text?: string;
  description?: string;
}

const Post = ({text, description}: PostProps) => {
  return (
    <View style={styles.postContainer}>
      <Image source={require('./assets/favicon.png')} />
      <Text style={styles.username}>{text}</Text>
      <Text>{description}</Text>
    </View>
  );
};


export default Post;