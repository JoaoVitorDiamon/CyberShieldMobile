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
import Animated,{ FadeIn, FadeInDown, FadeInUp, FadeOut } from "react-native-reanimated";
import { router } from "expo-router";


export default function SplashQuiz() {
  return (
    <SafeAreaView className=" ">
      <View className="flex items-center">
        <View className="mb-16">
          <Animated.Image entering={FadeInUp.delay(200).duration(1000).springify()}
            style={{ width: 400, height: 300, marginBottom: 10 }}
            resizeMode="center"
            source={require("../../assets/images/boygirl.png")}
          />
        </View>
        <Animated.Text entering={FadeInUp.duration(1000).springify()}
          style={{
            fontWeight: "bold",
            fontSize: 24,
            textAlign: "center",
            color: "black",
            letterSpacing: 0.5,
            marginBottom: 18,
          }}
        >
          Instruções
        </Animated.Text>
        <Animated.View entering={FadeInUp.duration(800).springify()} style={styles.container}>
          <Animated.Text entering={FadeInUp.duration(1000).springify()}
            style={{
              fontWeight: "bold",
              fontSize: 16,
              textAlign: "center",
              color: "#FFFFFF",
              letterSpacing: 0.5,
            }}
          >
            Teste seus conhecimentos sobre segurança na internet! Leia cada
            pergunta com atenção, escolha a resposta correta, boa sorte!
          </Animated.Text>
        </Animated.View>

        <Animated.View entering={FadeInUp.duration(800).springify()}>
          <TouchableOpacity style={styles.botao} onPress={() => router.push('/quizGame')}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 16,
                textAlign: "center",
                color: "#FFFFFF",
                letterSpacing: 0.5,
              }}
            >
              Iniciar o quiz!
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
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
  botao: {
    textAlign: "center",
    backgroundColor: "#4A148C",
    padding: 20,
    marginTop: 70,
    borderRadius: 10,
    width: "40%",
    height: 60,
  },
});
