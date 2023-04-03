import {Session} from '@supabase/supabase-js';
import React, {useContext, useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Supabase} from './supabase.config';

export const AuthContext = React.createContext({});

export const useAuth: any = () => useContext(AuthContext);

const AuthProvider: React.FC<{children: JSX.Element}> = ({children}) => {
  const [appSession, setAppSession] = useState<Session | null>(null);

  useEffect(() => {
    Supabase.auth
      .getSession()
      .then(({data: {session}}) => setAppSession(session));

    Supabase.auth.onAuthStateChange((_event, session) =>
      setAppSession(session)
    );
    SplashScreen.hide();
  }, []);

  return (
    <AuthContext.Provider value={{appSession}}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
