import { StatusBar } from "expo-status-bar";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Spam() {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <StatusBar style="dark" />
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 20 }}
      >
        <Image
          className="h-60 w-full rounded-xl shadow-md"
          source={{
            uri: "https://br.howtofix.guide/wp-content/uploads/2023/04/HowToFix_What-is-spam_-1140x641.webp",
          }}
        />

        <Text className="text-4xl font-extrabold text-gray-800 mt-6">
          Spam
        </Text>

        <Text className="text-lg font-medium text-gray-700 mt-4">
          O <Text className="font-bold">spam</Text> é uma prática de envio
          não solicitado de mensagens, geralmente em grande quantidade, com
          objetivos variados como publicidade, fraudes ou distribuição de
          malware. Esse tipo de prática pode ser muito incômoda e até mesmo
          perigosa para a segurança do usuário. Abaixo estão alguns dos
          principais tipos de spam e suas características:
        </Text>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Spam por E-mail</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Mensagens enviadas em massa para e-mails de usuários, frequentemente
            contendo ofertas de produtos ou serviços duvidosos, ou tentando
            enganar o usuário para obter informações pessoais ou financeiras.
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Spam em Redes Sociais</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Mensagens indesejadas postadas em plataformas de redes sociais, que
            podem promover produtos falsos, links fraudulentos ou ataques de
            phishing. Essas mensagens geralmente são enviadas por perfis
            falsos ou automatizados.
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Spam por Mensagens Instantâneas</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Mensagens enviadas por aplicativos de mensagens, como SMS ou
            plataformas de chat, contendo ofertas comerciais não solicitadas ou
            links suspeitos. Esses spams podem ser usados para promover
            produtos, coletar dados pessoais ou distribuir malware.
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Spam em Comentários de Blogs e Fóruns</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Comentários indesejados em blogs ou fóruns com links para sites
            externos, geralmente com o objetivo de gerar tráfego para sites
            fraudulentos ou promover produtos e serviços não solicitados.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
