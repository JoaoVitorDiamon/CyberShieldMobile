import { StatusBar } from "expo-status-bar";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SegurancaDeMobile() {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <StatusBar style="dark" />
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 20 }}
      >
        <Image
          className="h-60 w-full rounded-xl shadow-md"
          source={{
            uri: "https://i0.wp.com/seginfo.com.br/wp-content/uploads/2021/08/smartsecurity-seginfo-1.png?resize=640%2C428&ssl=1",
          }}
        />

        <Text className="text-4xl font-extrabold text-gray-800 mt-6">
          Segurança em Dispositivos Móveis
        </Text>

        <Text className="text-lg font-medium text-gray-700 mt-4">
          A <Text className="font-bold">segurança em dispositivos móveis</Text> é essencial para proteger smartphones e tablets contra ameaças cibernéticas, que podem comprometer dados pessoais e a integridade do dispositivo. À medida que os dispositivos móveis se tornam cada vez mais essenciais para nossa vida cotidiana, garantir sua segurança é fundamental. Aqui estão algumas práticas recomendadas:
        </Text>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Atualizações de Software</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Manter o sistema operacional e os aplicativos atualizados é crucial para proteger contra vulnerabilidades conhecidas. Atualizações frequentemente incluem correções de segurança que ajudam a proteger o dispositivo contra novas ameaças.
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Uso de Senhas e Autenticação</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Configurar senhas fortes e utilizar autenticação biométrica (como impressão digital ou reconhecimento facial) ajuda a proteger o dispositivo contra acessos não autorizados. É uma medida simples, mas eficaz, para manter a segurança.
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Instalação de Aplicativos</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Instale aplicativos apenas de fontes confiáveis, como as lojas oficiais de aplicativos (Google Play Store ou Apple App Store). Evite baixar aplicativos de sites não verificados, que podem conter malware.
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Gerenciamento de Permissões</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Revise as permissões concedidas aos aplicativos e desative aquelas que não são necessárias. Muitos aplicativos solicitam acesso a informações ou recursos que não são essenciais para sua função principal.
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Segurança da Rede</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Use conexões seguras, como redes Wi-Fi protegidas por senha, e evite usar redes públicas ou desconhecidas. Utilize VPNs (Redes Virtuais Privadas) para criptografar sua conexão e proteger seus dados enquanto navega na internet.
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Backup de Dados</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Realize backups regulares dos dados do seu dispositivo para proteger contra perda de informações importantes em caso de perda, roubo ou falha do dispositivo. Utilize serviços de backup em nuvem ou soluções de armazenamento externo.
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Segurança Física</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Proteja o dispositivo fisicamente para evitar roubos ou acessos não autorizados. Utilize capas e suportes de segurança e, se possível, configure o rastreamento e a localização do dispositivo em caso de perda.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
