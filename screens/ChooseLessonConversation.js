import React, { Component } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { listConversationLesson } from "./data/const";

export default class ChooseLessonConversation extends Component {
  render() {
    return (
      <View style={styles.container}>
        {listConversationLesson.map((element, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                this.props.navigation.navigate("ConversationLesson");
              }}
            >
              <View style={styles.lesson}>
                <View style={styles.lessonDetail}>
                  <Text style={styles.lessonName}>
                    {element.name}
                  </Text>
                </View>

  
                
              </View>
            </TouchableOpacity>);
        })}
       
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
  lesson: {
    marginTop: 18,
    borderWidth: 1,
    borderColor: "#BEBAB3",

    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    alignItems: "center",
    paddingVertical: 24,
    paddingHorizontal: 16,
    width: 327,
    height: 59,
    borderRadius: 4,
  },
  lessonDetail: {
    // fontFamily: 'Rubik-Regular',
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 22,
    lineHeight: 21,
    letterSpacing: -0.5,
  },
  lessonName: {
    fontWeight: "700",
  },
  lessonQuetion: {},
  lessonScore: {},
  iconState: {
  },
  icon: {
    height: 32,
    width: 32,
    color: 'green',
    fontSize: 28,
  },
});
