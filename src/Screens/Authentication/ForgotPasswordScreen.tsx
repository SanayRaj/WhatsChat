import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {
  Keyboard,
  KeyboardAvoidingView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import Button from '../../Components/Button';
import IconButton from '../../Components/IconButton';
import Spacer from '../../Components/Spacer';
import ValidationInput from '../../Components/ValidationInput';
import {Colors, FormRules} from '../../Utils';
import {Fireabse} from '../../Utils';

export default function ForgotPasswordScreen({navigation}: any) {
  const [loading, setLoading] = useState<boolean>(false);
  const {control, handleSubmit} = useForm();

  // async function sentResetLink(value: any) {
  //   Keyboard.dismiss()
  //   setLoading(true);
  //   const {error, data} = await Supabase.auth.resetPasswordForEmail(
  //     value.email
  //   );

  //   if (error) {
  //     // Toast.show({
  //     //   render: () => {
  //     //     return (
  //     //       <Box bg="red.500" px="2" py="1" rounded="sm" mb={5}>
  //     //         <Text color="white">
  //     //           {error?.message
  //     //             ? error.message
  //     //             : 'Oops... Something Went wrong'}
  //     //         </Text>
  //     //       </Box>
  //     //     );
  //     //   },
  //     // });
  //     console.log('Auth Error:', error.message);
  //   } else {
  //     // Toast.show({
  //     //   render: () => {
  //     //     return (
  //     //       <View
  //     //         style={{
  //     //           backgroundColor: Colors.emerald[500],
  //     //           padding: 6,
  //     //           borderRadius: 14,
  //     //           marginBottom: 10,
  //     //         }}>
  //     //         <Text style={{color:'white'}} >
  //     //           SignIn Success, Check your Inbox for confirmation code
  //     //         </Text>
  //     //       </View>
  //     //     );
  //     //   },
  //     // });
  //     console.log('Reset link sent', data);
  //   }
  //   setLoading(false);
  // }

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
            Forgot Your Password?
          </Text>
          <Text className="text-lg font-[Montserrat-Regular] text-gray-300">
            Reset Your password with email
          </Text>
          <Spacer height={40} />
          <ValidationInput
            placeholder="Email"
            disabled={loading}
            //react-hook-form
            control={control}
            name="email"
            rules={FormRules.email}
          />
          <Spacer height={34} />

          <Button
            varient="fill"
            loading={loading}
            className="rounded-3xl bg-green-500 border-green-500 active:bg-green-600 flex items-center"
            textStyles="text-black text-base"
            // onPress={handleSubmit(sentResetLink)}
          >
            Sent reset link
          </Button>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
