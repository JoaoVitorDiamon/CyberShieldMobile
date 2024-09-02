import { StatusBar } from "expo-status-bar";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SegurancaNaInternet() {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <StatusBar style="dark" />
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 20 }}
      >
        <Image
          className="h-60 w-full rounded-xl shadow-md"
          source={{
            uri: "https://www.lumiun.com/blog/wp-content/uploads/O-que-e-e-por-que-a-seguranca-na-internet-e-importante-800x472.jpg",
          }}
        />

        <Text className="text-4xl font-extrabold text-gray-800 mt-6">
          Segurança na Internet
        </Text>

        <Text className="text-lg font-medium text-gray-700 mt-4">
          Segurança na internet é um campo abrangente dedicado à proteção de
          dados e sistemas digitais contra uma ampla gama de ameaças
          cibernéticas. Esse campo envolve a implementação de práticas e
          tecnologias para garantir a integridade, confidencialidade e
          disponibilidade das informações enquanto elas são transmitidas e
          armazenadas na web. A segurança na internet abrange diversos aspectos,
          incluindo:
        </Text>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">
            Proteção de Dados Pessoais
          </Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Inclui a proteção de informações pessoais e sensíveis, como dados de
            identificação, informações bancárias e dados de saúde, contra acesso
            não autorizado, vazamentos e roubos.
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">
            Segurança de Redes
          </Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Envolve medidas para proteger redes de computadores contra invasões,
            ataques e outros riscos. Isso inclui o uso de firewalls, sistemas de
            detecção e prevenção de intrusões (IDS/IPS), e protocolos de
            criptografia para proteger dados em trânsito.
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Criptografia</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Técnica fundamental que codifica informações para que apenas partes
            autorizadas possam lê-las. Protocolos como SSL/TLS são usados para
            criptografar a comunicação entre navegadores e servidores,
            garantindo que as informações transmitidas permaneçam seguras e
            privadas.
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">
            Autenticação e Controle de Acesso
          </Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Processos que garantem que apenas usuários autorizados possam
            acessar determinados sistemas e informações. Métodos como senhas
            fortes, autenticação multifatorial (MFA) e gerenciamento de
            identidades e acessos (IAM) são cruciais para evitar acessos não
            autorizados.
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">
            Proteção Contra Malware
          </Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Inclui a detecção e remoção de softwares maliciosos, como vírus,
            worms e trojans, que podem comprometer a segurança dos sistemas e
            dados.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
