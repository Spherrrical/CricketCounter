import React, { useState, useEffect } from 'react';
import {ActionSheetIOS, View, Text, Button, StyleSheet, Alert, SafeAreaView} from 'react-native';


const Overs = () => {
    const [overs, setOvers] = useState(0);
    const [balls, setBalls] = useState(0);

    useEffect(() => {
        if (balls == 6) {
            setBalls(0);
            setOvers(overs + 1);
        }
    })
    const onPress = () =>
        ActionSheetIOS.showActionSheetWithOptions(
            {
                options: ["Cancel", "Reset Balls", "Reset Overs"],
                destructiveButtonIndex: 3,
                cancelButtonIndex: 0,
                userInterfaceStyle: "dark",
            },
            buttonIndex => {
                if (buttonIndex === 0) {
                    // cancel action
                } else if (buttonIndex === 1) {
                    setBalls(0)
                } else if (buttonIndex === 2) {
                    setOvers(0)
                }

            }
        );
    return (
        <SafeAreaView>
            <View style={styles.container1}>
                <Text style={styles.title1}>Balls: {balls} </Text>
                <Button onPress={onPress} title="Reset Menu" color="#ff453a"/>
                <View style={styles.buttonseperate1}/>
                <View style={styles.fixToText1}>
                    <Button
                        onPress={() => {setBalls(balls - 1)}}
                        title="-1 Ball"
                    />
                    <View style={styles.seperate1}/>
                    <Button
                        onPress={() => {setBalls(balls + 1)}}
                        title="+1 Ball"
                    />
                </View>
                <View style={styles.buttonseperate1}/>
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>Overs: {overs} </Text>
                <View style={styles.buttonseperate}/>
            </View>
        </SafeAreaView>
    );
}



const styles = StyleSheet.create({
    // Balls
    container1:{
        marginTop: -99,
    },
    title1: {
        fontSize: 39,
        fontWeight: '700',
        color: '#FFF',
        marginBottom: 21,
        alignItems: 'flex-start',
        textAlign: 'center',
        justifyContent: 'center',
    },
    movement1: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    seperate1: {
        marginVertical: 13,
        height: 1,
        width: '1 %',
        color: '#FFF'
    },
    buttonseperate1: {
        marginVertical: 9,
        height: 1,
        width: '1 %',
        color: '#FFF'
    },
    fixToText1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 40,
    },
    // Overs
    container:{
        marginBottom: -40,
    },
    title: {
        fontSize: 39,
        fontWeight: '700',
        color: '#FFF',
        marginBottom: -120,
        marginTop: -20,
        height: 240,
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
    },
    movement: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    seperate: {
        marginVertical: 13,
        height: 1,
        width: '1%',
    },
    buttonseperate: {
        marginVertical: 9,
        height: 1,
        width: '1 %',
        color: '#FFF'
    },
    moveButton: {
        marginTop: 100,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 11,
    },
});

export default Overs;

