import {Text, View} from 'dripsy';
import React from 'react';
import {
  Control,
  Controller,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form';
import Input, {InputProps} from './Input';

interface ValidationInputProps extends InputProps {
  control: Control<FieldValues, any>;
  name: string;
  rules?: Omit<
    RegisterOptions<FieldValues, any>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
}

export default function ValidationInput({
  control,
  name,
  rules = {},
  ...props
}: ValidationInputProps) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {onChange, onBlur, value}, formState: {errors}}) => (
        <View>
          <Input
            {...props}
            invalid={errors[name] ? true : false}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
          {errors[name] && (
            <Text sx={{color: '$red.500', fontWeight: 500, py: '$1'}}>
              {errors[name]?.message?.toString()}
            </Text>
          )}
        </View>
      )}
    />
  );
}
