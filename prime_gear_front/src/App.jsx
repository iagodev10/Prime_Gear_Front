import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import Store from './pages/StorePage'
import ProductPage from './pages/ProductPage'
import LoginPage from './pages/LoginPage'
import Institutional from './pages/InstitutionalPage'
import FaleConosco from './pages/FaleConosco'
import PrimeiraCompra from './pages/PrimeiraCompra'

import AdminDashboard from './pages/AdminDashboard'
import AdminProdutos from './pages/AdminProdutos'


import AdminLayout from './components/AdminLayout'
import PublicLayout from './components/PublicLayout'

function App() {
  return (
    <>
      <Routes>
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
        </Route>
      </Routes>
    </>
  )
}

export default App
