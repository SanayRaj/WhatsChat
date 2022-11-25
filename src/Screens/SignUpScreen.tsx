import {useForm, Controller} from 'react-hook-form';
import React, {useState, useEffect} from 'react';
import {StatusBar, TextInput} from 'react-native';
import {
  Box,
  Button,
  FormControl,
  HStack,
  Input,
  Text,
  Toast,
  VStack,
  WarningOutlineIcon,
} from 'native-base';
import Spacer from '../Components/Spacer';
import {Colors, Fonts} from '../Utils';
import {supabase} from '../Utils/supabase';

export default function SignUp({navigation}: any) {
  // const {
  //   handleSubmit,
  //   control,
  //   formState: {errors},
  // } = useForm();

  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    formState: {errors},
  } = useForm();

  const [formData, setFormData] = useState<{
    username: string;
    email: string;
    password: string;
  }>({username: '', email: '', password: ''});

  const [loading, setLoading] = useState(false);

  async function signUpWithEmail() {
    setLoading(true);
    const {error, data} = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        data: {
          username: formData.username,
        },
      },
    });

    if (error) {
      Toast.show({
        render: () => {
          return (
            <Box bg="red.500" px="2" py="1" rounded="sm" mb={5}>
              <Text color="white">Oops... Something Went wrong</Text>
            </Box>
          );
        },
      });

      console.log('Something Went wrong');
    } else {
      Toast.show({
        render: () => {
          return (
            <Box bg="emerald.500" px="2" py="1" rounded="sm" mb={5}>
              SignUp Success, Check your Inbox for confirmation
            </Box>
          );
        },
      });
      console.log('Authentication Success', data.user?.email);
    }

    setLoading(false);
  }

  console.log('error:', errors);

  return (
    <VStack mx={8} pt="28%">
      <StatusBar backgroundColor={Colors.gray[100]} barStyle="dark-content" />
      <Text fontSize="24" fontFamily={Fonts.Bold} color="gray.700" pb={2}>
        SignUp
      </Text>
      <Text>Fill out your auth credentials and sign up.</Text>

      <Spacer height={20} />

      <FormControl isInvalid={errors.username ? true : false}>
        <Controller
          control={control}
          rules={{
            required: 'Username cannot be empty',
            minLength: {
              value: 8,
              message: 'Username must be longer than 8 charecters',
            },
            pattern: {
              value: new RegExp('[a-zA-Z0-9]$'),
              message: 'Username only contains letters numbers and underscores',
            },
          }}
          render={({field: {onChange, onBlur, value}}: any) => (
            <Input
              placeholder="Username"
              keyboardType="default"
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect={false}
              isDisabled={loading}
              size="md"
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name="username"
        />
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          {errors.username?.message}
        </FormControl.ErrorMessage>
      </FormControl>

      <Spacer height={12} />

      <FormControl isInvalid={errors.email ? true : false}>
        <Controller
          control={control}
          rules={{
            required: 'Email cannot be empty',
            pattern: {
              value: new RegExp(/^\S+@\S+$/i),
              message: 'Invalid Email',
            },
          }}
          render={({field: {onChange, onBlur, value}}: any) => (
            <Input
              isInvalid={errors.email ? true : false}
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect={false}
              isDisabled={loading}
              size="md"
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name="email"
        />
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          {errors.email?.message}
        </FormControl.ErrorMessage>
      </FormControl>

      {/* {errors.email && <Text>This is required.</Text>} */}

      <Spacer height={12} />

      <Input
        // {...register('password', {required: true, min: 6})}
        secureTextEntry={true}
        placeholder="Password"
        autoCapitalize={'none'}
        autoComplete="off"
        autoCorrect={false}
        isDisabled={loading}
        size="md"
      />

      <Spacer height={24} />

      <HStack justifyContent={'space-between'}>
        <Button
          variant="ghost"
          isDisabled={loading}
          onPress={() => navigation.navigate('SignIn')}>
          SingIn here
        </Button>
        <Button
          px={6}
          variant="solid"
          // isLoading={loading}
          // onPress={() => signUpWithEmail()}
          onPress={handleSubmit(
            v => console.log(v, 'hai'),
            e => console.log(e, 'error')
          )}
          // onPress={() => console.log('hai')}
        >
          SignUp
        </Button>
      </HStack>
    </VStack>
  );
}
