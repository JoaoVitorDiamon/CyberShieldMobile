import { StatusBar } from "expo-status-bar";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Privacidade() {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <StatusBar style="dark" />
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 20 }}
      >
        <Image
          className="h-60 w-full rounded-xl shadow-md"
          source={{
            uri: "https://fastcompanybrasil.com/wp-content/uploads/2022/11/privacidade_direito.jpg",
          }}
        />

        <Text className="text-4xl font-extrabold text-gray-800 mt-6">
          Privacidade
        </Text>

        <Text className="text-lg font-medium text-gray-700 mt-4">
          A <Text className="font-bold">privacidade</Text> na internet refere-se ao direito de manter suas informações pessoais e atividades online protegidas contra acesso não autorizado e uso indevido. Com o aumento das interações digitais, proteger a privacidade se tornou uma preocupação central para usuários e organizações. Aqui estão alguns aspectos importantes da privacidade online:
        </Text>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Proteção de Dados Pessoais</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            É essencial garantir que suas informações pessoais, como nome, endereço, e-mail e dados financeiros, sejam coletadas e armazenadas de forma segura. Isso inclui saber como suas informações são usadas por sites e serviços e exigir que sejam protegidas contra vazamentos e acessos não autorizados.
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Controle de Informações</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Utilize configurações de privacidade em redes sociais e outros serviços para gerenciar quem pode ver suas informações e atividades. Revise e ajuste regularmente suas configurações de privacidade para garantir que apenas pessoas autorizadas tenham acesso às suas informações.
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Consentimento e Transparência</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Sempre leia as políticas de privacidade dos sites e aplicativos antes de fornecer suas informações. Certifique-se de que você compreende como seus dados serão usados e se você tem a opção de dar ou retirar seu consentimento para o processamento dos mesmos.
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Segurança em Comunicações</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Use métodos seguros para comunicar informações sensíveis. Aplicativos de mensagens que oferecem criptografia de ponta a ponta garantem que apenas você e o destinatário possam ler as mensagens trocadas.
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Proteção contra Rastreamento</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Utilize ferramentas e configurações que ajudam a limitar o rastreamento de suas atividades online, como bloqueadores de cookies e extensões de navegador que protegem sua privacidade.
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Direitos e Regulamentações</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Conheça os seus direitos relacionados à privacidade, como os previstos na Lei Geral de Proteção de Dados (LGPD) no Brasil ou no Regulamento Geral sobre a Proteção de Dados (GDPR) na União Europeia. Esses regulamentos garantem proteção adicional e direitos sobre o uso de suas informações pessoais.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
