import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {Input, Button, Text, VStack, Toast, Box, HStack} from 'native-base';
import Spacer from '../Components/Spacer';
import {Colors, Fonts} from '../Utils';
import {supabase} from '../Utils/supabase';

export default function SignInScreen({navigation}: any) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  async function signInWithEmail() {
    if (email || password == null) return;

    setLoading(true);
    const {error, data} = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    // const {data, error} = await supabase.auth.signInWithOtp({
    //   email,
    // });

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
      console.log(error.message);
    } else {
      Toast.show({
        render: () => {
          return (
            <Box bg="emerald.500" px="2" py="1" rounded="sm" mb={5}>
              <Text color="white">Oops... Something Went wrong</Text>
              SignIp Success, Check your Inbox for confirmation code
            </Box>
          );
        },
      });
      console.log('Authentication Success', data.user);
    }
    setLoading(false);
  }

  return (
    <>
      <VStack mx={8} pt="28%">
        <StatusBar backgroundColor={Colors.gray[100]} barStyle="dark-content" />
        <Text fontSize="24" fontFamily={Fonts.Bold} color="gray.700" pb={2}>
          SignIn
        </Text>
        <Text>Fill out your auth credentials and sign in.</Text>

        <Spacer height={20} />

        <Input
          onChangeText={text => setEmail(text)}
          value={email}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect={false}
          isDisabled={loading}
          size="md"
        />
        <Spacer height={12} />
        <Input
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          autoCapitalize="none"
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
            onPress={() => navigation.navigate('SignUp')}>
            New user? SingUp here
          </Button>
          <Button
            px={6}
            variant="solid"
            isLoading={loading}
            onPress={() => signInWithEmail()}>
            Sign In
          </Button>
        </HStack>
      </VStack>
    </>
  );
}
