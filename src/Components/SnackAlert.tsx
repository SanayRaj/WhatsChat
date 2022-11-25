import {View, Text, LayoutAnimation, UIManager} from 'react-native';
import React from 'react';
import {Colors} from '../Utils';

export default function SnackAlert({
  message,
  isOpen = false,
}: {
  message: string;
  isOpen: boolean;
}) {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);

  LayoutAnimation.easeInEaseOut();

  return (
    <>
      {isOpen && (
        <View
          style={{
            position: 'absolute',
            bottom: 20,
            left: 0,
            right: 0,
            zIndex: 999,
            backgroundColor: Colors.red[500],
            marginHorizontal: 14,
            padding: 10,
            borderRadius: 10,
          }}>
          <Text style={{color: '#FFF'}}>{message}</Text>
        </View>
      )}
    </>
  );
}
