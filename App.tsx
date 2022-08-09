import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import Runs from "./Runs";
import Overs from './Overs';


export default function App() {
  return (
      <SafeAreaView style={styles.container}>
              <StatusBar style="auto" />
              <Runs/>
              <Overs/>
              <Text style={styles.title}>Client Version 1.0.2 - By Musa</Text>
      </SafeAreaView>
  );
}



// <SafeAreaView>
//     <ScrollView style={styles.container}>
//         <StatusBar style="auto" />
//         <Runs/>
//         <Overs/>
//         <Text style={styles.title}>Cricket Counter - By Musa - v0.4</Text>
//     </ScrollView>
// </SafeAreaView>



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1e',
    alignItems: 'center',
    justifyContent: 'center',

  },
    title: {
        fontSize: 10,
        fontWeight: '500',
        color: '#c2c2c2',
        marginTop: 10,
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

