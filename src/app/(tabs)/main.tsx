import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, TouchableOpacity, View, Image } from "react-native";
import Animated, { FadeInDown, FadeInUp, BounceOut } from "react-native-reanimated";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Ionicons } from '@expo/vector-icons';

interface Topic {
  title: string;
  description: string;
  image: string;
  route: string;
}

const topics: Topic[] = [
  { title: "Segurança na Internet", description: "A segurança da Internet é um ramo da segurança de computadores. Abrange a Internet, a segurança do navegador", image: "https://www.lumiun.com/blog/wp-content/uploads/O-que-e-e-por-que-a-seguranca-na-internet-e-importante-800x472.jpg", route: "/segurancaNaInternet" },
  { title: "Golpes na Internet", description: "Conheça os principais golpes online e como se proteger deles.", image: "https://www.institutoclaro.org.br/cidadania/wp-content/uploads/sites/3/2020/05/Destaque_15-golpes-recorrentes-na-internet.jpg", route: "/golpesNaInternet" },
  { title: "Ataques na Internet", description: "Descubra os tipos mais comuns de ataques virtuais e suas consequências.", image: "https://blog.ehcgroup.io/wp-content/uploads/2020/07/screenshot.10493.jpg?v=1594911820", route: "/ataquesNaInternet" },
  { title: "Códigos Maliciosos", description: "Entenda como malwares operam e afetam a segurança digital.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqfQPawwmVnlwJs8N5OTOLEI7cpTXR7MLE_Q&s", route: "/codigosMaliciosos" },
  { title: "Spam", description: "Saiba como identificar e evitar mensagens indesejadas na internet.", image: "https://br.howtofix.guide/wp-content/uploads/2023/04/HowToFix_What-is-spam_-1140x641.webp", route: "/spam" },
  { title: "Outros Riscos", description: "Explore diversos outros riscos associados ao uso da internet.", image: "https://www.segs.com.br/media/k2/items/cache/4295a4d1a1fb6a25f1902a99584030eb_XL.jpg", route: "/riscos" },
  { title: "Mecanismos de Segurança", description: "Descubra as ferramentas e práticas para proteger suas informações online.", image: "https://i0.wp.com/gestaodesegurancaprivada.com.br/wp-content/uploads/Sistema-de-Seguranca-Empresarial.jpg?fit=1280%2C720&ssl=1", route: "/mecanismo" },
  { title: "Contas e Senhas", description: "Dicas para criar senhas fortes e proteger suas contas online.", image: "https://blogmarketup.files.wordpress.com/2014/08/488640953.jpg", route: "/contas" },
  { title: "Criptografia", description: "Como a criptografia protege seus dados e comunicações na internet.", image: "https://www.kaspersky.com.br/content/pt-br/images/repository/isc/2021/encryption-1.jpg", route: "/criptografia" },
  { title: "Uso Seguro da Internet", description: "Boas práticas para navegar na internet de forma segura.", image: "https://static.vecteezy.com/ti/fotos-gratis/t1/8015892-ciberseguranca-rede-cadeado-icone-e-tecnologia-internet-rede-empresario-protegendo-dados-informacoes-pessoais-no-tablet-e-interface-virtual-protecao-de-dados-conceito-gdpr-eu-gratis-foto.jpg", route: "/usoSeguro" },
  { title: "Privacidade", description: "Aprenda a manter sua privacidade protegida online.", image: "https://fastcompanybrasil.com/wp-content/uploads/2022/11/privacidade_direito.jpg", route: "/privacidade" },
  { title: "Segurança de Computadores", description: "Estratégias para proteger seu computador contra ameaças.", image: "https://blog.milvus.com.br/wp-content/uploads/Seguranca-de-computadores.png", route: "/segurancaDeComputadores" },
  { title: "Segurança de Redes", description: "Como manter suas redes seguras contra invasões e ataques.", image: "https://www.selettus.com.br/wp-content/uploads/2021/03/firewall-selettus.jpg", route: "/segurancaDeRedes" },
  { title: "Segurança em Dispositivos Móveis", description: "Proteja seus dispositivos móveis contra ameaças digitais.", image: "https://i0.wp.com/seginfo.com.br/wp-content/uploads/2021/08/smartsecurity-seginfo-1.png?resize=640%2C428&ssl=1", route: "/segurancaDeMobile" },
];

export default function Main() {
  const [readTopics, setReadTopics] = useState<Set<number>>(new Set());
  const router = useRouter();

  const handlePress = (route: string, index: number) => {
    router.push(route as any); 
    setReadTopics((prev) => new Set(prev).add(index));
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 20 }}>
        <StatusBar style="dark" />
        <Animated.Text
          entering={FadeInDown.delay(100).duration(1000).springify()}
          className="text-3xl text-center mt-10 font-bold text-gray-900"
        >
          Tópicos Sobre Segurança na Internet
        </Animated.Text>

        {topics.map((topic, index) => (
          <Animated.View
            key={index}
            entering={FadeInUp.delay(100 * index).duration(800).springify()}
            exiting={BounceOut.duration(300)}
            className="mb-6"
          >
            <TouchableOpacity
              onPress={() => handlePress(topic.route, index)}
              style={{ position: 'relative', overflow: 'hidden', borderRadius: 16, marginVertical: 8 }}
            >
              <Image
                source={{ uri: topic.image }}
                style={{ width: '100%', height: 200, borderRadius: 16 }}
              />
              <View
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  padding: 16,
                  borderTopRightRadius: 16,
                  borderTopLeftRadius: 16,
                }}
              >
                <Text className="text-lg font-semibold text-white">{topic.title}</Text>
                <Text className="text-sm text-white mt-1">{topic.description}</Text>
                {readTopics.has(index) && (
                  <View style={{ position: 'absolute', top: 8, right: 8 }}>
                    <Ionicons name="checkmark-circle" size={24} color="green" />
                  </View>
                )}
              </View>
            </TouchableOpacity>
          </Animated.View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
