import { StatusBar } from "expo-status-bar";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function GolpesNaInternet() {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 20 }}>
        <Image
          className="h-60 w-full rounded-xl shadow-md"
          source={{
            uri: "https://www.institutoclaro.org.br/cidadania/wp-content/uploads/sites/3/2020/05/Destaque_15-golpes-recorrentes-na-internet.jpg",
          }}
        />
        
        <Text className="text-4xl font-extrabold text-gray-800 mt-6">
          Golpes na Internet
        </Text>
        
        <Text className="text-lg font-medium text-gray-700 mt-4">
          A internet, apesar de ser uma ferramenta poderosa, também é um terreno fértil para golpes e fraudes. Esses golpes podem variar desde tentativas de roubo de identidade até fraudes financeiras sofisticadas. Abaixo, abordamos alguns dos principais tipos de golpes que os usuários devem conhecer e evitar:
        </Text>
        
        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Phishing</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Técnica de fraude em que criminosos se passam por entidades confiáveis para obter informações pessoais sensíveis, como senhas e dados bancários. Normalmente, isso é feito por e-mails falsos ou sites fraudulentos que imitam organizações legítimas.
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Ransomware</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Tipo de malware que criptografa os arquivos do usuário e exige um resgate para a liberação dos dados. Pode causar danos significativos ao bloquear o acesso a arquivos importantes e sistemas.
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Scams de Suporte Técnico</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Golpes em que os criminosos fingem ser representantes de suporte técnico para enganar as vítimas e obter acesso remoto aos seus dispositivos, frequentemente para instalar malware ou roubar informações.
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Fraude em Compras Online</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Golpes que ocorrem em sites de comércio eletrônico falsos ou comprometidos, onde os usuários são enganados a pagar por produtos que nunca serão entregues ou por ofertas que não existem.
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Golpes em Redes Sociais</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Fraudes realizadas em plataformas de redes sociais, onde os golpistas criam perfis falsos ou usam mensagens enganosas para explorar as vítimas e obter informações pessoais ou financeiras.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
