import {Text, View} from 'dripsy';
import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {
  InteractionManager,
  Keyboard,
  KeyboardAvoidingView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import {Button, IconButton, Spacer, ValidationInput} from '../../Components';
import {Colors, FormRules} from '../../Utils';
// import {Supabase} from '../../Utils';

export default function SignInScreen({navigation}: any) {
  const [loading, setLoading] = useState<boolean>(false);
  const {control, handleSubmit} = useForm();
  const [loaded, setLoaded] = useState(false);

  async function signInWithEmail(value: any) {
    Keyboard.dismiss();
    setLoading(true);
    return value;
    // signInWithEmailAndPassword(FirebaseAuth, value.email, value.password)
    //   .then((userCredential: {user: any}) => {
    //     console.log('Authentication Success', userCredential.user?.email);
    //     // setToast({
    //     //   varient: 'success',
    //     //   shown: true,
    //     //   message: 'SignUp Success, Check your Inbox for Email verification',
    //     // });
    //   })
    //   .catch((error: {code: any; message: any}) => {
    //     console.log('Auth Error:', error.message);
    //     // setToast({
    //     //   varient: 'error',
    //     //   shown: true,
    //     //   message: error?.message
    //     //     ? `Error: ${error.message}`
    //     //     : 'Oops... Something Went wrong',
    //     // });
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });
  }

  useEffect(() => {
    InteractionManager.runAfterInteractions().then(() => {
      setLoaded(true);
      console.log('Ended');
    });
  }, []);

  if (loaded) {
    return (
      <KeyboardAvoidingView style={styles.wraper}>
        <StatusBar backgroundColor={Colors.$black} barStyle="light-content" />
        <View
          sx={{
            display: 'flex',
            flex: 1,
            mx: 'auto',
            maxWidth: 576,
            backgroundColor: '$black',
          }}>
          <View
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              width: '100%',
            }}>
            <IconButton
              icon={'chevron-back'}
              color={'white'}
              size={28}
              onPress={() => navigation.goBack()}
            />
          </View>
          <View
            sx={{display: 'flex', flex: 1, px: '$3', justifyContent: 'center'}}>
            <Text sx={{fontWeight: 800, color: '$gray.300', fontSize: '$7'}}>
              SignIn
            </Text>
            <Text sx={{fontSize: '$2', color: '$gray.300'}}>
              Fill out your auth credentials and sign in.
            </Text>
            <Spacer height={40} />
            <ValidationInput
              placeholder="Email"
              disabled={loading}
              keyboardType="email-address"
              //react-hook-form
              control={control}
              name="email"
              rules={FormRules.email}
            />
            <Spacer height={8} />
            <ValidationInput
              secureTextEntry={true}
              placeholder="Password"
              disabled={loading}
              //react-hook-form
              control={control}
              name="password"
              rules={FormRules.password}
            />
            <Spacer height={34} />
            <Button
              varient="fill"
              loading={loading}
              onPress={handleSubmit(signInWithEmail)}>
              Sign In
            </Button>
            <Spacer height={6} />
            <Button
              varient="clear"
              disabled={loading}
              onPress={() => navigation.navigate('Home')}>
              Forgot Password? Reset here
            </Button>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  } else {
    return <View />;
  }
}

const styles = StyleSheet.create({
  wraper: {
    flex: 1,
    backgroundColor: Colors.$red[500],
  },
});
