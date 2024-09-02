import { StatusBar } from "expo-status-bar";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CodigosMaliciosos() {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <StatusBar style="dark" />
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 20 }}
      >
        <Image
          className="h-60 w-full rounded-xl shadow-md"
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqfQPawwmVnlwJs8N5OTOLEI7cpTXR7MLE_Q&s",
          }}
        />

        <Text className="text-4xl font-extrabold text-gray-800 mt-6">
          Códigos Maliciosos
        </Text>

        <Text className="text-lg font-medium text-gray-700 mt-4">
          Códigos maliciosos são programas ou scripts desenvolvidos para causar
          danos, roubar informações ou comprometer a segurança de sistemas e
          dados. Esses códigos podem se manifestar de várias formas e têm o
          potencial de causar graves prejuízos. Abaixo estão alguns dos principais
          tipos de códigos maliciosos que você deve conhecer:
        </Text>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Vírus</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Programas que se replicam e se espalham para outros arquivos e
            sistemas, geralmente causando danos ao corromper arquivos ou
            afetar o desempenho do sistema. Podem se espalhar através de
            e-mails, downloads ou dispositivos removíveis.
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Worms</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Programas autônomos que se propagam automaticamente pela rede,
            explorando vulnerabilidades para infectar outros sistemas. Ao
            contrário dos vírus, os worms não precisam se anexar a um arquivo
            para se espalhar.
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Trojans</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Programas maliciosos que se disfarçam de software legítimo para
            enganar os usuários e permitir o acesso não autorizado aos sistemas.
            Trojans podem roubar informações, instalar malware adicional ou
            criar portas de entrada para ataques futuros.
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Spyware</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Programas que monitoram e coletam informações sobre o usuário sem
            seu conhecimento. Spyware pode capturar dados pessoais, como
            histórico de navegação e informações de login, e enviá-los para
            terceiros.
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Ransomware</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Tipo de malware que criptografa os arquivos do usuário e exige um
            pagamento para a liberação dos dados. Pode causar graves danos ao
            bloquear o acesso a arquivos e sistemas críticos.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
