import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  Linking,
} from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
const onButtonPress = () => {
  Linking.openURL("mailto:ratnaselvan.iqtechmax@gmail.com");
};
const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <View style={styles.container}>
        <Image
          source={{
            uri: "https://t4.ftcdn.net/jpg/05/45/42/81/360_F_545428173_uyYWJoR9n5uJFYIWfDa2C49AzIECcU20.jpg",
          }}
          style={{ width: "100%", aspectRatio: 16 / 9 }}
        />
        <Image
          source={require("../assets/thumb16.jpg")}
          style={{
            height: 150,
            width: 150,
            borderRadius: 150,
            borderWidth: 5,
            borderColor: "white",
            marginTop: -75,
          }}
        />

        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Ratna selvan S</Text>
        <Text>Founder of the world</Text>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <FontAwesome6 name="github" size={25} color="black" />
          <FontAwesome6 name="x-twitter" size={25} color="black" />
          <FontAwesome6 name="at" size={25} color="black" />
        </View>
        <View style={{ marginVertical: 20 }}>
          <Button title="Contact me" onPress={onButtonPress} />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={{ color: "black" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam
            aliquam sem et tortor consequat id porta nibh. Pellentesque nec nam
            aliquam sem. Placerat duis ultricies lacus sed. Non curabitur
            gravida arcu ac tortor dignissim convallis aenean. Amet nisl purus
            in mollis nunc. Vel elit scelerisque mauris pellentesque pulvinar
            pellentesque. Sagittis orci a scelerisque purus semper eget duis at
            tellus. Sed libero enim sed faucibus turpis in eu mi bibendum. Duis
            at consectetur lorem donec massa sapien faucibus et molestie. At
            ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget.
            Purus sit amet volutpat consequat mauris nunc congue nisi vitae.
            Urna condimentum mattis pellentesque id nibh tortor id. Consequat id
            porta nibh venenatis. Lectus vestibulum mattis ullamcorper velit sed
            ullamcorper. Mauris a diam maecenas sed enim ut sem. Volutpat
            commodo sed egestas egestas fringilla phasellus. Turpis egestas
            integer eget aliquet nibh praesent tristique magna sit. Congue
            mauris rhoncus aenean vel elit scelerisque. Tellus integer feugiat
            scelerisque varius morbi enim. Consectetur a erat nam at. Bibendum
            arcu vitae elementum curabitur vitae nunc. Sit amet consectetur
            adipiscing elit. Rhoncus mattis rhoncus urna neque viverra justo.
            Malesuada pellentesque elit eget gravida. Vitae nunc sed velit
            dignissim sodales ut eu sem integer.
          </Text>
        </ScrollView>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
  },
});
