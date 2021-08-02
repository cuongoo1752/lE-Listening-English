import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ChooseLessonType from "./screens/ChooseLessonType";
import ChooseLevel from "./screens/ChooseLevel";

import ChooseLessonConversation from "./screens/ChooseLessonConversation";
import ChooseLessonQuiz from "./screens/ChooseLessonQuiz";
import ChooseLessonStory from "./screens/ChooseLessonStory.js";

import ConversationLesson from "./screens/ConversationLesson";
import QuizLesson from "./screens/QuizLesson";
import StoryLesson from "./screens/StoryLesson";

import logo from "./assets/images/logo.jpg";

import { Image, Text, TouchableOpacity } from "react-native";

const Stack = createStackNavigator();

export default function App() {
  function LogoRight() {
    return (
      <TouchableOpacity>
        <Image
          style={{ width: 35, height: 50, marginRight: 15 }}
          source={logo}
        />
      </TouchableOpacity>
    );
  }

  function NameApp() {
    return (
      <Text
        style={{
          paddingLeft: 15,
          fontStyle: "italic",
          fontWeight: "bold",
          fontSize: 22,
          lineHeight: 22,
          color: "#F26F5B",
        }}
      >
        El App
      </Text>
    );
  }

  return (
    <NavigationContainer initialRouteName="ChooseLevel">
      <Stack.Navigator>
        <Stack.Screen
          name="ChooseLevel"
          options={{
            title: "Chọn Trình độ",
            headerLeft: (props) => <NameApp {...props} />,
            headerRight: (props) => <LogoRight {...props} />,
            headerTitleAlign: "center",
          }}
          component={ChooseLevel}
        />
        <Stack.Screen
          name="ChooseLessonType"
          options={{
            title: "Chọn Loại bài học",
            headerRight: (props) => <LogoRight {...props} />,
            headerTitleAlign: "center",
          }}
          component={ChooseLessonType}
        />

        {/* Chọn bài học */}
        <Stack.Screen
          name="ChooseLessonQuiz"
          options={{
            title: "Choose Lesson Quiz",
            headerRight: (props) => <LogoRight {...props} />,
            headerTitleAlign: "center",
          }}
          component={ChooseLessonQuiz}
        />
        <Stack.Screen
          name="ChooseLessonConversation"
          options={{
            title: "Choose Lesson Conversation",
            headerRight: (props) => <LogoRight {...props} />,
            headerTitleAlign: "center",
          }}
          component={ChooseLessonConversation}
        />
        <Stack.Screen
          name="ChooseLessonStory"
          options={{
            title: "Choose Lesson Story",
            headerRight: (props) => <LogoRight {...props} />,
            headerTitleAlign: "center",
          }}
          component={ChooseLessonStory}
        />
        {/* Chi tiết bài học */}
        <Stack.Screen
          name="QuizLesson"
          options={{
            title: "Trả lời câu hỏi",
            headerRight: (props) => <LogoRight {...props} />,
            headerTitleAlign: "center",
          }}
          component={QuizLesson}
        />
        <Stack.Screen
          name="ConversationLesson"
          options={{
            title: "Theo dõi hội thoại",
            headerRight: (props) => <LogoRight {...props} />,
            headerTitleAlign: "center",
          }}
          component={ConversationLesson}
        />
        <Stack.Screen
          name="StoryLesson"
          options={{
            title: "Nghe Truyện",
            headerRight: (props) => <LogoRight {...props} />,
            headerTitleAlign: "center",
          }}
          component={StoryLesson}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
