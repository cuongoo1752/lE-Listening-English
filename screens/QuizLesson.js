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
import AudioPlay from "./AudioPlay";
import { quizLesson } from "./data/const";

export default class QuizLesson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionIds: [],
      isFinish: false,
      trueSelect: 0,
    };
  }

  /**
   * Khởi tạo giá tị ban đầu
   * Created By: LMCUONG(29/07/2021)
   */
  componentDidMount() {}

  /** 
  * Khi nhấn vào từng câu hỏi, sẽ lưu câu hỏi 
  * Created By: LMCUONG(30/07/2021) 
  */
  handlePressQuestion(index, id) {
    if (this.state.questionIds.length == 0) {
      let questionIds = [];
      for (let index = 0; index < quizLesson.length; index++) {
        questionIds.push(" ");
      }

      this.setState({ questionIds: questionIds });
    }

    if (!(this.state.questionIds[index] === id)) {
      let questionIds = this.state.questionIds;
      questionIds[index] = id;
      this.setState({ questionIds: questionIds });
    }
  }

  /** 
  * Khi ấn nút nộp bài hoàn thành bài trắc nghiệm
  * Created By: LMCUONG(30/07/2021) 
  */
  onPressFinishLesson() {
    if (this.state.isFinish == false) {
      this.setState({ isFinish: true });
      let countTrueSelect = 0;
      for (const key in this.state.questionIds) {
        if (
          this.state.questionIds[key] != undefined &&
          this.state.questionIds[key] == quizLesson[key].result
        ) {
          countTrueSelect++;
        }
      }

      this.setState({ trueSelect: countTrueSelect });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.selectQuetion}>
          
          {/* Các câu hỏi */}
          {quizLesson.map((question, index) => {
            return (
              <View key={index}>
                <Text style={styles.title}>
                  {question.indexQuestion}. {question.question}
                </Text>
                {question.answers.map((answer, indexAnswer) => {
                  return (
                    <View style={styles.quetions} key={indexAnswer}>
                      <TouchableOpacity
                        onPress={() =>
                          this.handlePressQuestion(index, answer.id)
                        }
                      >
                        <View
                          style={
                            this.state.isFinish && answer.id == question.result
                              ? styles.quetionResult
                              : this.state.questionIds[index] != undefined &&
                                this.state.questionIds[index] == answer.id
                              ? styles.quetionSelect
                              : styles.quetion
                          }
                        >
                          <Text
                            style={
                              this.state.isFinish &&
                              answer.id == question.result
                                ? styles.textQuetionResult
                                : this.state.questionIds[index] != undefined &&
                                  this.state.questionIds[index] == answer.id
                                ? styles.textQuetionSelect
                                : styles.textQuetion
                            }
                          >
                            ({answer.id}) {answer.description}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  );
                })}
              </View>
            );
          })}
          {/* Nộp bài */}
          <View style={styles.submitbox}>
            <TouchableOpacity onPress={() => this.onPressFinishLesson()}>
              <View style={styles.submit}>
                <Text style={styles.submittext}>Nộp bài</Text>
              </View>
            </TouchableOpacity>
            {this.state.isFinish && (
              <Text style={styles.trueselecttext}>
                Đúng:{" "}
                <Text style={{ color: "green" }}>{this.state.trueSelect}</Text>/
                {quizLesson.length}
              </Text>
            )}
          </View>
        </ScrollView>
        <AudioPlay keyAudioUrl={0} styles={{ width: "100%" }} />
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
    fontSize: 16,
    lineHeight: 16,
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
