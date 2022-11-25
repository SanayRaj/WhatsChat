import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import Colors from '../Utils/colors';
import {Fonts} from '../Utils';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Text
        style={{color: Colors.stone[50], fontSize: 20, fontFamily: Fonts.Bold}}>
        WhatsChat
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blue[500],
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
