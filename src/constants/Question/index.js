import React from "react";

import { Text, View, StyleSheet } from "react-native";
import QuesyionAnswers from "./QuestionAnswers";
import { useState } from "react";
import Card from "../../wrapper/Card";

const Question = ({ question }) => {
  const [SelectedOption, setSelectecOption] = useState("");
  const Isselected = (option) => {
    setSelectecOption(option);
  };
  return (
    <Card question={question}>
      <View style={{ gap: 20 }}>
        {question.options.map((data) => {
          return (
            <QuesyionAnswers
              data={data}
              key={data}
              SelectedOption={SelectedOption === data}
              onpressed={() => Isselected(data)}
            />
          );
        })}
      </View>
    </Card>
  );
};

export default Question;
