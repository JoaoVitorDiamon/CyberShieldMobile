import { StatusBar } from "expo-status-bar";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Riscos() {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <StatusBar style="dark" />
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 20 }}
      >
        <Image
          className="h-60 w-full rounded-xl shadow-md"
          source={{
            uri: "https://www.segs.com.br/media/k2/items/cache/4295a4d1a1fb6a25f1902a99584030eb_XL.jpg",
          }}
        />

        <Text className="text-4xl font-extrabold text-gray-800 mt-6">
          Outros Riscos na Internet
        </Text>

        <Text className="text-lg font-medium text-gray-700 mt-4">
          Além dos riscos comuns como vírus e phishing, existem outros tipos de
          ameaças e desafios na internet que podem comprometer a segurança e a
          privacidade dos usuários. Estes riscos podem variar de questões
          relacionadas à proteção de dados até desafios específicos de
          navegabilidade. Abaixo estão alguns dos principais riscos que você deve
          estar ciente:
        </Text>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Roubo de Identidade</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Ocorre quando informações pessoais são roubadas e usadas de forma
            fraudulenta para se passar por outra pessoa. Pode levar a perdas
            financeiras, danos à reputação e complicações legais.
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Exposição de Dados Pessoais</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            A exposição não autorizada de informações pessoais, como endereço,
            número de telefone e detalhes financeiros, pode resultar em
            invasões de privacidade e uso indevido dessas informações por
            terceiros.
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Ataques de Engenharia Social</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Técnicas usadas por criminosos para manipular e enganar os usuários
            a revelar informações confidenciais, como senhas e dados pessoais,
            por meio de métodos de persuasão psicológica e social.
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Exploração de Vulnerabilidades</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            A exploração de falhas de segurança em software e sistemas para
            obter acesso não autorizado ou comprometer a integridade dos dados.
            Isso pode incluir falhas em aplicações, sistemas operacionais e
            dispositivos.
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Desinformação e Fake News</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            A disseminação de informações falsas ou enganosas com o objetivo de
            manipular a opinião pública, gerar pânico ou influenciar decisões de
            maneira fraudulenta.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
