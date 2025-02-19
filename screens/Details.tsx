import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const Details = ({navigation}: {navigation: NativeStackNavigationProp<any>}) => {
  return (
    <View style={styles.container}>
      <Text>Details</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Details;