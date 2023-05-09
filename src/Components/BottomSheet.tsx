import {Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';
import {Colors} from '../Utils';

const BottomSheet = () => {
  const [sheetPosition, setSheetPosition] = useState(90);
  const sheetSize = useAnimatedStyle(() => {
    return {
      bottom: `${sheetPosition}%`,
    };
  });
  return (
    <Animated.View style={{...styles.bottomSheet, ...sheetSize}}>
      <Animated.View style={styles.moveHandle}></Animated.View>
      <Text style={{color: '#000'}}>BottomSheet</Text>
    </Animated.View>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  moveHandle: {
    width: 66,
    borderRadius: 100,
    height: 6,
    backgroundColor: Colors.$gray[600],
    alignSelf: 'center',
  },
  bottomSheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    // width: '100%',
    height: '100%',
    backgroundColor: '#FFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    zIndex: 400,
  },
});
