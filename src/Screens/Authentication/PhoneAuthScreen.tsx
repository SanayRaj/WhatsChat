import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {Keyboard} from 'react-native';
import {
  AuthScreenTemplate,
  Spacer,
  ValidationInput,
  Button,
} from '../../Components';
import {FormRules} from '../../Utils';

export default function PhoneAuthScreen({navigation}: any) {
  const [loading, setLoading] = useState<boolean>(false);
  const {control, handleSubmit} = useForm();

  async function signInWithEmail(_value: any) {
    Keyboard.dismiss();
    setLoading(true);
    //   signInWithPhoneNumber(FirebaseAuth, value.phone)
    //     .then((userCredential: {user: any}) => {
    //       console.log('Authentication Success', userCredential.user?.email);
    //       // setToast({
    //       //   varient: 'success',
    //       //   shown: true,
    //       //   message: 'SignUp Success, Check your Inbox for Email verification',
    //       // });
    //     })
    //     .catch((error: {code: any; message: any}) => {
    //       console.log('Auth Error:', error.message);
    //       // setToast({
    //       //   varient: 'error',
    //       //   shown: true,
    //       //   message: error?.message
    //       //     ? `Error: ${error.message}`
    //       //     : 'Oops... Something Went wrong',
    //       // });
    //     })
    //     .finally(() => {
    //       setLoading(false);
    //     });
  }

  return (
    <AuthScreenTemplate
      title="Go on wit Phone"
      subtitle="Fill out your auth credentials and sign in."
      goBack={navigation.goBack}>
      <>
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
          onPress={handleSubmit(signInWithEmail)}>
          Verify Number
        </Button>
      </>
    </AuthScreenTemplate>
  );
}
