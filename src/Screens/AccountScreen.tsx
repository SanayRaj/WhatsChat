import {useState, useEffect} from 'react';
import {StyleSheet, View, Alert, Image} from 'react-native';
import {supabase} from '../Utils/supabase';
import Input from '../Components/Input';
import Button from '../Components/Button';
import {useAuth} from '../Utils/AuthProvider';
import {Colors} from '../Utils';

const avatar = require('../../assets/images/avatars/cat.png');

export default function AccountScreen({navigation}: {navigation: any}) {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState('');
  const [website, setWebsite] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');

  const session = useAuth();

  useEffect(() => {
    if (session) getProfile();
  }, [session]);

  async function getProfile() {
    try {
      setLoading(true);
      if (!session?.user) {
        // navigation.navigate('SignIn')
        throw new Error('No user on the session!');
        return;
      }

      let {data, error, status} = await supabase
        .from('profiles')
        .select(`username, website, avatar_url`)
        .eq('id', session?.user.id)
        .single();
      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
        setWebsite(data.website);
        setAvatarUrl(data.avatar_url);
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
    website,
    avatar_url,
  }: {
    username: string;
    website: string;
    avatar_url: string;
  }) {
    try {
      setLoading(true);
      if (!session?.user) throw new Error('No user on the session!');

      const updates = {
        id: session?.user.id,
        username,
        website,
        avatar_url,
        updated_at: new Date(),
      };

      let {error} = await supabase.from('profiles').upsert(updates);

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
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Image source={avatar} style={{width: 80, height: 80}} />
      </View>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Input
          placeholder="Email"
          value={session?.user?.email}
          editable={false}
        />
      </View>
      <View style={styles.verticallySpaced}>
        <Input
          placeholder="Username"
          value={username || ''}
          onChangeText={text => setUsername(text)}
        />
      </View>
      <View style={styles.verticallySpaced}>
        <Input
          placeholder="Website"
          value={website || ''}
          onChangeText={text => setWebsite(text)}
        />
      </View>

      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Button
          children={loading ? 'Loading ...' : 'Update'}
          onPress={() =>
            updateProfile({username, website, avatar_url: avatarUrl})
          }
          disabled={loading}
          type={'flat'}
        />
      </View>

      <View style={styles.verticallySpaced}>
        <Button
          disabled
          children="Sign Out"
          onPress={() => supabase.auth.signOut()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    backgroundColor: Colors.gray[500],
    elevation: 8,
    borderRadius: 100,
    borderColor: Colors.stone[800],
    borderWidth: 1,
    overflow: 'hidden',
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
  },
  mt20: {
    marginTop: 20,
  },
  container: {
    backgroundColor: Colors.gray[100],
    flex: 1,
    display: 'flex',
    // justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingTop: '28%',
  },
});
