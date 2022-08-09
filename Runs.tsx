import React, { useState } from 'react';
import {View, Text, Button, StyleSheet, Alert, SafeAreaView} from 'react-native';

const Runs = () => {
    const [count, setCount] = useState(0);
    const [target, setTarget] = useState(0);
    const [wide, setWide] = useState(0);
    const [noball, setNoBall] = useState(0);
    return (
    <SafeAreaView>
        <View style={styles.container}>
            <Text style={styles.title}>Runs: {count} </Text>
            <Text style={styles.target}>Target: {target} </Text>
            <View style={styles.row}>
                <Text style={styles.row}>W: {wide} </Text>
                <Text style={styles.row}>NB: {noball} </Text>
            </View>
            <View style={styles.buttonseperate}/>
            <View style={styles.fixToText}>
                <Button
                    onPress={() => {setCount(count + 1),setWide(wide + 1)}}
                    title="+1 W"
                />
                <Button
                    onPress={() => {setCount(count - 1),setWide(wide - 1)}}
                    title="-1 W"
                />
                <Button
                    onPress={() => {setCount(count - 1)}}
                    title="-1 Run"
                />
                <Button
                    onPress={() => {setCount(count + 1)}}
                    title="+1 Run"
                />
                <Button
                    onPress={() => {setCount(count - 1),setNoBall(noball - 1)}}
                    title="-1 NB"
                />
                <Button
                    onPress={() => {setCount(count + 1),setNoBall(noball + 1)}}
                    title="+1 NB"
                />

            </View>
            <Button
                onPress={() => {setCount(0), Alert.alert('Runs reset.')}} title="Reset Runs" color="#ff453a"
            />
            <View style={styles.buttonseperate}/>
            <Button
                onPress={() => {setWide(0), Alert.alert('Wides reset.')}} title="Reset Wides" color="#ff453a"
            />
            <View style={styles.buttonseperate}/>
            <Button
                onPress={() => {setNoBall(0), Alert.alert('No balls reset.')}} title="Reset No Balls" color="#ff453a"
            />
            <View style={styles.buttonseperate}/>
            <Button
                onPress={() => {setTarget(count), Alert.alert('Target set/reset.')}} title="Set/Reset Target" color="#64d3ff"
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
        marginTop: 23,
        height: 60,
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
    },
    buttonfontsize: {
        fontSize: 19,
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
    row: {
        fontSize: 21,
        fontWeight: '600',
        color: '#da8fff',
        marginTop: 10,
        marginHorizontal: 35,
        height: 21,
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    movement: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    seperate: {
        marginVertical: 10,
        height: 1,
        width: '1%',
    },
    buttonseperate: {
        marginVertical: 3,
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
        marginBottom: 8,
        marginTop: 13,



    },
});

export default Runs;

