import React, {memo} from 'react';
import {Pressable, Sx, SxProp, Text} from 'dripsy';
import {ActivityIndicator, TouchableOpacityProps} from 'react-native';
import {Colors} from '../Utils';

interface ButtonProps extends TouchableOpacityProps {
  varient?: 'fill' | 'outline' | 'clear';
  children: string;
  loading?: boolean;
  disabled?: boolean;
  sx?: Sx;
  textStyles?: string;
}
interface StylesType {
  [x: string]: SxProp;
}

const Button: React.FC<ButtonProps> = ({
  children,
  varient = 'fill',
  disabled,
  loading,
  sx,
  ...props
}) => {
  const inputVarientStyles: StylesType = {
    fill: {
      backgroundColor: '$primary.600',
      borderColor: '$primary.600',
    },
    outline: {
      borderColor: '$primary.600',
      backgroundColor: 'transparent',
    },
  };

  const inputVarientTextStyles: StylesType = {
    fill: {color: '#000'},
    outline: {color: '#CCC'},
    clear: {color: '#FFF'},
  };

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={children}
      sx={{
        borderWidth: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '$3',
        borderRadius: 20,
        ...inputVarientStyles[varient],
        ...sx,
      }}
      {...props}
      disabled={loading || disabled}>
      {loading && varient === 'fill' ? (
        <ActivityIndicator color={Colors.$black} />
      ) : (
        <Text
          sx={{
            fontWeight: '700',
            fontSize: '$1',
            ...inputVarientTextStyles[varient],
          }}>
          {children}
        </Text>
      )}
    </Pressable>
  );
};

export default memo(Button);
