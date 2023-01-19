import React from 'react';
import {
  Control,
  Controller,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form';
import {Text, View, LayoutAnimation} from 'react-native';
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
        <View className="flex flex-col">
          <Input
            {...props}
            invalid={errors[name] ? true : false}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
          {errors[name] && (
            <Text className="text-red-500 text-sm font-[Montserrat-Medium]">
              {errors[name]?.message?.toString()}
            </Text>
          )}
        </View>
      )}
    />
  );
}
