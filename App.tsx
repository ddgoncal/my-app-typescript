import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { Teste } from './Teste';
import { Wrapper, Wrapperdois} from './Wrapper';
import Post from './Post';
import AddPost from './AddPost';

export default function App() {
  const [posts, setPosts] = useState([
    { id: 1, text: "Teste", description: "Teste de descrição" },
    { id: 2, text: "Teste2", description: "Teste de descrição2" },
    { id: 3, text: "Teste3", description: "Teste de descrição3" }
  ]);

  const addPost = (text: string, description: string) => {
    const newPost = {
      id: posts.length + 1,
      text,
      description
    };
    setPosts([...posts, newPost]);
  };

  const removePost = (id: number) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <View style={styles.container}>
      <a href="https://www.google.com">Google</a>

      <AddPost addPost={addPost} />
      {posts.map(post => (
        <Post key={post.id} id={post.id} text={post.text} description={post.description} removePost={removePost} />
      ))}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
