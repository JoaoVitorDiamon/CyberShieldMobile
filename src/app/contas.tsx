import { StatusBar } from "expo-status-bar";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Contas() {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <StatusBar style="dark" />
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 20 }}
      >
        <Image
          className="h-60 w-full rounded-xl shadow-md"
          source={{
            uri: "https://blogmarketup.files.wordpress.com/2014/08/488640953.jpg",
          }}
        />

        <Text className="text-4xl font-extrabold text-gray-800 mt-6">
          Contas e Senhas
        </Text>

        <Text className="text-lg font-medium text-gray-700 mt-4">
          Manter a segurança das <Text className="font-bold">contas e senhas</Text> é fundamental para proteger suas informações pessoais e evitar acesso não autorizado a serviços e dados sensíveis. Aqui estão algumas práticas e conceitos importantes para garantir a segurança das suas contas e senhas:
        </Text>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Criação de Senhas Fortes</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Senhas fortes devem ter pelo menos 12 caracteres e incluir uma combinação de letras maiúsculas, minúsculas, números e símbolos especiais. Evite usar informações pessoais óbvias e escolha senhas únicas para cada conta.
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Uso de Gerenciadores de Senhas</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Gerenciadores de senhas ajudam a criar, armazenar e preencher senhas complexas de forma segura. Eles permitem que você mantenha senhas únicas para cada serviço sem precisar memorizá-las todas.
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Autenticação Multifatorial (MFA)</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            A MFA adiciona uma camada extra de segurança ao exigir um segundo fator de autenticação além da senha. Isso pode incluir códigos enviados por SMS, e-mails ou gerados por aplicativos de autenticação.
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Atualização Regular de Senhas</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Alterar suas senhas regularmente ajuda a minimizar os riscos caso uma senha seja comprometida. Certifique-se de atualizar suas senhas em serviços críticos e não reutilizar senhas antigas.
          </Text>
        </View>

        <View className="mt-6">
          <Text className="text-2xl font-bold text-gray-800">Reconhecimento de Phishing</Text>
          <Text className="text-base font-normal text-gray-600 mt-2">
            Tenha cuidado com e-mails ou mensagens que solicitam informações pessoais ou de login. Verifique a autenticidade do remetente e evite clicar em links suspeitos ou fornecer suas credenciais a fontes não verificadas.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
