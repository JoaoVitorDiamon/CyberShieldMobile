import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

type NewRegisterFormData = {
  username: string;
  email: string;
  senha: string;
};

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleRegisterSubmit = async () => {
    try {
      const url = `https://0efe-189-29-146-118.ngrok-free.app/Users/cad/user=${username}&email=${email}&password=${senha}`;
      const response = await axios.get(url, {
        headers: {
          'ngrok-skip-browser-warning': 'true'
        },
      });
      
      await AsyncStorage.setItem('@username', username);
      
      console.log("Registro bem-sucedido:", response.data);
      router.replace('/'); 
    } catch (error) {
      setErrorMessage("Ocorreu um erro ao tentar registrar. Por favor, tente novamente.");
      console.error("Falha na requisição:", error);
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
      <View className="bg-white h-full w-full">
        <StatusBar style="light"/>
        <Image className="h-full w-full absolute" source={require("../../assets/images/background.png")}/>
        <View className="flex-row justify-around w-full absolute">
          <Animated.Image entering={FadeInUp.delay(200).duration(1000).springify()} className="h-[225] w-[90]" source={require("../../assets/images/light.png")}/>
          <Animated.Image entering={FadeInUp.delay(400).duration(1000).springify().damping(3)} className="h-[160] w-[65]" source={require("../../assets/images/light.png")}/>
        </View>
        <View className="h-full w-full flex justify-around pt-40">
          <View className="flex items-center">
            <Animated.Text entering={FadeInUp.duration(1000).springify()} className="text-white font-bold tracking-wider text-5xl">
              Registro
            </Animated.Text>
          </View>

          <View className="flex items-center mx-4 space-y-2 mt-10">
          {errorMessage ? (
          <View style={{ backgroundColor: '#fdd', borderColor: '#f00', borderWidth: 1, padding: 16, paddingHorizontal:40,borderRadius: 8, marginBottom: 16 }}>
              <Text style={{ color: '#f00' }}>{errorMessage}</Text>
            </View>
          ) : null}
            <Animated.View entering={FadeInDown.duration(1000).springify()} className="bg-black/5 p-5 rounded-2xl w-full mb-3">
              <TextInput
                placeholder="Username"
                placeholderTextColor={'gray'}
                value={username}
                onChangeText={setUsername}
              />
            </Animated.View>
            <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} className="bg-black/5 p-5 rounded-2xl w-full mb-3">
              <TextInput
                placeholder="E-mail"
                placeholderTextColor={'gray'}
                value={email}
                onChangeText={setEmail}
              />
            </Animated.View>
            <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} className="bg-black/5 p-5 rounded-2xl w-full mb-3">
              <TextInput
                placeholder="Senha"
                secureTextEntry
                placeholderTextColor={'gray'}
                value={senha}
                onChangeText={setSenha}
              />
            </Animated.View>
            <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()} className="w-full bg-n-1 p-3 rounded-2xl mb-3">
              <TouchableOpacity onPress={handleRegisterSubmit} className="w-full bg-sky-400 rounded-2xl mb-3">
                <Text className="text-xl font-bold text-white text-center">Registrar-Se</Text>
              </TouchableOpacity>
            </Animated.View>
            <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()} className="flex-row justify-center">
              <Text>Já tem uma conta?</Text>
              <TouchableOpacity onPress={() => router.push('/')}>
                <Text className="text-n-1">Entre aqui</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
