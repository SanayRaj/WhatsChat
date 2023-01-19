import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import Button from '../../Components/Button';
import {Colors} from '../../Utils';

const WelcomeScreen = ({navigation}: any) => {
  return (
    <View className="flex flex-1 items-center justify-around bg-black from-slate-800 to-red-800 bg-gradient-to-tr">
      <StatusBar backgroundColor={Colors.black} barStyle="light-content" />
      <View>
        <Text className=" text-2xl font-[Montserrat-Bold] text-white">
          Welcome To
        </Text>
        <Text className="text-4xl font-[Montserrat-Bold] m-1 text-white">
          WhatsChat
        </Text>
      </View>

      <View className="w-full px-8">
        <Button
          className="my-2"
          textStyles="text-black text-base"
          onPress={() => navigation.navigate('SignUp')}>
          Sign up free
        </Button>
        <Button
          className="rounded-3xl flex items-center my-2"
          varient="outline"
          textStyles="text-base"
          onPress={() => navigation.navigate('SignIn')}>
          Log in
        </Button>
      </View>
    </View>
  );
};

export default WelcomeScreen;
