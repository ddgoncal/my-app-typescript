import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Teste } from './Teste';
import { Wrapper, Wrapperdois} from './Wrapper';
import Post from './Post';

export default function App() {
  var a: number = 1;
  var b: string = "fasd";
  var nome ="enviamos esta variavel";
  return (
    <View style={styles.container}>
      <a href="https://www.google.com">Google</a>

      <Post text="Teste" description="Teste de descrição" />
      <Post text="Teste2" description="Teste de descrição2" />
      <Post text="Teste3" description="Teste de descrição3" />
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
