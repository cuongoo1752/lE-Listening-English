import React, { Component } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { listQuizLesson } from "./data/const";
import { Icon } from "react-native-material-ui";

export default class ChooseLessonQuiz extends Component {
  render() {
    return (
      <View style={styles.container}>
        {listQuizLesson.map((element, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                this.props.navigation.navigate("QuizLesson");
              }}
            >
              <View style={styles.lesson}>
                <View style={styles.lessonDetail}>
                  <Text style={styles.lessonName}>
                    {element.name}
                  </Text>
                  <Text style={styles.lessonQuetion}>
                    Question: {element.question}
                  </Text>
                  <Text style={styles.lessonScore}>
                    High Score: <Text style={{color: 'green'}}>{element.highScore}</Text>
                  </Text>
                </View>

                {element.isPass && (<View style={styles.iconState}>
                  <Icon  style={styles.icon} name="done"/>
                </View>)}
                
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
    height: 83,
    borderRadius: 4,
  },
  lessonDetail: {
    // fontFamily: 'Rubik-Regular',
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 14,
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
