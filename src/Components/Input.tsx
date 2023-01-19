import React from 'react';
import {TextInput, TextInputProps, View} from 'react-native';
import {Colors} from '../Utils';

export interface InputProps extends TextInputProps {
  disabled?: boolean;
  invalid?: boolean;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  containerStyle?: string;
}

export default function Input({
  disabled,
  invalid,
  rightIcon,
  leftIcon,
  containerStyle,
  ...props
}: InputProps) {
  return (
    <View
      className={`
            flex
            flex-row
            items-center
            border-[1px] 
            rounded-lg
            border-neutral-800 px-2
            focus:border-emerald-500
            bg-neutral-900
            ${invalid && 'border-red-500'}
            ${disabled && 'bg-neutral-800 border-neutral-700 opacity-40'}
            ${containerStyle}
      `}>
      {leftIcon && leftIcon}
      <TextInput
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect={false}
        editable={!disabled}
        selectionColor={Colors.green[600]}
        placeholderTextColor={Colors.neutral[400]}
        className={`
          flex-1
          font-[Montserrat-Regular]
          text-white 
          p-2
        `}
        {...props}
      />
      {rightIcon && rightIcon}
    </View>
  );
}


//sanju.p7306@gmail.com
//pass.word