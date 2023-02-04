import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import Button from '../../Components/Button';
import {Colors} from '../../Utils';
import {Image} from 'react-native';

const WelcomeScreen = ({navigation}: any) => {
  return (
    <View className="flex flex-1 items-center justify-between py-14 bg-black from-slate-800 to-red-800 bg-gradient-to-tr">
      <StatusBar backgroundColor={Colors.black} barStyle="light-content" />
      <View className="flex-1 flex-row items-center h-full pl-10">
        {/* <Text className=" text-2xl font-sans text-white">Welcome To</Text> */}
        <View className="flex-1">
          <Text className="text-7xl font-sansBold m-1 text-white">Find</Text>
          <Text className="text-6xl font-sansBold m-1 text-white">Meet</Text>
          <Text className="text-8xl font-sansBold m-1 text-white">Talk</Text>
        </View>
      </View>

      <View className="w-full px-8">
        <Button className="my-2" onPress={() => navigation.navigate('SignUp')}>
          Sign up free
        </Button>
        <Button
          className="rounded-3xl flex items-center my-2"
          varient="outline"
          onPress={() => navigation.navigate('SignIn')}>
          Log in
        </Button>
      </View>
    </View>
  );
};

export default WelcomeScreen;
