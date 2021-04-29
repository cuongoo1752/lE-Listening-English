import React, { Component } from 'react'
import { CheckBox, StyleSheet, Text, View } from 'react-native'

export default class Task extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textTask}>{this.props.textTask}</Text>
                <CheckBox style={styles.state} value={this.props.isSelected == "true" ? true:false}></CheckBox>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: "#20232a",
        height: 50,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        paddingHorizontal: 15,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    textTask:{
        fontSize: 16
    },
    state: {
        borderWidth: 1,
        borderColor: "black"
    }
});

