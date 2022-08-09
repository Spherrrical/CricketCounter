import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';
import Runs from "./Runs";
import Overs from './Overs';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Runs/>
        <Overs/>
        <Text style={styles.title}>Cricket Counter - By Musa - v0.4</Text>


    </View>

  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1e',
    alignItems: 'center',
    justifyContent: 'center',

  },
    title: {
        fontSize: 12,
        fontWeight: '500',
        color: '#FFF',
        marginTop: 33,
    },
    movement: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },

});

