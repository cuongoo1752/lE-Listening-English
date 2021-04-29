import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class AddTask extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> textInComponent </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        borderColor: "black",
        borderWidth: 1
    }
})
