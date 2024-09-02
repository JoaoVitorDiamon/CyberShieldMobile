import { StatusBar } from "expo-status-bar";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SegurancaDeComputadores() {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <StatusBar style="dark" />
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 20 }}
      >
        <Image
          className="h-60 w-full rounded-xl shadow-md"
          source={{
            uri: "https://blog.milvus.com.br/wp-content/uploads/Seguranca-de-computadores.png",
          }}
        />

        <Text className="text-4xl font-extrabold text-gray-800 mt-6">
          Segurança de Computadores
        </Text>

        <Text className="text-lg font-medium text-gray-700 mt-4">
          A <Text className="font-bold">segurança de computadores</Text> refere-se às práticas e tecnologias destinadas a proteger sistemas computacionais contra ameaças e ataques que podem comprometer sua integridade, disponibilidade e confidencialidade. A segurança de computadores é essencial para proteger informações valiosas e garantir o funcionamento seguro e eficiente dos sistemas. Aqui estão alguns aspectos importantes:
        </Text>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Proteção Contra Malware</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            O malware, como vírus, worms e trojans, pode danificar sistemas e roubar informações. Utilizar software antivírus e realizar verificações regulares são práticas fundamentais para proteger o computador contra essas ameaças.
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Atualizações de Sistema</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Manter o sistema operacional e aplicativos atualizados é crucial para proteger o computador contra vulnerabilidades conhecidas. Atualizações frequentemente incluem patches de segurança que corrigem falhas e melhoram a proteção contra novas ameaças.
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Gerenciamento de Senhas</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Utilizar senhas fortes e únicas para cada conta e sistema é essencial para prevenir acesso não autorizado. Considere usar um gerenciador de senhas para armazenar e gerar senhas seguras.
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Backup de Dados</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Realizar backups regulares dos dados é uma prática fundamental para proteger informações importantes contra perda devido a falhas de hardware, ataques de ransomware ou outros incidentes.
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Segurança Física</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Garantir que o hardware do computador esteja fisicamente protegido contra acesso não autorizado ou roubo é uma parte importante da segurança de computadores. Utilize trancas, segurança em locais de armazenamento e controle de acesso físico.
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Controle de Acesso</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Implementar controles de acesso para garantir que apenas usuários autorizados possam acessar recursos e dados críticos. Isso inclui o uso de autenticação multifatorial (MFA) e permissões adequadas.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
