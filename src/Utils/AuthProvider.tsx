import { Session } from '@supabase/supabase-js';
import React, { useContext, useEffect, useState } from 'react';
import SplashScreen from '../Components/SplashScreen';
import { supabase } from './supabase';

export type User = {
  id: any;
  username: string;
  avatar_url: string;
  is_online: boolean;
};

export const AuthContext = React.createContext({});

export const useAuth = () => {
  const context = useContext(AuthContext);
  //@ts-ignore
  return context?.session;
};

export default function AuthProvider({
  children,
}: {
  children: React.ReactElement;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [appSession, setAppSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  async function getProfile() {
    try {
      if (!appSession?.user) return;

      let {data, error, status} = await supabase
        .from('profiles')
        .select(`username, is_online, avatar_url`)
        .eq('id', appSession?.user.id)
        .single();
      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUser({
          id: appSession?.user.id,
          username: data.username,
          avatar_url: data.avatar_url,
          is_online: data.is_online,
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);

        // Toast.show({
        //   render: () => {
        //     return (
        //       <Box bg="red.500" px="2" py="1" rounded="sm" mb={5}>
        //         {/* @ts-ignore */}
        //         <Text color="white">{error?.message}</Text>
        //       </Box>
        //     );
        //   },
        // });
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    supabase.auth.getSession().then(({data: {session}}) => {
      setAppSession(session);
      getProfile();
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setAppSession(session);
    });
  }, []);

  return (
    <AuthContext.Provider value={{session: appSession, user}}>
      {loading ? <SplashScreen /> : children}
    </AuthContext.Provider>
  );
}
