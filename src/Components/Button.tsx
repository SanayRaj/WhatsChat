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
interface styleType {
  fill: SxProp;
  outline: SxProp;
  clear: SxProp;
}

function Button({
  children,
  varient = 'fill',
  disabled,
  loading,
  sx,
  ...props
}: ButtonProps) {
  // const inputVarientDisabledStyles: styleType = {
  //   fill: ' border opacity-90 bg-green-600 border-green-700',
  //   outline: 'bg-neutral-800 opacity-70',
  //   clear: 'opacity-50 bg-neutral-800 py-3',
  // };

  const inputVarientStyles: styleType = {
    fill: {
      backgroundColor: '$primary.600',
      borderColor: '$primary.600',
    },
    outline: {
      borderColor: '$primary.600',
      backgroundColor: 'transparent',
    },
    clear: {},
  };

  const inputVarientTextStyles: styleType = {
    fill: {color: '#000'},
    outline: {color: '#CCC'},
    clear: {color: '#FFF'},
  };

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={children}
      sx={{
        borderWidth: 3,
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
}

export default memo((props: ButtonProps) => Button(props));
