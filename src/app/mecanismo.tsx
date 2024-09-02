import { StatusBar } from "expo-status-bar";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Mecanismo() {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <StatusBar style="dark" />
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 20 }}
      >
        <Image
          className="h-60 w-full rounded-xl shadow-md"
          source={{
            uri: "https://i0.wp.com/gestaodesegurancaprivada.com.br/wp-content/uploads/Sistema-de-Seguranca-Empresarial.jpg?fit=1280%2C720&ssl=1",
          }}
        />

        <Text className="text-4xl font-extrabold text-gray-800 mt-6">
          Mecanismos de Segurança
        </Text>

        <Text className="text-lg font-medium text-gray-700 mt-4">
          Os <Text className="font-bold">mecanismos de segurança</Text> são
          ferramentas e práticas projetadas para proteger sistemas de
          computadores e redes contra ameaças e ataques. Eles garantem a
          integridade, confidencialidade e disponibilidade dos dados e sistemas.
          Abaixo estão alguns dos principais mecanismos de segurança utilizados
          para proteger ambientes digitais:
        </Text>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Firewalls</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Dispositivos ou softwares que monitoram e controlam o tráfego de
            rede, permitindo ou bloqueando comunicações com base em regras de
            segurança predefinidas. Eles ajudam a prevenir acessos não
            autorizados e ataques externos.
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Antivírus</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Programas que detectam, previnem e removem malware, como vírus,
            worms e trojans. Eles escaneiam arquivos e atividades do sistema
            para identificar e neutralizar ameaças antes que causem danos.
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Sistemas de Detecção de Intrusões (IDS)</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Ferramentas que monitoram atividades de rede e sistema para
            identificar comportamentos anômalos e possíveis ataques. Os IDS
            podem alertar administradores sobre atividades suspeitas e
            potenciais brechas de segurança.
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Criptografia</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Técnica que codifica dados para que apenas partes autorizadas possam
            acessá-los. A criptografia é usada para proteger comunicações e
            informações sensíveis durante a transmissão e armazenamento.
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Autenticação Multifatorial (MFA)</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Método de segurança que requer mais de uma forma de verificação para
            acessar sistemas e dados. Além da senha, pode incluir um código
            enviado por SMS ou um token gerado por um aplicativo de autenticação.
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Gerenciamento de Identidades e Acessos (IAM)</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Sistema que controla quais usuários e sistemas têm acesso a quais
            recursos e dados. O IAM garante que apenas usuários autorizados
            possam acessar informações e funções específicas dentro de uma
            organização.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
