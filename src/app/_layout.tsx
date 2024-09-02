import { GestureHandlerRootView } from 'react-native-gesture-handler'; // Importe GestureHandlerRootView
import { Stack } from 'expo-router';
import "../styles/global.css"

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="register" options={{ headerShown: false }} />
        <Stack.Screen name="main" options={{ headerShown: false, headerTransparent: true }} />
        <Stack.Screen name="segurancaNaInternet" options={{ headerShown: false }} />
        <Stack.Screen name="golpesNaInternet" options={{ headerShown: false }} />
        <Stack.Screen name="ataquesNaInternet" options={{ headerShown: false }} />
        <Stack.Screen name="codigosMaliciosos" options={{ headerShown: false }} />
        <Stack.Screen name="spam" options={{ headerShown: false }} />
        <Stack.Screen name="riscos" options={{ headerShown: false }} />
        <Stack.Screen name="mecanismo" options={{ headerShown: false }} />
        <Stack.Screen name="contas" options={{ headerShown: false }} />
        <Stack.Screen name="criptografia" options={{ headerShown: false }} />
        <Stack.Screen name="usoSeguro" options={{ headerShown: false }} />
        <Stack.Screen name="privacidade" options={{ headerShown: false }} />
        <Stack.Screen name="segurancadeComputadores" options={{ headerShown: false }} />
        <Stack.Screen name="segurancaDeRedes" options={{ headerShown: false }} />
        <Stack.Screen name="segurancaDeMobile" options={{ headerShown: false }} />
        <Stack.Screen name="cyberGuard" options={{ headerShown: false }} />
        <Stack.Screen name="splashQuiz" options={{ headerShown: false }} />
        <Stack.Screen name="quizGame" options={{ headerShown: false }} />
        <Stack.Screen name="score" options={{ headerShown: false }} />
        <Stack.Screen name="dragAndMove" options={{ headerShown: false }} />
        <Stack.Screen name="ranking" options={{ headerShown: false }} />
      </Stack>
    </GestureHandlerRootView>
  );
}
