import {Text, View} from 'dripsy';
import React from 'react';
import {KeyboardAvoidingView, StatusBar, StyleSheet} from 'react-native';
import {IconButton, Spacer} from './index';
import {Colors} from '../Utils';

type AuthScreenTemplateProps = {
  title: string;
  subtitle: string;
  children: JSX.Element;
  goBack: any;
};

const AuthScreenTemplate: React.FC<AuthScreenTemplateProps> = ({
  title,
  subtitle,
  children,
  goBack,
}) => {
  return (
    <KeyboardAvoidingView style={styles.wraper}>
      <StatusBar backgroundColor={Colors.$black} barStyle="light-content" />
      <View
        sx={{
          display: 'flex',
          flex: 1,
          mx: 'auto',
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
            onPress={() => goBack()}
          />
        </View>
        <View
          sx={{display: 'flex', flex: 1, px: '$4', justifyContent: 'center'}}>
          <Text sx={{fontWeight: 800, color: '$gray.300', fontSize: '$7'}}>
            {title}
          </Text>
          <Text sx={{fontSize: '$2', color: '$gray.300'}}>{subtitle}</Text>
          <Spacer height={40} />
          {children}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  wraper: {
    flex: 1,
    backgroundColor: Colors.$black,
  },
});

export default AuthScreenTemplate;
