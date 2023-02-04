import React from 'react';
import Colors from '../Utils/colors';
import {Text, View} from 'react-native';
import {Fonts} from '../Utils';

type ChatItem = {
  id: String;
  message: String;
};

export default function Message({id, message}: ChatItem) {
  return (
    <View className={`flex ${id == '_kannans_' ? 'items-end' : 'items-start'}`}>
      <View
        className={`
            p-2
            my-1
            max-w-[60%]
            rounded-xl
            ${
              id == '_kannans_'
                ? 'bg-purple-700'
                : 'bg-transparent border border-bg-800'
            }
        `}>
        <Text
          className={`
              text-xs
              font-[Montserrat-Medium]
              ${id == '_kannans_' ? 'text-stone-300' : 'text-stone-300'}
          `}>
          {message}
        </Text>
      </View>
    </View>
  );
}
