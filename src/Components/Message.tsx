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
                ? 'bg-green-500'
                : 'bg-transparent border border-neutral-800'
            }
        `}>
        <Text
          className={`
              text-base
              font-[Montserrat-Medium]
              ${id == '_kannans_' ? 'text-stone-900' : 'text-stone-50'}
          `}>
          {message}
        </Text>
      </View>
    </View>
  );
}
