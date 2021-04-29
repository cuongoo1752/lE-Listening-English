import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class ChooseLessonType extends Component {
    render() {
        return (
            <View style={styles.container}>
               <View style={styles.type}>
                   <Text style={styles.typeName}><Text style={styles.textBold}>Part1:</Text> Photographs</Text>
               </View>
               <View style={styles.type}>
                   <Text style={styles.typeName}><Text style={styles.textBold}>Part1:</Text> Photographs</Text>
               </View>
               <View style={styles.type}>
                   <Text style={styles.typeName}><Text style={styles.textBold}>Part1:</Text> Photographs</Text>
               </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
    },
    type: {
        marginHorizontal: 8,
        background: '#FFFFFF',
        /* Ink/Gray */
        borderWidth: 1,
        borderColor: '#BEBAB3',
        boxSizing: 'border-box',
        borderRadius: 4,
        width: 327,
        height: 65,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '24 16'
    },
    typeName: {
        fontFamily: 'Rubik-Regular',
        fontWeight: 500,
        fontSize: 22,
        lineHeight: 32
    },
    textBold:{
        fontWeight: 800
    }
})
