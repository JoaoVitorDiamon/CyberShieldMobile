import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import Animated, { FadeInUp, FadeInDown } from "react-native-reanimated";
import axios from 'axios';
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Index() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      const url = `https://0efe-189-29-146-118.ngrok-free.app/Users/login/email=${email}&&password=${senha}`;
      const response = await axios.get(url, {
        headers: {
          'ngrok-skip-browser-warning': 'true'
        },
      });
      
      if (response.data === 'Email ou senha incorretos') {
        setErrorMessage("Email ou senha incorretos");
      } else {
        const {username} = response.data;
        const storedUsername = await AsyncStorage.getItem('@username');
        router.replace('/main');
      }
    } catch (error) {
      setErrorMessage("Ocorreu um erro ao tentar fazer login. Por favor, tente novamente.");
      console.error("Falha na requisição:", error);
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>

    <View className="bg-white h-full w-full">
      <StatusBar style="light"/>
      <Image className="h-full w-full absolute" source={require("../../assets/images/background.png")}/>
      <View className="flex-row justify-around w-full absolute">
        <Animated.Image entering={FadeInUp.delay(200).duration(1000).springify()} className="h-[225] w-[90]" source={require("../../assets/images/light.png")}/>
        <Animated.Image entering={FadeInUp.delay(400).duration(1000).springify().damping(3)} className="h-[160] w-[65]" source={require("../../assets/images/light.png")}/>
      </View>
      <View className="h-full w-full flex justify-around pt-40 pb-10">
        <View className="flex items-center">
          <Animated.Text entering={FadeInUp.duration(1000).springify()} className="text-white font-bold tracking-wider text-5xl">
            Login
          </Animated.Text>
        </View>
        <View className="flex items-center mx-4 space-y-4">
        {errorMessage ? (
          <View style={{ backgroundColor: '#fdd', borderColor: '#f00', borderWidth: 1, padding: 16, paddingHorizontal:40,borderRadius: 8, marginBottom: 16 }}>
              <Text style={{ color: '#f00' }}>{errorMessage}</Text>
            </View>
          ) : null}
          <View className="w-full">
            <Animated.View entering={FadeInDown.duration(1000).springify()} className={`bg-black/5 p-5 rounded-2xl w-full mb-3 ${errorMessage ? 'border-2 border-red-500' : ''}`}>
              <TextInput 
                placeholder="E-mail" 
                placeholderTextColor={'gray'} 
                value={email}
                onChangeText={setEmail}
                />
            </Animated.View>
          </View>
          <View className="w-full">
            <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} className={`bg-black/5 p-5 rounded-2xl w-full mb-3 ${errorMessage ? 'border-2 border-red-500' : ''}`}>
              <TextInput 
                placeholder="Senha" 
                secureTextEntry 
                placeholderTextColor={'gray'}
                value={senha}
                onChangeText={setSenha}
                />
            </Animated.View>
          </View>
          <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} className="w-full bg-n-1 p-3 rounded-2xl mb-3">
            <TouchableOpacity onPress={handleLogin} className="w-full bg-sky-400 rounded-2xl mb-3">
              <Text className="text-xl font-bold text-white text-center">Logar</Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()} className="flex-row justify-center">
            <Text>Ainda não tem conta? </Text>
            <TouchableOpacity onPress={() => router.push('/register')}>
              <Text className="text-n-1">Crie aqui</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
                </KeyboardAvoidingView>
  );
}
