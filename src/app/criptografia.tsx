import { StatusBar } from "expo-status-bar";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Criptografia() {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <StatusBar style="dark" />
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 20 }}
      >
        <Image
          className="h-60 w-full rounded-xl shadow-md"
          source={{
            uri: "https://www.kaspersky.com.br/content/pt-br/images/repository/isc/2021/encryption-1.jpg",
          }}
        />

        <Text className="text-4xl font-extrabold text-gray-800 mt-6">
          Criptografia
        </Text>

        <Text className="text-lg font-medium text-gray-700 mt-4">
          A <Text className="font-bold">criptografia</Text> é uma técnica fundamental para a segurança da informação, que visa proteger dados contra acessos não autorizados e garantir a confidencialidade e integridade das informações. Ela utiliza algoritmos matemáticos para codificar dados, tornando-os ininteligíveis para qualquer pessoa que não possua a chave correta para decodificação.
        </Text>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Tipos de Criptografia</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Existem dois principais tipos de criptografia: simétrica e assimétrica.
            <Text className="font-bold"> Criptografia Simétrica</Text>: Usa a mesma chave para criptografar e descriptografar dados. A segurança depende da proteção dessa chave. Exemplos incluem AES (Advanced Encryption Standard) e DES (Data Encryption Standard).
            {"\n"}
            <Text className="font-bold"> Criptografia Assimétrica</Text>: Utiliza um par de chaves, uma pública e uma privada. A chave pública criptografa os dados, enquanto a chave privada descriptografa. Exemplos incluem RSA (Rivest-Shamir-Adleman) e ECC (Elliptic Curve Cryptography).
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Criptografia em Comunicação</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            A criptografia é amplamente utilizada para proteger a comunicação na internet. Protocolos como SSL (Secure Sockets Layer) e TLS (Transport Layer Security) garantem que as informações trocadas entre navegadores e servidores sejam seguras e privadas.
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Criptografia de Dados em Repouso</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Dados armazenados em dispositivos e servidores também podem ser criptografados para evitar acessos não autorizados. Isso inclui criptografia de discos, arquivos e bancos de dados, garantindo que mesmo se os dados forem acessados fisicamente, eles permaneçam protegidos.
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Importância da Criptografia</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            A criptografia é essencial para proteger dados sensíveis contra espionagem, roubo e manipulação. Ela é uma das bases da segurança digital moderna e ajuda a garantir a privacidade e a integridade das informações em diversos contextos, desde transações financeiras até comunicações pessoais.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
