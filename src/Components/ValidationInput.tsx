import {Text, View} from 'dripsy';
import React, {memo} from 'react';
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

const ValidationInput: React.FC<ValidationInputProps> = ({
  control,
  name,
  rules = {},
  ...props
}) => {
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
};

export default memo(ValidationInput);
