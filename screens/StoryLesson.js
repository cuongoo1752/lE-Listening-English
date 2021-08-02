import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import AudioPlay2 from "./AudioPlay2";
import { storyLesson } from "./data/const";

export default class StoryLesson extends Component {
  constructor(props) {
    super(props);
  }

  

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.selectQuetion}>
          {storyLesson.content.map((element, index) => {
            return (
              <View key={index} style={{paddingVertical: 3}}>
                <Text style={styles.textQuetion}>{element }</Text>
              </View>
            );
          })}
          
        </ScrollView>
        <AudioPlay2 keyAudioUrl={2} styles={{ width: "100%" }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "white",
    height: "100%",
  },
  image: {
    marginTop: 18,
    borderWidth: 1,
    borderColor: "#BEBAB3",
    borderRadius: 8,
    width: "98%",
    height: "40%",
  },
  selectQuetion: {
    width: "100%",
    paddingHorizontal: 12,
  },
  title: {
    // fontFamily: 'Rubik-Regular',
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 22,

    textAlign: "left",
    letterSpacing: -0.5,
    paddingVertical: 10,
    // paddingHorizontal: 10
  },
  quetions: {},
  quetion: {
    alignItems: "flex-start",
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#BEBAB3",
    borderRadius: 8,
    marginBottom: 8,
  },
  textQuetion: {
    // fontFamily: 'Rubik-Regular',
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 18,
    lineHeight: 22,
    color: "#404040",
  },

  // Khi chọn
  quetionSelect: {
    alignItems: "flex-start",
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    marginBottom: 8,
  },
  textQuetionSelect: {
    // fontFamily: 'Rubik-Regular',
    fontStyle: "italic",
    fontWeight: "normal",
    fontSize: 16,
    lineHeight: 16,
    color: "black",
  },

  // Khi đúng
  quetionResult: {
    alignItems: "flex-start",
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 8,
    marginBottom: 8,
  },
  textQuetionResult: {
    // fontFamily: 'Rubik-Regular',
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 16,
    lineHeight: 16,
    color: "green",
  },

  // Thanh Submit
  submitbox: {
    paddingTop: 20,
    width: "100%",
    height: 130,
    justifyContent: "center",
    alignItems: "center",
  },
  submit: {
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "#F26F5B",
    backgroundColor: "#F26F5B",
    padding: 7,
    paddingHorizontal: 15,
  },
  submittext: {
    fontWeight: "bold",
    fontSize: 16,
    color: "white",
  },

  trueselecttext: {
    padding: 10,
  },
});
