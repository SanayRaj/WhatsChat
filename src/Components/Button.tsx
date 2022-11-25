import {View, Text, PressableProps, Pressable, StyleSheet} from 'react-native';
import React, {ReactComponentElement, ReactElement} from 'react';
import {Colors, Fonts} from '../Utils';

interface ButtonProps extends PressableProps {
  type?: 'rounded' | 'box' | 'flat';
  children: string;
  disabled?: any;
}

export default function Button({
  children,
  type,
  disabled,
  ...props
}: ButtonProps) {
  const buttonTypeStyle = () => {
    if (type == 'rounded') {
      return styles.buttonRounded;
    }
    if (type == 'box') {
      return styles.buttonBox;
    }
    if (type == 'flat') {
      return styles.buttonFlat;
    }
  };

  return (
    <Pressable
      {...props}
      accessibilityRole="button"
      accessibilityLabel={children}
      style={[
        styles.buttonBase,
        buttonTypeStyle(),
        disabled && type != 'flat' && styles.buttonDisabledStyle,
      ]}
      android_ripple={type == 'flat' ? null : {color: Colors.primary[300]}}>
      <Text
        style={{
          color: type == 'flat' ? Colors.gray[500] : Colors.white,
          fontFamily: Fonts.Medium,
        }}>
        {children}
      </Text>
    </Pressable>
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
