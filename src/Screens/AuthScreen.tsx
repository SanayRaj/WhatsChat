import React, {useState} from 'react';
import {
  Alert,
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Colors, Fonts, Supabase} from '../Utils';

export default function AuthScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const {error} = await Supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      Alert.alert(error.message);
    }
    setLoading(false);
  }

  async function signUpWithEmail() {
    setLoading(true);
    const {error} = await Supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      Alert.alert(error.message);
    }
    setLoading(false);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SignIn</Text>
      <Text style={styles.subtitle}>
        Fill out your auth credentials and sign in.
      </Text>
      <TextInput
        style={styles.textInput}
        onChangeText={text => setEmail(text)}
        value={email}
        placeholder="email@address.com"
        autoCapitalize={'none'}
      />

      <TextInput
        style={styles.textInput}
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry={true}
        placeholder="Password"
        autoCapitalize={'none'}
      />

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        disabled={loading}
        onPress={() => signInWithEmail()}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <View style={{flex: 1}}>
        <Text>Hi</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: Fonts.Bold,
    fontSize: 24,
    color: Colors.gray[700],
    width: '100%',
    paddingBottom: 8,
  },
  subtitle: {
    fontFamily: Fonts.Medium,
    fontSize: 18,
    color: Colors.gray[500],
    width: '100%',
    paddingBottom: 56,
  },
  button: {
    backgroundColor: Colors.blue[500],
    width: '100%',
    paddingVertical: 12,
    borderRadius: 100,
    marginTop: 24,
    elevation: 4,
  },
  buttonText: {
    textAlign: 'center',
    width: '100%',
    color: '#FFF',
    fontFamily: Fonts.SemiBold,
  },
  textInput: {
    padding: 12,
    borderRadius: 100,
    backgroundColor: '#FFF',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
    width: '100%',
    marginTop: 12,
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
