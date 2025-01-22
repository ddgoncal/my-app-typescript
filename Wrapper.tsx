import React, { Fragment, useEffect } from 'react';
import { Teste } from './Teste';
import { Image } from 'react-native';

// interface makes it mandatory for my component to receive a prop called nome
interface WrapperProps {
  texto?: string; //optional
  idade?: number;
}

export function Wrapper( {texto, idade} : WrapperProps) {
  return (
    <>
      <Image source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} style={{width: 50, height: 50}} />
      <div>hjj </div>
    </>
  )
}

export function Wrapperdois() {
  return (
    <>
      <Teste> </Teste>
      <div> Teste dois </div>
    </>
  )
}

