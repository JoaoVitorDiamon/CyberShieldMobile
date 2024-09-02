import {
  Pressable,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Svg from "react-native-svg";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
  FadeOut,
} from "react-native-reanimated";
import { router, useLocalSearchParams } from "expo-router";
import { scores } from "./quizGame";

export default function Score() {
  return (
    <SafeAreaView className=" ">
      <Animated.View entering={FadeInUp.duration(800).springify()} className="flex items-center">
        <Animated.View className="mb-16">
          <Animated.Image
            entering={FadeInUp.delay(200).duration(1000).springify()}
            style={{ width: 400, height: 300, marginBottom: 10 }}
            resizeMode="center"
            source={require("../../assets/images/boygirl.png")}
          />
        </Animated.View>
        <Animated.View entering={FadeInUp.duration(800).springify()} style={styles.container}>
          <Animated.Text entering={FadeInUp.duration(1000).springify()}  style={styles.text}>Sua Pontuação Final:</Animated.Text>
          <Animated.Text entering={FadeInUp.duration(1300).springify()} style={styles.score}>{scores}</Animated.Text>
        </Animated.View>

        <Pressable
          style={styles.button}
          onPress={() => router.replace("/quizGame")}
        >
          <Animated.Text entering={FadeInDown.duration(1500).springify()} style={styles.buttonText}>Jogar Novamente!</Animated.Text>
        </Pressable>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4A148C",
    padding: 28,
    borderRadius: 20,
    width: "85%",
    height: 130,
  },
  button: {
    backgroundColor: "#6B46C1", 
    padding: 12,
    borderRadius: 8, 
    marginTop: 128, 
    alignItems: "center", 
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "500", 
    fontSize: 16, 
  },
  text: {
    fontSize: 24,
    color:"white",
    textAlign:"center",
    fontWeight: "bold",
  },
  score: {
    fontSize: 36,
    textAlign:"center",
    fontWeight: "bold",
    color: "#4CAF50", 
  },
});
