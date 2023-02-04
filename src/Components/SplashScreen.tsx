import React from 'react';
import {Text, View} from 'react-native';

export default function SplashScreen() {
  return (
    <View className="flex flex-1 items-center justify-center bg-black">
      <Text className=" text-primary-600 text-3xl font-sansBold">
        WhatsChat
      </Text>
    </View>
  );
}
