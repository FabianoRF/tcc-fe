import React, { createContext, useCallback, useState, useContext } from 'react';

import api from '../services/api';

interface User {
  id: string;
  email: string;
  avatar_url: string;
  name: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface Credentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: Credentials): Promise<void>;
  signOut(): void;
  updateUser(user: User): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [userData, setUserData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@app:token');
    const user = localStorage.getItem('@app:user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem('@app:token', token);
    localStorage.setItem('@app:user', JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${token}`;

    // setUserData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@app:token');
    localStorage.removeItem('@app:user');

    setUserData({} as AuthState);
  }, []);

  const updateUser = useCallback(
    (user: User) => {
      setUserData({
        token: userData.token,
        user,
      });
    },
    [userData.token, setUserData],
  );

  return (
    <AuthContext.Provider
      value={{ user: userData.user, signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
