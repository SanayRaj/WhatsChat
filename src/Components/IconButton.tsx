import {Pressable} from 'dripsy';
import React from 'react';
import {ColorValue, GestureResponderEvent} from 'react-native';
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
    <Pressable
      sx={{
        borderRadius: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: containerPadding,
        backgroundColor,
      }}
      onPress={onPress}>
      {typeof icon === 'string' ? (
        <IonIcon name={icon} size={size} color={color} />
      ) : (
        icon
      )}
    </Pressable>
  );
}
