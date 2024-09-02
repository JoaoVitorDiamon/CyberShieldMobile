import { StatusBar } from "expo-status-bar";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SegurancaDeRedes() {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <StatusBar style="dark" />
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 20 }}
      >
        <Image
          className="h-60 w-full rounded-xl shadow-md"
          source={{
            uri: "https://www.selettus.com.br/wp-content/uploads/2021/03/firewall-selettus.jpg",
          }}
        />

        <Text className="text-4xl font-extrabold text-gray-800 mt-6">
          Segurança de Redes
        </Text>

        <Text className="text-lg font-medium text-gray-700 mt-4">
          A <Text className="font-bold">segurança de redes</Text> é uma parte fundamental da segurança da informação que se concentra na proteção de redes de computadores contra acessos não autorizados, ataques e outros tipos de ameaças cibernéticas. Ela visa garantir a integridade, confidencialidade e disponibilidade dos dados enquanto eles são transmitidos através das redes. Aqui estão alguns aspectos chave da segurança de redes:
        </Text>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Firewalls</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Dispositivos ou software que monitoram e controlam o tráfego de rede com base em regras de segurança predefinidas. Eles ajudam a bloquear acessos não autorizados e a proteger a rede contra ataques externos.
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Sistemas de Detecção e Prevenção de Intrusões (IDS/IPS)</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Ferramentas que monitoram o tráfego de rede para detectar e responder a atividades suspeitas e ataques. IDS (Intrusion Detection System) identifica possíveis ameaças, enquanto IPS (Intrusion Prevention System) pode tomar ações para bloquear ataques em tempo real.
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Criptografia de Dados</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Técnica que codifica dados para que apenas partes autorizadas possam lê-los. Protocolos como VPN (Virtual Private Network) utilizam criptografia para proteger dados enquanto são transmitidos através da rede.
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Segmentação de Rede</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Dividir a rede em segmentos menores e isolados para limitar o impacto de um possível ataque. Isso ajuda a controlar o tráfego e a proteger recursos críticos ao reduzir a superfície de ataque.
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Controle de Acesso à Rede</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Implementar políticas e ferramentas para garantir que apenas usuários autorizados possam acessar a rede e seus recursos. Isso inclui o uso de autenticação e autorização para controlar o acesso.
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Monitoramento e Logs</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Acompanhar o tráfego de rede e manter registros de atividades é crucial para identificar e investigar incidentes de segurança. Ferramentas de monitoramento ajudam a detectar comportamentos anômalos e a responder a possíveis ameaças.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
