import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {
  AuthScreenTemplate,
  Button,
  Spacer,
  ValidationInput,
} from '../../Components';
import {FormRules} from '../../Utils';
import {AuthStackNavigationParms} from './AuthenticationStack';

type Props = {
  navigation: StackNavigationProp<AuthStackNavigationParms, 'ForgotPassword'>;
  route: RouteProp<AuthStackNavigationParms, 'ForgotPassword'>;
};

const ForgotPasswordScreen: React.FC<Props> = ({navigation, route}) => {
  const [loading] = useState<boolean>(false);
  const {control, handleSubmit} = useForm();
  const email = route?.params?.email;

  return (
    <AuthScreenTemplate
      title="Forgot Your Password?"
      subtitle="Reset Your password with email"
      goBack={navigation.goBack}>
      <>
        <ValidationInput
          placeholder="Email"
          disabled={loading}
          defaultValue={email && email}
          //react-hook-form
          control={control}
          name="email"
          rules={FormRules.email}
        />
        <Spacer height={34} />

        <Button
          varient="fill"
          loading={loading}
          onPress={handleSubmit(data => console.log(data))}>
          Sent reset link
        </Button>
      </>
    </AuthScreenTemplate>
  );
};
export default ForgotPasswordScreen;
