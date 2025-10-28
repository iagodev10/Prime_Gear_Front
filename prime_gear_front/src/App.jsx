import React from 'react'
import { Routes, Route } from 'react-router-dom'
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
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/loja" element={<Store />} />
        <Route path="/detalhe" element={<ProductPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/institucional" element={<Institutional />} />
        <Route path="/fale-conosco" element={<FaleConosco />} />
        <Route path="/primeira-compra" element={<PrimeiraCompra />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
