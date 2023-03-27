import React, {useContext, useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

export type User = {
  uid: any;
  username: string;
  avatar_url: string;
  is_online: boolean;
};

export const AuthContext = React.createContext({});

export const useAuth: any = () => {
  const context = useContext(AuthContext);
  return context;
};

export default function AuthProvider({
  children,
}: {
  children: React.ReactElement;
}) {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <AuthContext.Provider value={{name: 'sanay'}}>
      {children}
    </AuthContext.Provider>
  );
}
