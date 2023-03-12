import {ImageSourcePropType, Image} from 'react-native';
import React from 'react';

type AvatarProps = {
  w?: number | string;
  h?: number | string;
  size?: number | string;

  source: ImageSourcePropType;
};

export default function Avatar({source, w = 52, h = 52, size}: AvatarProps) {
  return (
    <Image
      style={{
        width: size || w,
        height: size || h,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#ccc',
        overflow: 'hidden',
      }}
      source={source}
    />
  );
}
