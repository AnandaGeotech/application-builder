/* eslint-disable no-unused-vars */
import React, { createContext, PropsWithChildren, useCallback, useEffect, useMemo, useState } from 'react';
import { APPLICATION_TOKEN } from '../constants/common.constant';
import { IRegisterUser } from '../types/common.type';
import { delay } from '../components/utils';
import DashboardSkeletonLoader from '../components/loader/DashboardSkeletonLoader';

// Define User Type

// Define Auth Context State
interface AuthContextType {
  user: IRegisterUser | null;
  token: string | null;
  authLoading: boolean;
  logout: () => void;
  refetchUser: () => Promise<void>;
  setUser: React.Dispatch<React.SetStateAction<IRegisterUser | null>>;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
}

// Create Context
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<IRegisterUser | null>(null);
  const [token, setToken] = useState<string | null>(localStorage.getItem(APPLICATION_TOKEN));
  const [authLoading, setAuthLoading] = useState<boolean>(true);
  const [isMount, setisMount] = useState<boolean>(false);

  useEffect(() => {
    setisMount(true);
  }, []);
  useEffect(() => {
    if (isMount) {
      setToken(localStorage.getItem(APPLICATION_TOKEN));
    }
  }, [isMount]);

  const logout = async () => {
    setAuthLoading(true);
    localStorage.removeItem(APPLICATION_TOKEN);
    await delay(2000);
    setUser(null);
    setToken(null);
    setAuthLoading(false);
  };
  const refetchUser = useCallback(async () => {
    if (!token) return;
    setAuthLoading(true);
    await delay(3000);
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
      logout,
      refetchUser,
      setUser,
      setToken,
    }),
    [user, token, authLoading, refetchUser]
  );

  return (
    <AuthContext.Provider value={contextValue}>
      {authLoading ? <DashboardSkeletonLoader /> : children}
    </AuthContext.Provider>
  );
};

// Custom Hook to use Auth Context
export const useAuth = (): AuthContextType => {
  const context = React.useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
