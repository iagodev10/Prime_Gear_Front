// LoaderContext.js
import React, { createContext, useState, useContext, useEffect, useRef } from 'react';

const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const isInitialMount = useRef(true);

  // Loader inicial (splash screen)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      isInitialMount.current = false;
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Loader rápido para troca de páginas
  const startLoading = () => {
    setIsLoading(true);

    // remove atrasos fixos → loader sincronizado com o render
    requestAnimationFrame(() => {
      setIsLoading(false);
    });
  };

  return (
    <LoaderContext.Provider value={{ isLoading, startLoading }}>
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => useContext(LoaderContext);
