import { StatusBar } from "expo-status-bar";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AtaquesNaInternet() {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <StatusBar style="dark" />
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 20 }}
      >
        <Image
          className="h-60 w-full rounded-xl shadow-md"
          source={{
            uri: "https://blog.ehcgroup.io/wp-content/uploads/2020/07/screenshot.10493.jpg?v=1594911820",
          }}
        />

        <Text className="text-4xl font-extrabold text-gray-800 mt-6">
          Ataques na Internet
        </Text>

        <Text className="text-lg font-medium text-gray-700 mt-4">
          Ataques na internet são ações maliciosas projetadas para comprometer
          a segurança de sistemas, redes e dados. Esses ataques podem ter
          diferentes objetivos, desde causar danos até obter acesso não
          autorizado a informações sensíveis. Abaixo, estão alguns dos tipos
          mais comuns de ataques que afetam a segurança online:
        </Text>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Ataques DDoS</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Ataques de negação de serviço distribuído (DDoS) visam sobrecarregar um
            servidor ou rede com um grande volume de tráfego, tornando-os
            inacessíveis para usuários legítimos. Esses ataques podem causar
            interrupções significativas nos serviços online.
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Exploração de Vulnerabilidades</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Ataques que exploram falhas ou fraquezas em software ou sistemas para obter
            acesso não autorizado ou comprometer a segurança. Isso pode incluir
            ataques de injeção de SQL, execução remota de código e outros métodos
            para explorar brechas de segurança.
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Ataques de Man-in-the-Middle</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Ataques onde o invasor intercepta e possivelmente altera a comunicação
            entre duas partes sem que elas saibam. Isso pode resultar em roubo de
            informações sensíveis ou inserção de dados maliciosos na comunicação.
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Exploração de Senhas Fracas</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Ataques que visam obter acesso não autorizado a sistemas ou contas por
            meio da exploração de senhas fracas ou comprometidas. Isso pode envolver
            técnicas como força bruta ou dicionário para descobrir senhas.
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Ataques de Cross-Site Scripting (XSS)</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Ataques que injetam scripts maliciosos em sites legítimos para executar
            código no navegador dos visitantes. Esses scripts podem roubar dados ou
            realizar ações não autorizadas em nome do usuário.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
