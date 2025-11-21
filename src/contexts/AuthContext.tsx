
import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProfile } from '../types';
import { generateUUID } from '../utils';

interface AuthContextType {
  user: UserProfile | null;
  login: (name: string) => void;
  logout: () => void;
  upgradeToPremium: () => void; // Mock function for demo
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check local storage for existing session
    try {
      const stored = localStorage.getItem('tvde_pro_user');
      if (stored) {
        setUser(JSON.parse(stored));
      }
    } catch (error) {
      console.warn('Erro ao aceder ao localStorage (Auth):', error);
    }
    setIsLoading(false);
  }, []);

  const login = (name: string) => {
    const newUser: UserProfile = {
      id: generateUUID(),
      name,
      isPremium: false // Default to Free
    };
    setUser(newUser);
    try {
      localStorage.setItem('tvde_pro_user', JSON.stringify(newUser));
    } catch (error) {
      console.warn('Erro ao guardar login:', error);
    }
  };

  const logout = () => {
    setUser(null);
    try {
      localStorage.removeItem('tvde_pro_user');
    } catch (error) {
      console.warn('Erro ao fazer logout:', error);
    }
  };

  const upgradeToPremium = () => {
    if (user) {
      const updated = { ...user, isPremium: true };
      setUser(updated);
      try {
        localStorage.setItem('tvde_pro_user', JSON.stringify(updated));
        alert("Conta atualizada para PREMIUM! Acesso ilimitado desbloqueado.");
      } catch (error) {
        console.warn('Erro ao atualizar perfil:', error);
        alert("Conta atualizada (sessão atual), mas não foi possível guardar permanentemente.");
      }
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, upgradeToPremium, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};