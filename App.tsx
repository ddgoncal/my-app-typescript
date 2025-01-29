import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Teste } from './Teste';
import { Wrapper, Wrapperdois} from './Wrapper';
import Post from './Post';
import AddPost from './AddPost';
export default function App() {
  const [posts, setPosts] = useState([
    { id: 1, text: "Teste", description: "Teste de descrição", imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" },
    { id: 2, text: "Teste2", description: "Teste de descrição2" , imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"},
    { id: 3, text: "Teste3", description: "Teste de descrição3", imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" },
  ]);

  const addPost = (text: string, description: string, imagem: string) => {
    const newPost = {
      id: posts.length + 1,
      text,
      description,
      imagem
    };
    setPosts([...posts, newPost]);
  };

  const removePost = (id: number) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  // create a state variable called contador, and a function to update it called setContador
  // with an initial value of 0
  const [contador, setContador] = useState(0);

  // useEffect is a hook that allows you to perform side effects in your function components
  // serves as a function that executes every time the dependencies change
  useEffect(() => {
    if (contador == 20) {
      alert("Chegou a 20!");
    }
    console.log(contador);
  }
  , [contador]);

  // serves as a function that executes every time the dependencies change
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/6')
      .then((response) => response.json())
      .then((data) => {
      console.log("Pokemon fetched!");
      console.log(data);
      addPost(data.name, data.types[0].type.name, data.sprites.front_default);
      })
      .catch((error) => {
      console.error("Error fetching Pokemon:", error);
      });
  }
  , []);

  const incrementar = () => {
    setContador(contador+1);
  }
  const decrementar = () => {
    setContador(contador-1);
    console.log(contador);
  }

  return (
    <View style={styles.container}>
      <a href="https://www.google.com">Google</a>

      <AddPost addPost={addPost} />
      {posts.map(post => (
        <Post key={post.id} id={post.id} text={post.text} description={post.description} imagem={post.imagem} removePost={removePost} />
      ))}

      <Text>Contador: {contador}</Text>
      <Button title="Incrementar" onPress={() => incrementar()} />
      <Button title="Decrementar" onPress={() => decrementar()} />
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
