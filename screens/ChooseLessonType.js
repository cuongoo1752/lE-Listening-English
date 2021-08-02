import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
} from "react-native";
import logo from "../assets/images/logo.jpg";
import { lessonType } from "./data/const";

export default class ChooseLessonType extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("ChooseLessonQuiz");
          }}
        >
          <View style={styles.type}>
            <Image style={styles.logo} source={logo} />
            <Text style={styles.typeName}>
              <Text style={styles.textBold}> Part 1: </Text>{" "}
              {lessonType[0].name}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("ChooseLessonConversation");
          }}
        >
          <View style={styles.type}>
            <Image style={styles.logo} source={logo} />
            <Text style={styles.typeName}>
              <Text style={styles.textBold}> Part 2: </Text>{" "}
              {lessonType[1].name}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("ChooseLessonStory");
          }}
        >
          <View style={styles.type}>
            <Image style={styles.logo} source={logo} />
            <Text style={styles.typeName}>
              <Text style={styles.textBold}> Part 3: </Text>{" "}
              {lessonType[2].name}
            </Text>
          </View>
        </TouchableOpacity>

        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "white",
    height: "100%",
    paddingTop: 8,
  },
  type: {
    marginVertical: 8,
    backgroundColor: "#FFFFFF",
    /* Ink/Gray */
    borderWidth: 1,
    borderColor: "#BEBAB3",
    // boxSizing: 'border-box',
    borderRadius: 4,
    width: 327,
    height: 65,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 24,
    paddingHorizontal: 24,
  },
  typeName: {
    // fontFamily: 'Rubik-Regular',
    fontWeight: "500",
    fontSize: 22,
    lineHeight: 32,
  },
  textBold: {
    fontWeight: "800",
  },
  logo: {
    height: 50,
    width: 40,
  },
});
