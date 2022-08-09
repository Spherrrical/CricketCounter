import React, { useState, useEffect } from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';


const Balls = () => {
    const [count1, setCount] = useState(0);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Balls: {count1} </Text>
            <Button
                onPress={() => {setCount(count1 + 1)}} title="+1 Ball"
            />
            <View style={styles.buttonseperate}/>
            <Button
                onPress={() => {setCount(count1 - 1)}} title="-1 Ball"
            />
            <View style={styles.buttonseperate}/>
            <Button
                onPress={() => {setCount(0)}} title="Reset Balls"
            />
            {/*<Text style={styles.title}>Balls: {count1} </Text>*/}
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginTop: -30,
    },
    title: {
        fontSize: 30,
        fontWeight: '600',
        color: '#FFF',
        marginBottom: 35,
        alignItems: 'flex-start',
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
        width: '1 %',
        color: '#FFF'
    },
    buttonseperate: {
        marginVertical: 9,
        height: 1,
        width: '1 %',
        color: '#FFF'
    }

});

export default Balls;

