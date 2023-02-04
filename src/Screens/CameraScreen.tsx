import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

export default function CameraScreen() {
  return (
    <View className="flex-1 bg-black">
      <View
        style={StyleSheet.absoluteFill}
        className="flex flex-1  justify-between">
        <View className="items-center  justify-center ">
          <Icon name="camera" size={30} color={'#FFF'} />
        </View>
        <View className="items-center justify-center pb-4">
          <Icon name="camera" size={30} color={'#FFF'} />
        </View>
      </View>
    </View>
  );
}
