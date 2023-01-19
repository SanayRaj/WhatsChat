import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { KeyboardAvoidingView, StatusBar, Text, View } from 'react-native';
import Button from '../../Components/Button';
import IconButton from '../../Components/IconButton';
import Spacer from '../../Components/Spacer';
import ValidationInput from '../../Components/ValidationInput';
import { Colors, FormRules } from '../../Utils';
import { supabase } from '../../Utils/supabase';

export default function SignUpScreen({navigation}: any) {
  const {handleSubmit, control} = useForm();
  const [loading, setLoading] = useState(false);

  async function signUpWithEmail(value: any) {
    setLoading(true);
    const {error, data} = await supabase.auth.signUp({
      email: value.email,
      password: value.password,
      options: {
        data: {
          username: value.username,
          email: value.email,
        },
      },
    });

    if (error) {
      console.log('Auth Error:', error.message);

      // Toast.show({
      //   render: () => {
      //     return (
      //       <Box bg="red.500" px="3" py="2" rounded="sm" mb={5}>
      //         <Text color="white">
      //           {error?.message
      //             ? error.message
      //             : 'Oops... Something Went wrong'}
      //         </Text>
      //       </Box>
      //     );
      //   },
      // });
    } else {
      console.log('Authentication Success', data.user?.email);

      // Toast.show({
      //   render: () => {
      //     return (
      //       <Box bg="emerald.500" px="3" py="2" rounded="sm" mb={5}>
      //         <Text color="white">
      //           SignUp Success, Check your Inbox for Email verification
      //         </Text>
      //       </Box>
      //     );
      //   },
      // });
    }

    setLoading(false);
  }

  return (
    <KeyboardAvoidingView className="flex-1">
      <StatusBar backgroundColor={Colors.black} barStyle="light-content" />
      <View className="flex-1 bg-black">
        <View className="flex justify-center items-start py-3 px-4">
          <IconButton
            icon={'chevron-back'}
            color={'white'}
            size={28}
            onPress={() => navigation.goBack()}
          />
        </View>
        <View className="flex flex-1 px-8 justify-center">
          <Text className="text-4xl font-[Montserrat-SemiBold] text-gray-200">
            SignUp
          </Text>
          <Text className="text-lg font-[Montserrat-Regular] text-gray-300">
            Fill out your auth credentials and sign up.
          </Text>
          <Spacer height={40} />
          <ValidationInput
            placeholder="Username"
            keyboardType="default"
            disabled={loading}
            //react-hook-form
            name="username"
            control={control}
            rules={FormRules.username}
          />
          <Spacer height={8} />
          <ValidationInput
            placeholder="Email"
            keyboardType="email-address"
            disabled={loading}
            //react-hook-form
            name="email"
            control={control}
            rules={FormRules.email}
          />
          <Spacer height={8} />
          <ValidationInput
            secureTextEntry={true}
            placeholder="Password"
            disabled={loading}
            control={control}
            name="password"
            rules={FormRules.password}
          />
          <Spacer height={34} />

          <Button
            varient="fill"
            loading={loading}
            className="rounded-3xl bg-green-500 border-green-500 active:bg-green-600 flex items-center"
            textStyles="text-black text-base"
            onPress={handleSubmit(signUpWithEmail)}>
            SignUp
          </Button>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
