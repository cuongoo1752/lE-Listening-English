import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import AudioPlay1 from "./AudioPlay1";
import { conversationLesson } from "./data/const";

export default class ConversationLesson extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.selectQuetion}>
          {conversationLesson.map((element, index) => {
            return (
              <View
                key={index}
                style={
                  element.id == "Sarah" ? styles.quetion : styles.quetionLeft
                }
              >
                <Text style={styles.textQuetion}>
                  <Text style={{ fontWeight: "bold" }}>{element.id}</Text>:{" "}
                  {element.description}
                </Text>
              </View>
            );
          })}
        </ScrollView>
        <AudioPlay1 keyAudioUrl={1} styles={{ width: "100%" }} />
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
    paddingVertical: 8,
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
    width: "90%",
    alignItems: "flex-start",
    paddingHorizontal: 8,
    paddingVertical: 12,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#BEBAB3",
    borderRadius: 8,
    marginBottom: 6,
  },
  quetionLeft: {
    width: "90%",
    alignItems: "flex-end",
    marginLeft: "10%",
    paddingHorizontal: 8,
    paddingVertical: 12,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#BEBAB3",
    borderRadius: 8,
    marginBottom: 6,
  },
  textQuetion: {
    // fontFamily: 'Rubik-Regular',
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 16,
    lineHeight: 19,
    color: "#404040",
  },
});
