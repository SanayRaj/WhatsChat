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
import Toast from '../../Components/Toast';
import ValidationInput from '../../Components/ValidationInput';
import {Colors, FormRules} from '../../Utils';
// import {Fireabse} from '../../Utils';
import FeatherIcon from 'react-native-vector-icons/Feather';

export default function SignUpScreen({navigation}: any) {
  const [passwordShown, setPasswordShown] = useState(false);
  const {handleSubmit, control} = useForm();
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{
    varient: 'success' | 'error';
    shown: boolean;
    message: string;
  }>({
    varient: 'success',
    shown: false,
    message: '',
  });

  async function signUpWithEmail(value: any) {
    Keyboard.dismiss();
    setLoading(true);
    // createUserWithEmailAndPassword(FirebaseAuth, value.email, value.password)
    //   .then((userCredential: {user: any}) => {
    //     console.log('Authentication Success', userCredential.user?.email);
    //     setToast({
    //       varient: 'success',
    //       shown: true,
    //       message: 'SignUp Success, Check your Inbox for Email verification',
    //     });
    //   })
    //   .catch((error: {code: any; message: any}) => {
    //     console.log('Auth Error:', error.message);
    //     setToast({
    //       varient: 'error',
    //       shown: true,
    //       message: error?.message
    //         ? `Error: ${error.message}`
    //         : 'Oops... Something Went wrong',
    //     });
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });
  }

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
          <Text className="text-base font-sans text-gray-300">
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
            secureTextEntry={passwordShown}
            placeholder="Password"
            disabled={loading}
            control={control}
            name="password"
            rules={FormRules.password}
            rightElement={
              <IconButton
                onPress={() => setPasswordShown(!passwordShown)}
                icon={
                  <FeatherIcon
                    name={passwordShown ? 'eye' : 'eye-off'}
                    size={16}
                    color={'#AAA'}
                  />
                }
              />
            }
          />
          <Spacer height={34} />

          <Button
            varient="fill"
            loading={loading}
            onPress={handleSubmit(signUpWithEmail)}>
            SignUp
          </Button>
        </View>
      </View>
      <Toast
        shown={toast.shown}
        message={toast.message}
        varient={toast.varient}
      />
    </KeyboardAvoidingView>
  );
}
