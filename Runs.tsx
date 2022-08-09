import React, { useState } from 'react';
import {View, Text, Button, StyleSheet, Alert, SafeAreaView} from 'react-native';

const Runs = () => {
    const [count, setCount] = useState(0);
    const [target, setTarget] = useState(0);
    return (
    <SafeAreaView>
        <View style={styles.container}>
            <Text style={styles.title}>Runs: {count} </Text>
            <Text style={styles.target}>Target: {target} </Text>
            <View style={styles.buttonseperate}/>
            <View style={styles.fixToText}>
                <Button
                    onPress={() => {setCount(count - 1)}} title="-1 Run"
                />
                <View style={styles.seperate}/>
                <Button
                    onPress={() => {setCount(count + 1)}}
                    title="+1 Run"
                />
                <Button
                    onPress={() => {setTarget(count), Alert.alert('Target set/reset.')}} title="Set/Reset Target"
                />
            </View>
            <Button
                onPress={() => {setCount(0), Alert.alert('Runs reset.')}} title="Reset Runs" color="#ff453a"
            />
        </View>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        marginBottom: 130,
    },
    title: {
        fontSize: 39,
        fontWeight: '700',
        color: '#FFF',
        marginTop: 2,
        height: 60,
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
    },
    target: {
        fontSize: 19,
        fontWeight: '600',
        color: '#64d3ff',
        marginTop: 1,
        height: 22,
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
        marginTop: 1,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 11,
    },
});

export default Runs;

