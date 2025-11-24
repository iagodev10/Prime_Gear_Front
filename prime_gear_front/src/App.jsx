import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { LoaderProvider, useLoader } from './contexts/LoaderContext'
import { AnimatePresence } from 'framer-motion'

import './App.css'

import HomePage from './pages/HomePage'
import Store from './pages/StorePage'
import ProductPage from './pages/ProductPage'
import LoginPage from './pages/LoginPage'
import Institutional from './pages/InstitutionalPage'
import FaleConosco from './pages/FaleConosco'
import PrimeiraCompra from './pages/PrimeiraCompra'

import AdminDashboard from './pages/AdminDashboard'
import AdminProdutos from './pages/AdminProdutos'
import AdminCategorias from './pages/AdminCategorias'
import AdminFornecedor from './pages/AdminFornecedor'
import AdminTransportadora from './pages/AdminTransportadora'
import AdminUsers from './pages/AdminUsers'
import AdminPedidos from './pages/AdminPedidos'
import AdminMarcas from './pages/AdminMarcas'

import PageLoader from './components/PageLoader'

import AdminLayout from './components/AdminLayout'
import PublicLayout from './components/PublicLayout'

// App.jsx (somente AppContent ATUALIZADO)
const AppContent = () => {
  const { isLoading, startLoading } = useLoader();
  const location = useLocation();
  const prevPathname = React.useRef(null);
  const isFirstRender = React.useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      prevPathname.current = location.pathname;
      return;
    }

    if (prevPathname.current !== location.pathname) {
      startLoading();
      prevPathname.current = location.pathname;
    }
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <PageLoader key="loader" />
      ) : (
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<HomePage />} />
            <Route path="loja" element={<Store />} />
            <Route path="detalhe" element={<ProductPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="institucional" element={<Institutional />} />
            <Route path="fale-conosco" element={<FaleConosco />} />
            <Route path="primeira-compra" element={<PrimeiraCompra />} />
          </Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="produtos" element={<AdminProdutos />} />
            <Route path="categorias" element={<AdminCategorias />} />
            <Route path="marcas" element={<AdminMarcas />} />
            <Route path="fornecedores" element={<AdminFornecedor />} />
            <Route path="pedidos" element={<AdminPedidos />} />
            <Route path="transportadoras" element={<AdminTransportadora />} />
            <Route path="usuarios" element={<AdminUsers />} />
          </Route>
        </Routes>
      )}
    </AnimatePresence>
  );
};


function App() {
  return (
    <LoaderProvider>
      <AppContent />
    </LoaderProvider>
  )
}

export default App
