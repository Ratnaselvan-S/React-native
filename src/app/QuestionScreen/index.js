import React, { useState } from "react";
import Question from "../../constants/Question";
import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome6 } from "@expo/vector-icons";
import questions from "../../../questions";
import Card from "../../wrapper/Card";

const QuestionScreen = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const question = questions[questionIndex];
  const Onclicked = () => {
    setQuestionIndex((curr) => curr + 1);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          backgroundColor: "#FDFEF4",
          justifyContent: "space-between",
          padding: 20,
        }}
      >
        <Text style={{ textAlign: "center", color: "blue" }}>
          Question {questionIndex + 1}/5
        </Text>
        <View>
          {question ? (
            <>
              <Question question={question} />

              <Text
                style={{
                  textAlign: "center",
                  color: "green",
                  fontWeight: 600,
                  marginTop: 20,
                }}
              >
                20 sec
              </Text>
            </>
          ) : (
            <Card question={{ title: "well done" }}>
              <Text>Total correct : 3/5</Text>
              <Text>Best answer : 5/5</Text>
            </Card>
          )}
        </View>
        <Pressable
          hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }}
          style={{
            backgroundColor: "#005055",
            padding: 20,
            borderRadius: 100,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={Onclicked}
        >
          <Text style={{ color: "white" }}>Next</Text>
          <FontAwesome6
            name="arrow-right-long"
            size={16}
            color="white"
            style={{ position: "absolute", right: 20 }}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default QuestionScreen;
