import React, { Component } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import imageLevel from "../assets/images/selectLevel.png";
import { level } from "./data/const";

export default class ChooseLevel extends Component {
  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.containImage}>
            <Image style={styles.imageLevel} source={imageLevel} />
          </View>

          <View style={styles.selectLevel}>
            {level.map((element) => {
              return (
                <TouchableOpacity
                  key={element.id}
                  onPress={() => {
                    this.props.navigation.navigate("ChooseLessonType");
                  }}
                >
                  <View style={styles.level}>
                    <Text style={styles.level__name}>Level { element.name}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    alignItems: "center",
    backgroundColor: "white",
    height: "100%",
  },

  containImage: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,

    marginTop: 30,

    width: 192,
    height: 192,

    borderWidth: 1,
    borderColor: "black",
  },

  imageLevel: {
    width: 192,
    height: 192,
  },

  selectLevel: {
    marginTop: 32,
  },

  level: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 24,
    paddingHorizontal: 16,
    // boxSizing: 'border-box',
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    /* Ink/Gray */

    borderWidth: 1,
    borderColor: "#BEBAB3",
    width: 327,
    height: 77,

    marginVertical: 8,
  },

  level__name: {
    // fontFamily: 'Rubik',
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: 32,
    color: "#3C3A36",
  },
});
