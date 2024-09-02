import { StatusBar } from "expo-status-bar";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function UsoSeguroDaInternet() {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <StatusBar style="dark" />
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 20 }}
      >
        <Image
          className="h-60 w-full rounded-xl shadow-md"
          source={{
            uri: "https://static.vecteezy.com/ti/fotos-gratis/t1/8015892-ciberseguranca-rede-cadeado-icone-e-tecnologia-internet-rede-empresario-protegendo-dados-informacoes-pessoais-no-tablet-e-interface-virtual-protecao-de-dados-conceito-gdpr-eu-gratis-foto.jpg",
          }}
        />

        <Text className="text-4xl font-extrabold text-gray-800 mt-6">
          Uso Seguro da Internet
        </Text>

        <Text className="text-lg font-medium text-gray-700 mt-4">
          O <Text className="font-bold">uso seguro da Internet</Text> é crucial para proteger sua privacidade e evitar ameaças cibernéticas. Envolve a adoção de boas práticas para garantir que suas atividades online não comprometam sua segurança nem exponham suas informações pessoais a riscos. A seguir, estão algumas orientações essenciais para um uso seguro da Internet:
        </Text>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Navegação Segura</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Certifique-se de visitar apenas sites confiáveis e seguros. Verifique se a URL começa com "https://" e procure por ícones de cadeado na barra de endereços, indicando que a conexão é criptografada.
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Cuidado com Informações Pessoais</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Evite compartilhar informações pessoais, como números de CPF, endereços e detalhes financeiros em sites não confiáveis ou desconhecidos. Além disso, seja cauteloso ao divulgar essas informações em redes sociais.
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Reconhecimento de Phishing</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Desconfie de e-mails, mensagens ou links que solicitam informações pessoais ou financeiras. Verifique sempre a autenticidade dos remetentes e não clique em links suspeitos ou baixe anexos de fontes desconhecidas.
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Atualização de Software</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Mantenha seu sistema operacional, aplicativos e antivírus atualizados para garantir que você esteja protegido contra as últimas ameaças e vulnerabilidades conhecidas.
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Uso de Senhas Fortes</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Utilize senhas fortes e únicas para cada conta online. Considere o uso de um gerenciador de senhas para armazenar e gerar senhas complexas de forma segura.
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Segurança em Redes Wi-Fi</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Proteja suas redes Wi-Fi com senhas fortes e não compartilhe a senha com pessoas não autorizadas. Desative a transmissão do SSID se possível e use criptografia WPA3 para maior segurança.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
