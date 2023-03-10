import {View} from 'react-native';
import React from 'react';

export default function Spacer({
  width = 0,
  height = 0,
}: {
  width?: number;
  height?: number;
}) {
  return <View style={{height, width}} />;
}
