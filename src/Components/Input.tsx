import {styled, Sx, View} from 'dripsy';
import React from 'react';
import {TextInput as RNTextInput, TextInputProps} from 'react-native';
import {Colors} from '../Utils';

const TextInput = styled(RNTextInput)();

export interface InputProps extends TextInputProps {
  disabled?: boolean;
  invalid?: boolean;
  rightElement?: React.ReactNode;
  leftElement?: React.ReactNode;
  containerStyle?: Sx;
}

export default function Input({
  disabled,
  invalid = true,
  rightElement,
  leftElement,
  containerStyle,
  ...props
}: InputProps) {
  return (
    <View
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 14,
        borderWidth: 3,
        borderColor: '$neutral.700',
        backgroundColor: '$neutral.800',
        // State Styles
        ...(invalid && {borderColor: '$red.500'}),
        ...(disabled && {
          bg: '$neutral.400',
          borderColor: '$neutral.700',
          opacity: 0.4,
        }),
        ...containerStyle,
      }}>
      {leftElement && leftElement}
      <TextInput
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect={false}
        editable={!disabled}
        selectionColor={Colors.$green[600]}
        placeholderTextColor={Colors.$neutral[400]}
        sx={{
          flex: 1,
          color: '$white',
          height: 48,
          px: '$3',
          fontWeight: 700,
        }}
        {...props}
      />
      {rightElement && rightElement}
    </View>
  );
}

//sanju.p7306@gmail.com
//pass.word
