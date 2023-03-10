import {useState, useEffect} from 'react';
import {StyleSheet, View, Alert, Image, ActivityIndicator} from 'react-native';
import {Colors, Supabase} from '../Utils';
import Button from '../Components/Button';
import {useAuth} from '../Utils/AuthProvider';
import Input from '../Components/Input';
import Spacer from '../Components/Spacer';

const avatar = require('../../assets/images/avatars/cat.png');

export default function AccountScreen({navigation}: {navigation: any}) {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');

  const session = useAuth();

  useEffect(() => {
    if (session) {
      getProfile();
    }
  }, [session]);

  async function getProfile() {
    try {
      setLoading(true);
      if (!session?.user) {
        // navigation.navigate('SignIn')
        throw new Error('No user on the session!');
        return;
      }

      let {data, error, status} = await Supabase.from('profiles')
        .select('username, email, avatar_url')
        .eq('id', session?.user.id)
        .single();
      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
        setEmail(data.email);
        setAvatarUrl(data.avatar_url);
        console.log(data);
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile({
    username,
    email,
    avatar_url,
  }: {
    username: string;
    email: string;
    avatar_url: string;
  }) {
    try {
      setLoading(true);
      if (!session?.user) {
        throw new Error('No user on the session!');
      }

      const updates = {
        id: session?.user.id,
        username,
        email,
        avatar_url,
        updated_at: new Date(),
      };

      let {error} = await Supabase.from('profiles').upsert(updates);

      if (error) {
        throw error;
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <View className="bg-black flex flex-1 px-8 justify-center">
        <View className="rounded-full flex items-center">
          <Image source={avatar} className="w-28 h-28 rounded-full" />
        </View>
        <Spacer height={40} />
        <Input
          placeholder="Email"
          value={session?.user?.email}
          disabled={true}
        />
        <Spacer height={8} />
        <Input
          placeholder="Username"
          value={username || ''}
          onChangeText={text => setUsername(text)}
        />
        <Spacer height={8} />
        <Input
          placeholder="Website"
          value={email || ''}
          onChangeText={text => setEmail(text)}
        />
        <Spacer height={34} />

        <Button
          className="my-2"
          disabled={loading}
          children="Sign Out"
          onPress={() => Supabase.auth.signOut()}
        />

        <Button
          className="my-2"
          children={loading ? 'Loading ...' : 'Update'}
          onPress={() =>
            updateProfile({username, email, avatar_url: avatarUrl})
          }
          disabled={loading}
          varient="clear"
        />
      </View>
      {loading && (
        <View
          style={StyleSheet.absoluteFill}
          className="bg-black bg-opacity-10 opacity-60 flex items-center justify-center">
          <ActivityIndicator size={50} color={Colors.primary[500]} />
        </View>
      )}
    </>
  );
}
