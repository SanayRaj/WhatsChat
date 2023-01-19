import {
  ColorValue,
  GestureResponderEvent,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';

type IconButtonProps = {
  icon: string;
  color: ColorValue;
  onPress?: (event: GestureResponderEvent) => void;
  size?: number | undefined;
  backgroundColor?: ColorValue;
};

export default function IconButton({
  icon,
  color,
  size = 22,
  onPress,
  backgroundColor = 'transparent',
}: IconButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={{
        borderRadius: 100,
        padding: 8,
        backgroundColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={onPress}>
      <IonIcon name={icon} size={size} color={color} />
    </TouchableOpacity>
  );
}
