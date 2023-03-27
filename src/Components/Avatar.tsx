import {ImageSourcePropType, Image, StyleSheet} from 'react-native';
import React from 'react';

type AvatarProps = {
  w?: number | string;
  h?: number | string;
  size?: number | string;

  source: ImageSourcePropType;
};

const Avatar: React.FC<AvatarProps> = ({source, w = 52, h = 52, size}) => {
  return (
    <Image
      style={{...styles.avatarImg, width: size || w, height: size || h}}
      source={source}
    />
  );
};

const styles = StyleSheet.create({
  avatarImg: {
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#ccc',
    overflow: 'hidden',
  },
});

export default Avatar;
