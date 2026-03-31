import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

interface AdminUser {
  id: string;
  name: string;
  email: string;
}

interface AdminContextType {
  admin: AdminUser | null;
  isAdminAuthenticated: boolean;
  adminLogin: (email: string, password: string) => Promise<{ success: boolean; message: string }>;
  adminLogout: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

// Credenciais do administrador (fixas)
const ADMIN_CREDENTIALS = {
  email: 'admin@genki.com.br',
  password: 'genkiadmin2026',
};

export function AdminProvider({ children }: { children: React.ReactNode }) {
  const [admin, setAdmin] = useState<AdminUser | null>(() => {
    // Recuperar admin do sessionStorage ao carregar
    const savedAdmin = sessionStorage.getItem('adminUser');
    return savedAdmin ? JSON.parse(savedAdmin) : null;
  });

  // Salvar admin no sessionStorage quando mudar
  useEffect(() => {
    if (admin) {
      sessionStorage.setItem('adminUser', JSON.stringify(admin));
      sessionStorage.setItem('adminToken', 'authenticated');
    } else {
      sessionStorage.removeItem('adminUser');
      sessionStorage.removeItem('adminToken');
    }
  }, [admin]);

  const adminLogin = useCallback(
    async (email: string, password: string): Promise<{ success: boolean; message: string }> => {
      // Simular delay de API
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Verificar credenciais do administrador
      if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
        const adminUser: AdminUser = {
          id: 'admin-genki',
          name: 'Administrador GENKI',
          email: ADMIN_CREDENTIALS.email,
        };
        setAdmin(adminUser);
        return { success: true, message: 'Login realizado com sucesso!' };
      }

      return { success: false, message: 'Email ou senha incorretos!' };
    },
    []
  );

  const adminLogout = useCallback(() => {
    setAdmin(null);
  }, []);

  return (
    <AdminContext.Provider
      value={{
        admin,
        isAdminAuthenticated: !!admin,
        adminLogin,
        adminLogout,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin deve ser usado dentro de AdminProvider');
  }
  return context;
}
