import React, { useState } from 'react';
import {ActionSheetIOS, View, Text, Button, StyleSheet, Alert, SafeAreaView} from 'react-native';



const Runs = () => {
    const [runs, setRuns] = useState(0);
    const [target, setTarget] = useState(0);
    const [wide, setWide] = useState(0);
    const [noball, setNoBall] = useState(0);
    const ONE_SECOND_IN_MS = 1000;

    const PATTERN = [
        1 * ONE_SECOND_IN_MS,
        2 * ONE_SECOND_IN_MS,
        3 * ONE_SECOND_IN_MS
    ];

    const onPress = () =>
        ActionSheetIOS.showActionSheetWithOptions(
            {
                options: ["Cancel", "Reset No Balls", "Reset Wides", "Reset Runs"],
                destructiveButtonIndex: 3,
                cancelButtonIndex: 0,
                userInterfaceStyle: "dark",
            },
            buttonIndex => {
                if (buttonIndex === 0) {
                    // cancel action
                } else if (buttonIndex === 1) {
                    setNoBall(0)
                } else if (buttonIndex === 2) {
                    setWide(0)
                } else if (buttonIndex == 3) {
                    setRuns(0)
                }

            }
        );

    return (
    <SafeAreaView>
        <View style={styles.container}>
            <Text style={styles.title}>Runs: {runs} </Text>
            <Text style={styles.target}>Target: {target} </Text>
            <View style={styles.row}>
                <Text style={styles.row}>W: {wide} </Text>
                <Text style={styles.row}>NB: {noball} </Text>
            </View>
            <View style={styles.buttonseperate}/>
            <View style={styles.fixToText}>
                <Button
                    onPress={() => {setRuns(runs + 1),setWide(wide + 1)}}
                    title="+1 W"
                />
                <Button
                    onPress={() => {setRuns(runs - 1),setWide(wide - 1)}}
                    title="-1 W"
                />
                <Button
                    onPress={() => {setRuns(runs - 1)}}
                    title="-1 Run"
                />
                <Button
                    onPress={() => {setRuns(runs + 1)}}
                    title="+1 Run"
                />
                <Button
                    onPress={() => {setRuns(runs - 1),setNoBall(noball - 1)}}
                    title="-1 NB"
                />
                <Button
                    onPress={() => {setRuns(runs + 1),setNoBall(noball + 1)}}
                    title="+1 NB"
                />

            </View>

            <Button onPress={onPress} title="Reset Menu" color="#ff453a"/>
            <View style={styles.buttonseperate}/>
            <Button
                onPress={() => {setTarget(runs), Alert.alert('Target set/reset.')}} title="Set/Reset Target" color="#64d3ff"
            />

            {/*Deprecated*/}

            {/*<Button*/}
            {/*    onPress={() => {setRuns(0), Alert.alert('Runs reset.')}} title="Reset Runs" color="#ff453a"*/}
            {/*/>*/}
            {/*<View style={styles.buttonseperate}/>*/}
            {/*<Button*/}
            {/*    onPress={() => {setWide(0), Alert.alert('Wides reset.')}} title="Reset Wides" color="#ff453a"*/}
            {/*/>*/}
            {/*<View style={styles.buttonseperate}/>*/}
            {/*<Button*/}
            {/*    onPress={() => {setNoBall(0), Alert.alert('No balls reset.')}} title="Reset No Balls" color="#ff453a"*/}
            {/*/>*/}
            {/*<View style={styles.buttonseperate}/>*/}

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

