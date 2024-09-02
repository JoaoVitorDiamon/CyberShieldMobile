import React from 'react';
import { View, Image, Text,TouchableWithoutFeedback } from 'react-native';

interface CardProps {
  image: string;
  description: string;
  title: string;
}

export default function Card({ title, description, image }: CardProps) {
  return (
    <View className="flex items-center">
      <View className="w-96 h-96 bg-slate-200 p-6 rounded-2xl shadow-lg mt-5">
        <View className="overflow-hidden rounded-xl mb-4">
          <Image 
            source={{ uri: image }} 
            style={{ width: '100%', height: 160 }} 
            resizeMode="cover" 
          />
        </View>
        <Text className="text-2xl  font-bold text-black mb-2">
          {title}
        </Text>
        <Text className="text-lg text-gray-600 leading-6">
          {description}
        </Text>
      </View>
    </View>
  );
}

export function Card1({ title, description, image }: CardProps) {
  return (
    <View className='items-center mb-4 '>
      <View className='m-auto w-96 bg-n-1 rounded-3xl shadow-lg'>
        <Image className='h-36 w-full rounded-t-3xl' source={{ uri: image }} />
      <View className='px-3 pb-4 space-y-2'>
        <Text className='text-lg font-bold pt-2 text-white' >{title}</Text>
        <Text className='text-lg font-light pt-2 text-white' >{description}</Text>
      </View>
      </View>
    </View>
  );
}