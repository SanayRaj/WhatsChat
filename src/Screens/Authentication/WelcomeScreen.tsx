import {StatusBar} from 'react-native';
import React from 'react';
import Button from '../../Components/Button';
import {Colors} from '../../Utils';
import {styled, View} from 'dripsy';
import {Text as MotiText} from 'moti';
import {Code} from '@expo/html-elements';

const TitleText = styled(MotiText)({
  color: 'white',
  fontSize: 72,
  fontWeight: 900,
  padding: 0,
});

const WelcomeScreen = ({navigation}: any) => {
  return (
    <View
      sx={{
        paddingY: 56,
        backgroundColor: '$background',
        flex: 1,
        px: '$4',
        // padding: 100,
      }}>
      <StatusBar backgroundColor={Colors.black} barStyle="light-content" />
      <View sx={{flex: 1}}>
        <TitleText
          from={{opacity: 0, translateX: -250}}
          animate={{opacity: 1, translateX: 0}}
          transition={{
            type: 'timing',
            duration: 600,
          }}
          sx={{fontSize: 76}}>
          Find
        </TitleText>
        <TitleText
          from={{opacity: 0, translateX: 250}}
          animate={{opacity: 1, translateX: 0}}
          transition={{
            type: 'timing',
            duration: 600,
          }}
          sx={{fontSize: 60}}>
          Meet
        </TitleText>
        <TitleText
          from={{opacity: 0, translateX: -250}}
          animate={{opacity: 1, translateX: 0}}
          transition={{
            type: 'timing',
            duration: 600,
          }}
          sx={{fontSize: 96}}>
          Talk
        </TitleText>
      </View>
      <Code />
      <Button onPress={() => navigation.navigate('SignUp')}>
        Sign up free
      </Button>
      {/*
      <View className="w-full px-8">

        <Button
          className="rounded-3xl flex items-center my-2"
          varient="outline"
          onPress={() => navigation.navigate('SignIn')}>
          Log in
        </Button>
      </View> */}
    </View>
  );
};

export default WelcomeScreen;
