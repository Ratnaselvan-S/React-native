import { View, Text, StyleSheet } from "react-native";

const Card = ({ question, children }) => {
  return (
    <View style={styles.containerCard}>
      <Text style={styles.ContainerQuestion}>{question.title}</Text>
      {children}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  containerCard: {
    borderRadius: 20,
    backgroundColor: "white",
    padding: 20,
    paddingVertical: 40,
    gap: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  ContainerQuestion: {
    fontSize: 24,
    fontWeight: 500,
    lineHeight: 30,
  },
});
