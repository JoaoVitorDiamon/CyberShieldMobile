import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, TouchableOpacity, View, Image } from "react-native";
import Animated, { FadeInDown, FadeInUp, BounceOut } from "react-native-reanimated";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Ionicons } from '@expo/vector-icons';

interface Topic {
  title: string;
  description: string;
  image: string;
  route: string;
}

const topics: Topic[] = [
  { title: "Quiz sobre Seguranca", description: "Teste seus conhecimentos e aprenda sobre as melhores práticas para se proteger online! Neste quiz, você enfrentará situações reais que abrangem desde senhas seguras e phishing até proteção de dados e privacidade.", image: "https://blog.certisign.com.br/wp-content/uploads/2017/01/seguranca-de-dados-na-internet1200x630.jpg", route: "/splashQuiz" },
  { title: "CyberGuard", description: "No papel de um guardião cibernético, você enfrentará uma série de decisões cruciais para proteger o reino digital de ameaças invisíveis. Cada deslize para a esquerda ou direita representa uma escolha que pode fortalecer ou comprometer a segurança do seu domínio online.", image: "https://static.vecteezy.com/ti/fotos-gratis/p1/24041320-uma-cyborg-segurando-uma-futurista-espada-com-escudo-digital-arte-estilo-generativo-ai-foto.jpg", route: "/cyberGuard" },
];

export default function Games() {
  const [readTopics, setReadTopics] = useState<Set<number>>(new Set());
  const router = useRouter();

  const handlePress = (route: string, index: number) => {
    router.push(route as any); 
    setReadTopics((prev) => new Set(prev).add(index));
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 20 }}>
        <StatusBar style="dark" />
        <Animated.Text
          entering={FadeInDown.delay(100).duration(1000).springify()}
          className="text-3xl text-center mt-10 font-bold text-gray-900"
        >
          Jogos Sobre Segurança na Internet
        </Animated.Text>

        {topics.map((topic, index) => (
          <Animated.View
            key={index}
            entering={FadeInUp.delay(100 * index).duration(800).springify()}
            exiting={BounceOut.duration(300)}
            className="mb-6"
          >
            <TouchableOpacity
              onPress={() => handlePress(topic.route, index)}
              style={{ position: 'relative', overflow: 'hidden', borderRadius: 16, marginVertical: 8 }}
            >
              <Image
                source={{ uri: topic.image }}
                style={{ width: '100%', height: 200, borderRadius: 16 }}
              />
              <View
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  padding: 16,
                  borderTopRightRadius: 16,
                  borderTopLeftRadius: 16,
                }}
              >
                <Text className="text-lg font-semibold text-white">{topic.title}</Text>
                <Text className="text-sm text-white mt-1">{topic.description}</Text>
                {readTopics.has(index) && (
                  <View style={{ position: 'absolute', top: 8, right: 8 }}>
                    <Ionicons name="checkmark-circle" size={24} color="green" />
                  </View>
                )}
              </View>
            </TouchableOpacity>
          </Animated.View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
