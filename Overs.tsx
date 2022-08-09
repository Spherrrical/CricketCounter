import React, { useState, useEffect } from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import Balls from "./Balls"
import count1 from "./Balls"
import BallsCount from "./Balls"

const Overs = () => {
    const [count, setCount] = useState(0);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Overs: {count} </Text>
            <Button
                onPress={() => {setCount(count + 1)}} title="+1 Over"
            />
            <View style={styles.buttonseperate}/>
            <Button
                onPress={() => {setCount(count - 1)}} title="-1 Over"
            />
            <View style={styles.seperate}/>
            <Button
                onPress={() => {setCount(0)}} title="Reset Overs"
            />
        </View>
    );
}



const styles = StyleSheet.create({
    container:{
        marginBottom: 60,
    },
    title: {
        fontSize: 30,
        fontWeight: '600',
        color: '#FFF',
        marginBottom: -80,
        marginTop: -100,
        height: 150,
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
    }
});

export default Overs;

