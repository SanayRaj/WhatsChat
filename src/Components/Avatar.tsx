import {ImageSourcePropType, Image} from 'react-native';
import React from 'react';

type AvatarProps = {
  w?: number | string;
  h?: number | string;

  source: ImageSourcePropType;
};

export default function Avatar({source, w = 52, h = 52}: AvatarProps) {
  return (
    <Image
      style={{
        width: w,
        height: h,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#ccc',
      }}
      source={source}
    />
  );
}
