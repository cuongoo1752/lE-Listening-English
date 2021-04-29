import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class ChooseLevel extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containImage}></View>
                <View style={styles.selectLevel}>
                    <View style={styles.level}>
                        <Text style={styles.level__name}>Level B1</Text>
                    </View>
                    <View style={styles.level}>
                        <Text style={styles.level__name}>Level A2</Text>
                    </View>
                    <View style={styles.level}>
                        <Text style={styles.level__name}>Level A1</Text>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: 'black',

        alignItems: 'center'
    },

    containImage:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,

        marginTop: 30,

        width: 172,
        height: 172,

        borderWidth: 1,
        borderColor: 'black'
    },

    selectLevel: {
        borderWidth: 1,
        borderColor: 'black',

        marginTop: 32,
    },

    level: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '24 16',
        boxSizing: 'border-box',
        borderRadius: 16,
        background: '#FFFFFF',
        /* Ink/Gray */

        borderWidth: 1,
        borderColor: '#BEBAB3',
        width: 327,
        height: 77,

        marginVertical: 8,
    },

    level__name:{
        fontFamily: 'Rubik',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 32,
        color: '#3C3A36',
    }


})