import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native';
import { Colors } from '../Utils';

interface ButtonProps extends TouchableOpacityProps {
  varient?: 'fill' | 'outline' | 'clear';
  children: string;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  textStyles?: string;
}

export default function Button({
  children,
  varient = 'fill',
  disabled,
  loading,
  className,
  textStyles,
  ...props
}: ButtonProps) {
  const inputVarientStyles = {
    fill: 'bg-green-500 border-green-500 active:bg-green-600',
    outline: 'border-neutral-700 bg-transparent active:bg-neutral-900',
    clear: '',
  };
  const inputVarientDisabledStyles = {
    fill: 'opacity-90',
    outline: 'bg-gray-100 opacity-60',
    clear: '',
  };
  const inputVarientTextStyles = {
    fill: 'text-white',
    outline: 'text-gray-500',
    clear: 'text-white',
  };

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      accessibilityRole="button"
      accessibilityLabel={children}
      disabled={loading || disabled}
      className={`px-5 py-2 flex items-center rounded-3xl border-[1px]  ${
        inputVarientStyles[varient]
      } ${
        (loading || disabled) && inputVarientDisabledStyles[varient]
      } ${className}`}
      {...props}>
      {loading && varient == 'fill' ? (
        <ActivityIndicator color={Colors.white} />
      ) : (
        <Text
          className={`font-[Montserrat-SemiBold]  ${inputVarientTextStyles[varient]} ${textStyles}`}>
          {children}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonBase: {
    backgroundColor: Colors.primary[500],
    width: '100%',
    paddingVertical: 12,
    borderRadius: 100,
    marginVertical: 8,
    elevation: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  buttonRounded: {
    borderRadius: 100,
  },
  buttonBox: {
    borderRadius: 8,
  },
  buttonFlat: {
    borderRadius: 8,
    backgroundColor: 'transparent',
    elevation: 0,
  },
  buttonDisabledStyle: {
    backgroundColor: Colors.primary[400],
  },
});
