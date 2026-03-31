import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  telefone?: string;
  profissao?: string;
  password: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; isAdmin?: boolean }>;
  register: (userData: Omit<User, 'id'>) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Credenciais do administrador (fixas)
const ADMIN_CREDENTIALS = {
  email: 'admin@genki.com.br',
  password: 'genkiadmin2026',
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    // Recuperar usuário do sessionStorage ao carregar
    const savedUser = sessionStorage.getItem('currentUser');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Salvar usuário no sessionStorage quando mudar
  useEffect(() => {
    if (user) {
      sessionStorage.setItem('currentUser', JSON.stringify(user));
    } else {
      sessionStorage.removeItem('currentUser');
    }
  }, [user]);

  const register = useCallback(async (userData: Omit<User, 'id'>): Promise<boolean> => {
    // Simular delay de API
    await new Promise(resolve => setTimeout(resolve, 800));

    // Recuperar usuários registrados do localStorage
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');

    // Verificar se o email já está cadastrado
    if (registeredUsers.some((u: User) => u.email === userData.email)) {
      return false; // Email já cadastrado
    }

    // Criar novo usuário
    const newUser: User = {
      ...userData,
      id: 'user-' + Date.now(),
    };

    // Salvar no localStorage
    registeredUsers.push(newUser);
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

    return true;
  }, []);

  const login = useCallback(async (email: string, password: string): Promise<{ success: boolean; isAdmin?: boolean }> => {
    // Simular delay de API
    await new Promise(resolve => setTimeout(resolve, 800));

    // Verificar se é o administrador
    if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
      const adminUser: User = {
        id: 'admin',
        name: 'Administrador GENKI',
        email: ADMIN_CREDENTIALS.email,
        password: ADMIN_CREDENTIALS.password,
      };
      setUser(adminUser);
      localStorage.setItem('adminToken', 'admin-authenticated');
      return { success: true, isAdmin: true };
    }

    // Recuperar usuários registrados do localStorage
    const registeredUsers: User[] = JSON.parse(localStorage.getItem('registeredUsers') || '[]');

    // Buscar usuário com email e senha exatos
    const foundUser = registeredUsers.find(
      (u: User) => u.email === email && u.password === password
    );

    if (foundUser) {
      setUser(foundUser);
      return { success: true, isAdmin: false };
    }

    return { success: false };
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    sessionStorage.removeItem('currentUser');
    localStorage.removeItem('adminToken');
  }, []);

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated: !!user,
      login,
      register,
      logout,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
