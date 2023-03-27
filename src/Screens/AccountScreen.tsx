import React from 'react';
import Button from '../Components/Button';
import Input from '../Components/Input';
import Spacer from '../Components/Spacer';
import {View} from 'dripsy';
import useFetchState from '../Utils/hooks/useFetchState';

export default function AccountScreen() {
  const [state, dispatch] = useFetchState();

  const updateProfile = () => {};

  return (
    <View
      sx={{
        backgroundColor: '$black',
        flex: 1,
        justifyContent: 'center',
        px: '$4',
      }}>
      <View sx={{borderRadius: 100, overflow: 'hidden', alignItems: 'center'}}>
        {/* <Image
          source={avatar}
          sx={{width: 112, height: 112, borderRadius: 100}}
        /> */}
      </View>
      <Spacer height={40} />
      <Input
        placeholder="Email"
        value={'sanaysspace.15@gmail.com'}
        disabled={true}
      />
      <Spacer height={8} />
      <Input
        placeholder="Username"
        value={state?.data?.username || ''}
        onChangeText={text => setUsername(text)}
      />
      <Spacer height={8} />
      <Input
        placeholder="Website"
        value={email || ''}
        onChangeText={text => setEmail(text)}
      />
      <Spacer height={34} />
      <Button onPress={() => updateProfile()} loading={loading}>
        Update
      </Button>

      <Button disabled={loading} children="Sign Out" varient="clear" />
    </View>
  );
}
