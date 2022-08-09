import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';
import Runs from "./Runs";
import Balls from "./Balls"
import Overs from './Overs';


export default function App() {
  return (
    <View style={styles.container}>
      {/*<Text style={styles.title}>Cricket Counter - By Musa</Text>*/}
      <StatusBar style="auto" />
      <Runs/>
        <Overs/>
        <Balls/>
        <Text style={styles.title}>Cricket Counter - By Musa Malik</Text>

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
        fontSize: 9,
        fontWeight: '300',
        color: '#FFF',
        marginTop: 25,
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

