/* eslint-disable no-unused-vars */
import React, { createContext, PropsWithChildren, useCallback, useEffect, useMemo, useState } from 'react';
import { APPLICATION_TOKEN } from '../constants/common.constant';
import { IRegisterUser } from '../types/common.type';
import { delay } from '../components/utils';

// Define User Type

// Define Auth Context State
interface AuthContextType {
  user: IRegisterUser | null;
  token: string | null;
  authLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  refetchUser: () => Promise<void>;
  setUser: React.Dispatch<React.SetStateAction<IRegisterUser | null>>;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
}

// Create Context
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<IRegisterUser | null>({
    id: '822a',
    firstName: 'Ananda',
    lastName: 'Gharami',
    email: 'tamalkundu007@gmail.com',
    password: '8420@nandA',
    phone: '9878767656',
    role: 'admin',
  });
  const [token, setToken] = useState<string | null>(localStorage.getItem(APPLICATION_TOKEN));
  const [authLoading, setAuthLoading] = useState<boolean>(true);
  const [isMount, setisMount] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setisMount(true);
    }, 3000);
  }, []);
  useEffect(() => {
    if (isMount) {
      console.log(localStorage.getItem(APPLICATION_TOKEN), APPLICATION_TOKEN, 'kjjkl');
      setToken(localStorage.getItem(APPLICATION_TOKEN));
    }
  }, [isMount]);

  const logout = async () => {
    setAuthLoading(true);
    await delay(2000);
    setUser(null);
    setToken(null);
    localStorage.removeItem(APPLICATION_TOKEN);
    setAuthLoading(false);
  };
  const refetchUser = useCallback(async () => {
    if (!token) return;
    setAuthLoading(true);
    try {
      setUser({
        id: '822a',
        firstName: 'Ananda',
        lastName: 'Gharami',
        email: 'tamalkundu007@gmail.com',
        password: '8420@nandA',
        // phone: '9878767656',
        role: 'admin',
      });
      // const response = await fetch('/api/auth/me', {
      //   method: 'GET',
      //   headers: { Authorization: `Bearer ${token}` },
      // });

      // if (!response.ok) throw new Error('Failed to fetch user');

      // const userData: IRegisterUser = await response.json();
      // setUser(userData);
    } catch (error) {
      // console.error('Refetch user failed:', error);
      logout();
    } finally {
      setAuthLoading(false);
    }
  }, [token]);
  const login = async (email: string, password: string) => {
    setAuthLoading(true);
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) throw new Error('Invalid credentials');

      const data = await response.json();
      setToken(data.token);
      localStorage.setItem('authToken', data.token);
      await refetchUser();
    } catch (error) {
      // console.error('Login failed:', error);
    } finally {
      setAuthLoading(false);
    }
  };

  useEffect(() => {
    if (isMount) {
      if (token) refetchUser();
      else setAuthLoading(false);
    }
  }, [token, refetchUser, isMount]);

  // ✅ Use useMemo to optimize context value
  const contextValue = useMemo(
    () => ({
      user,
      token,
      authLoading,
      login,
      logout,
      refetchUser,
      setUser,
      setToken,
    }),
    [user, token, authLoading, refetchUser]
  );

  return (
    <AuthContext.Provider value={contextValue}>
      {authLoading ? <p>authentication Loading...</p> : children}
    </AuthContext.Provider>
  );
};

// Custom Hook to use Auth Context
export const useAuth = (): AuthContextType => {
  const context = React.useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
