import {ImageSourcePropType, Image, StyleSheet} from 'react-native';
import React from 'react';

type AvatarProps = {
  w?: number | string;
  h?: number | string;

  source: ImageSourcePropType;
};

export default function Avatar({source, w = 52, h = 52}: AvatarProps) {
  return (
    <Image style={(styles.avatar, {width: w, height: h})} source={source} />
  );
}

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});
