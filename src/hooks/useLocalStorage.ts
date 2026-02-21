import { useState, useEffect } from 'react';

/**
 * Hook genérico para usar localStorage com React
 * @param key - Chave do localStorage
 * @param initialValue - Valor inicial caso não exista no localStorage
 * @returns [valor, função para atualizar]
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
  // State para armazenar o valor
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      // Pegar do localStorage
      const item = window.localStorage.getItem(key);
      // Parse JSON ou retornar initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Erro ao carregar ${key} do localStorage:`, error);
      return initialValue;
    }
  });

  // Função para atualizar o valor
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Permitir value ser uma função (mesmo comportamento do useState)
      const valueToStore = value instanceof Function ? value(storedValue) : value;

      // Salvar state
      setStoredValue(valueToStore);

      // Salvar no localStorage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Erro ao salvar ${key} no localStorage:`, error);
    }
  };

  // Sincronizar com mudanças do localStorage (quando outro tab/janela muda)
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key && e.newValue) {
        try {
          setStoredValue(JSON.parse(e.newValue));
        } catch (error) {
          console.error(`Erro ao sincronizar ${key}:`, error);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [key]);

  return [storedValue, setValue] as const;
}
