import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const QuesyionAnswers = ({ data, onpressed, SelectedOption }) => {
  return (
    <Pressable
      style={[
        styles.container,
        SelectedOption && {
          backgroundColor: "#E1F396",
          borderColor: "#E1F396",
        },
      ]}
      onPress={onpressed}
    >
      <Text>{data}</Text>
    </Pressable>
  );
};

export default QuesyionAnswers;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "lightgray",
    padding: 20,
    borderRadius: 100,
  },
});
