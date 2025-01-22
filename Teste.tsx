import React from 'react';
import { Text } from 'react-native';

export const Teste = () => {
   var a: number = 1;
   var b: number = 2;

  function soma(): number {
      return a + b;
  }

  return (
      <Text>Teste o que esta aqui</Text>
  )
}