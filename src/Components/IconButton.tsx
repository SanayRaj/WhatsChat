import {
  ColorValue,
  GestureResponderEvent,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';

type IconButtonProps = {
  icon: string | React.ReactElement;
  color?: ColorValue;
  onPress?: (event: GestureResponderEvent) => void;
  size?: number | undefined;
  containerPadding?: number | undefined;
  backgroundColor?: ColorValue;
};

export default function IconButton({
  icon,
  color,
  size = 22,
  containerPadding = 8,
  onPress,
  backgroundColor = 'transparent',
}: IconButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      className="rounded-full flex items-center justify-center"
      style={{
        padding: containerPadding,
        backgroundColor,
      }}
      onPress={onPress}>
      {typeof icon === 'string' ? (
        <IonIcon name={icon} size={size} color={color} />
      ) : (
        icon
      )}
    </TouchableOpacity>
  );
}
