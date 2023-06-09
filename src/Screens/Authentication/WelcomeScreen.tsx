import {StatusBar} from 'react-native';
import React from 'react';
import {Colors} from '../../Utils';
import {styled, View} from 'dripsy';
import {Text as MotiText} from 'moti';
import {Code} from '@expo/html-elements';
import {Button} from '../../Components/index';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthStackNavigationParms} from './AuthenticationStack';
import BottomSheet from '../../Components/BottomSheet';

const TitleText = styled(MotiText)({
  color: '$white',
  fontSize: 72,
  fontWeight: 900,
  padding: 0,
});

type Props = {
  navigation: StackNavigationProp<AuthStackNavigationParms, 'Welcome'>;
};

const WelcomeScreen: React.FC<Props> = ({navigation}) => {
  return (
    <>
      <View
        sx={{
          py: '$2',
          px: '$3',
          backgroundColor: '$background',
          flex: 1,
        }}>
        <StatusBar backgroundColor={Colors.$black} barStyle="light-content" />
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
        <View sx={{display: 'flex', flexDirection: 'row', gap: 12}}>
          <Button sx={{flex: 1}} onPress={() => navigation.navigate('SignIn')}>
            Sign In
          </Button>
          <Button sx={{flex: 1}} onPress={() => navigation.navigate('SignIn')}>
            OpenModel
          </Button>
          <Button
            sx={{flex: 1}}
            varient="outline"
            onPress={() => navigation.navigate('SignUp')}>
            Sign Up
          </Button>
        </View>
      </View>
      <BottomSheet />
    </>
  );
};

export default WelcomeScreen;
