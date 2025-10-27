import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import Store from './pages/StorePage'
import ProductPage from './pages/ProductPage'
import LoginPage from './pages/LoginPage'
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/loja" element={<Store />} />
        <Route path="/detalhe" element={<ProductPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
