import React, { useState } from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Runs = () => {
    const [count, setCount] = useState(0);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Runs: {count} </Text>
            <Button
                onPress={() => {setCount(count + 1)}} title="+1 Run"
            />
            <View style={styles.buttonseperate}/>
            <Button
                onPress={() => {setCount(count - 1)}} title="-1 Run"
            />
            <View style={styles.seperate}/>
            <Button
                onPress={() => {setCount(0)}} title="Reset Runs"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginBottom: 130,
    },
    title: {
        fontSize: 30,
        fontWeight: '600',
        color: '#FFF',
        marginTop: 1,
        height: 60,
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
    }
});

export default Runs;

