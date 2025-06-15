import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import QuestionScreen from "./src/app/QuestionScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <QuestionScreen />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
