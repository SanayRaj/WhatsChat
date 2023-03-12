import {Text, View} from 'dripsy';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {
  Keyboard,
  KeyboardAvoidingView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import {Button, IconButton, Spacer, ValidationInput} from '../../Components';
import {Colors, FormRules} from '../../Utils';
import FeatherIcon from 'react-native-vector-icons/Feather';

export default function SignUpScreen({navigation}: any) {
  const [passwordShown, setPasswordShown] = useState(false);
  const {handleSubmit, control} = useForm();
  const [loading, setLoading] = useState(false);

  async function signUpWithEmail(value: any) {
    Keyboard.dismiss();
    setLoading(true);
    return value;
  }

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
            SignUp
          </Text>
          <Text sx={{fontSize: '$2', color: '$gray.300'}}>
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
                    style={styles.ml8}
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
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  ml8: {
    marginRight: 8,
  },
  wraper: {
    flex: 1,
    backgroundColor: Colors.$red[500],
  },
});
