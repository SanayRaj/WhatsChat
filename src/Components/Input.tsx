import {StyleSheet, TextInput, TextInputProps} from 'react-native';
import React from 'react';
import {Colors, Fonts} from '../Utils';

interface InputProps extends TextInputProps {
  editable?: any;
}

export default function Input({editable, ...props}: InputProps) {
  return (
    <TextInput
      {...props}
      editable={editable}
      style={[
        styles.inputBaseStyles,
        editable == false && styles.inputDisabledStyles,
      ]}
      placeholderTextColor={Colors.gray[500]}
      selectionColor={Colors.blue[300]}
    />
  );
}

const styles = StyleSheet.create({
  inputBaseStyles: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: Colors.gray[50],
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 4,
    width: '100%',
    marginTop: 12,
    fontFamily: Fonts.Medium,
    color: '#000',
  },
  inputDisabledStyles: {
    backgroundColor: Colors.gray[200],
  },
});
