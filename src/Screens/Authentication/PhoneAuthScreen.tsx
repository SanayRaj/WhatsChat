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
import {
  signInWithEmailAndPassword,
  signInWithPhoneNumber,
} from 'firebase/auth/react-native';
import {FirebaseAuth} from '../../Utils/fireabase.config';

export default function PhoneAuthScreen({navigation}: any) {
  const [loading, setLoading] = useState<boolean>(false);
  const {control, handleSubmit} = useForm();

  async function signInWithEmail(value: any) {
    Keyboard.dismiss();
    setLoading(true);
    signInWithPhoneNumber(FirebaseAuth, value.phone)
      .then((userCredential: {user: any}) => {
        console.log('Authentication Success', userCredential.user?.email);
        // setToast({
        //   varient: 'success',
        //   shown: true,
        //   message: 'SignUp Success, Check your Inbox for Email verification',
        // });
      })
      .catch((error: {code: any; message: any}) => {
        console.log('Auth Error:', error.message);
        // setToast({
        //   varient: 'error',
        //   shown: true,
        //   message: error?.message
        //     ? `Error: ${error.message}`
        //     : 'Oops... Something Went wrong',
        // });
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <KeyboardAvoidingView className="flex-1 bg-black">
      <StatusBar backgroundColor={Colors.black} barStyle="light-content" />
      <View className="flex-1 mx-auto w-full max-w-xl">
        <View className="flex justify-center items-start py-3 px-4">
          <IconButton
            icon={'chevron-back'}
            color={'white'}
            size={28}
            onPress={() => navigation.goBack()}
          />
        </View>
        <View className="flex flex-1 px-8 justify-center">
          <Text className="text-4xl font-sansSemiBold text-gray-300">
            SignIn
          </Text>
          <Text className="text-base font-sans text-gray-300">
            Fill out your auth credentials and sign in.
          </Text>
          <Spacer height={40} />
          <ValidationInput
            placeholder="Phone Number"
            disabled={loading}
            keyboardType="phone-pad"
            //react-hook-form
            control={control}
            name="number"
            rules={FormRules.email}
          />
          <Spacer height={34} />
          <Button
            varient="fill"
            loading={loading}
            className="my-2"
            onPress={handleSubmit(signInWithEmail)}>
            Verify Number
          </Button>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
