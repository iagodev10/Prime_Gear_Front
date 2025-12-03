import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from '../../contexts/AuthContext'
import CustomerHeader from "../../components/Conta/CustomerHeader"
import CustomerSidebar from "../../components/Conta/CustomerSidebar"
import MeuPerfil from "../../components/Conta/Sections/MeuPerfil"
import MeusPedidos from "../../components/Conta/Sections/MeusPedidos"
import MeuCarrinho from "../../components/Conta/Sections/MeuCarrinho"
import Enderecos from "../../components/Conta/Sections/Enderecos"
import Pagamentos from "../../components/Conta/Sections/Pagamentos"
import Preferencias from "../../components/Conta/Sections/Preferencias"
import Seguranca from "../../components/Conta/Sections/Seguranca"
import { ContaContainer, ContaContent, MainContent } from "./style"

const UserAccount = () => {
  const navigate = useNavigate()
  const { user, loading } = useAuth()  
  const [activeSection, setActiveSection] = useState("meu-perfil")


  useEffect(() => {
    if (!loading && !user) {
      navigate('/login')
    }
  }, [user, loading, navigate])


  if (loading) {
    return (
      <ContaContainer>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          height: '100vh' 
        }}>
          Carregando...
        </div>
      </ContaContainer>
    )
  }


  if (!user) {
    return null
  }

  const renderContent = () => {
    switch (activeSection) {
      case "meu-perfil":
        return <MeuPerfil user={user} />
      case "meus-pedidos":
        return <MeusPedidos />
      case "carrinho":
        return <MeuCarrinho />
      case "enderecos":
        return <Enderecos />
      case "pagamentos":
        return <Pagamentos />
      case "seguranca":
        return <Seguranca />
      default:
        return <MeuPerfil user={user} />
    }
  }

  return (
    <ContaContainer>
      <CustomerHeader user={user} />

      <ContaContent>
        <CustomerSidebar activeSection={activeSection} onSectionChange={setActiveSection} />

        <MainContent>{renderContent()}</MainContent>
      </ContaContent>
    </ContaContainer>
  )
}

export default UserAccount