/* eslint-disable no-unused-vars */
import React, { createContext, ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { APPLICATION_TOKEN } from '../constants/common.constant';
import { IRegisterUser } from '../types/common.type';

// Define User Type

// Define Auth Context State
interface AuthContextType {
  user: IRegisterUser | null;
  token: string | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  refetchUser: () => Promise<void>;
}

// Create Context
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
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
  const [loading, setLoading] = useState<boolean>(true);
  const [isMount, setisMount] = useState<boolean>(true);

  useEffect(() => {
    setisMount(true);
  }, []);
  useEffect(() => {
    if (isMount) {
      setToken(localStorage.getItem(APPLICATION_TOKEN));
    }
  }, [isMount]);

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem(APPLICATION_TOKEN);
  };
  const refetchUser = useCallback(async () => {
    if (!token) return;
    setLoading(true);
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
      setLoading(false);
    }
  }, [token]);
  const login = async (email: string, password: string) => {
    setLoading(true);
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
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isMount) {
      if (token) refetchUser();
      else setLoading(false);
    }
  }, [token, refetchUser, isMount]);

  // ✅ Use useMemo to optimize context value
  const contextValue = useMemo(
    () => ({
      user,
      token,
      loading,
      login,
      logout,
      refetchUser,
    }),
    [user, token, loading, refetchUser]
  );

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

// Custom Hook to use Auth Context
export const useAuth = (): AuthContextType => {
  const context = React.useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
