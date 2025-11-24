// LoaderContext.js
import React, { createContext, useState, useContext, useEffect, useRef } from 'react';

const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const isInitialMount = useRef(true);
  const timeoutRef = useRef(null);

  // Loader inicial (splash screen mais curto)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      isInitialMount.current = false;
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Loader rápido para troca de páginas (mínimo visível de 300ms)
  const startLoading = () => {
    setIsLoading(true);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsLoading(false);
      timeoutRef.current = null;
    }, 300);
  };

  return (
    <LoaderContext.Provider value={{ isLoading, startLoading }}>
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => useContext(LoaderContext);
