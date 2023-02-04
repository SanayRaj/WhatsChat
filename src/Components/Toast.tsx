import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function Toast({
  varient = 'success',
  shown = false,
  message,
}: {
  varient?: 'error' | 'success';
  shown?: boolean;
  message?: string;
}) {
  return (
    <>
      {shown ? (
        <View style={StyleSheet.absoluteFill} className="flex justify-end">
          <Text
            className={`${
              varient == 'error' ? 'bg-red-600' : 'bg-green-500'
            } text-white m-6 p-2 text-base px-3 rounded-lg`}>
            {message}
          </Text>
        </View>
      ) : (
        <></>
      )}
    </>
  );
}
