import React, { createContext, useState, useContext, useEffect, useRef } from 'react';

// 1. Criar o Contexto
const LoaderContext = createContext();

// 2. Criar o Provedor (Provider)
export const LoaderProvider = ({ children }) => {
  // Começa como 'true' para o carregamento inicial do site
  const [isLoading, setIsLoading] = useState(true);
  const isInitialMount = useRef(true);

  // Efeito para o carregamento inicial (simula o "splash screen")
  useEffect(() => {
    // Esconde o loader após 1.5 segundos (ajuste o tempo)
    const timer = setTimeout(() => {
      setIsLoading(false);
      isInitialMount.current = false;
    }, 1500); 

    // Limpa o timer se o componente for desmontado
    return () => clearTimeout(timer);
  }, []); // O array vazio [] garante que isso rode SÓ UMA VEZ

  // Função para ativar o loader manualmente (para troca de páginas)
  const startLoading = () => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // Tempo menor para troca de páginas
    return () => clearTimeout(timer);
  };

  return (
    <LoaderContext.Provider value={{ isLoading, setIsLoading, startLoading }}>
      {children}
    </LoaderContext.Provider>
  );
};

// 3. Criar o Hook customizado para usar o contexto
export const useLoader = () => {
  return useContext(LoaderContext);
};

