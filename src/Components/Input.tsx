import React from 'react';
import {TextInput, TextInputProps, View} from 'react-native';
import {Colors} from '../Utils';

export interface InputProps extends TextInputProps {
  disabled?: boolean;
  invalid?: boolean;
  rightElement?: React.ReactNode;
  leftElement?: React.ReactNode;
  containerStyle?: string;
}

export default function Input({
  disabled,
  invalid,
  rightElement,
  leftElement,
  containerStyle,
  ...props
}: InputProps) {
  return (
    <View
      className={`
            flex
            flex-row
            items-center
            rounded-lg
            border-bg-500 px-4
            focus:border-primary-500
            bg-neutral-800
            ${invalid && 'border-red-500'}
            ${disabled && 'bg-bg-300 border-bg-500 opacity-40'}
            ${containerStyle}
      `}>
      {leftElement && leftElement}
      <TextInput
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect={false}
        editable={!disabled}
        selectionColor={Colors.primary[600]}
        placeholderTextColor={Colors.neutral[400]}
        className={`
          flex-1
          font-[Montserrat-Regular]
          text-white 
           h-12
        `}
        {...props}
      />
      {rightElement && rightElement}
    </View>
  );
}

//sanju.p7306@gmail.com
//pass.word
