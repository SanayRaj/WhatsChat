import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {Colors} from '../Utils';

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
    fill: 'bg-green-600 active:bg-green-700 active:scale-2',
    outline: 'border border-neutral-700 bg-transparent active:bg-neutral-900',
    clear: '',
  };
  const inputVarientDisabledStyles = {
    fill: ' border opacity-90 bg-green-600 border-green-700',
    outline: 'bg-neutral-800 opacity-70',
    clear: 'opacity-50 bg-neutral-800 py-3',
  };
  const inputVarientTextStyles = {
    fill: 'text-black',
    outline: 'text-gray-500',
    clear: 'text-white',
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      accessibilityRole="button"
      accessibilityLabel={children}
      disabled={loading || disabled}
      className={`px-5 py-3 flex items-center rounded-3xl active:scale-[0.98] transition-all ${
        inputVarientStyles[varient]
      } ${
        (loading || disabled) && inputVarientDisabledStyles[varient]
      } ${className}`}
      {...props}>
      {loading && varient == 'fill' ? (
        <ActivityIndicator color={Colors.black} />
      ) : (
        <Text
          className={`font-sansMedium text-sm  ${inputVarientTextStyles[varient]} ${textStyles}`}>
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
