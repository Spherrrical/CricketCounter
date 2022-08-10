import { StatusBar } from 'expo-status-bar';
import { Share, StyleSheet, Text, View, Button, ScrollView, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import Runs from "./components/Runs";
import Overs from './components/Overs';
// import {balls, overs} from "./Overs"




export default function App() {
    const getCurrentDate=()=>{

        const date = new Date().getDate();
        const month = new Date().getMonth() + 1;
        const year = new Date().getFullYear();

        return date + '-' + month + '-' + year;//format: dd-mm-yyyy;
    }

    const onShare = async () => {
        try {
            const result = await Share.share({
                message: "CricCounter",
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };

  return (
      <SafeAreaView style={styles.container}>
              <StatusBar style="auto" />
              <Runs/>
              <Overs/>
              <Text style={styles.title}>Client Version 1.2.0 - By Musa</Text>

          {/*Issues with variables*/}

          {/*<View style={{ marginTop: 50 }}>*/}
          {/*    <Button onPress={onShare} title="Share Score" color='#FFF'/>*/}
          {/*</View>*/}
      </SafeAreaView>
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

