
import { useState } from "react"
import CustomerHeader from "../../components/Conta/CustomerHeader"
import CustomerSidebar from "../../components/Conta/CustomerSidebar"
import MeuPerfil from "../../components/Conta/Sections/MeuPerfil"
import MeusPedidos from "../../components/Conta/Sections/MeusPedidos"
import MeuCarrinho from "../../components/Conta/Sections/MeuCarrinho"
import Favoritos from "../../components/Conta/Sections/Favoritos"
import Enderecos from "../../components/Conta/Sections/Enderecos"
import Pagamentos from "../../components/Conta/Sections/Pagamentos"
import Preferencias from "../../components/Conta/Sections/Preferencias"
import Seguranca from "../../components/Conta/Sections/Seguranca"
import { ContaContainer, ContaContent, MainContent } from "./style"

// Dados mockados do usuário
const mockUser = {
  nome: "IAGO BORGES BARBOSA",
  email: "iago.barbosa@estudante.iftm.edu.br",
  clienteDesde: 2025,
  telefone: "",
  cpf: "",
  dataNascimento: "",
  genero: "",
  endereco: "",
}

const Conta = () => {
  const [activeSection, setActiveSection] = useState("meu-perfil")

  const renderContent = () => {
    switch (activeSection) {
      case "meu-perfil":
        return <MeuPerfil user={mockUser} />
      case "meus-pedidos":
        return <MeusPedidos />
      case "carrinho":
        return <MeuCarrinho />
      case "favoritos":
        return <Favoritos />
      case "enderecos":
        return <Enderecos />
      case "pagamentos":
        return <Pagamentos />
      case "preferencias":
        return <Preferencias />
      case "seguranca":
        return <Seguranca />
      default:
        return <MeuPerfil user={mockUser} />
    }
  }

  return (
    <ContaContainer>
      <CustomerHeader user={mockUser} />

      <ContaContent>
        <CustomerSidebar activeSection={activeSection} onSectionChange={setActiveSection} />

        <MainContent>{renderContent()}</MainContent>
      </ContaContent>
    </ContaContainer>
  )
}

export default Conta
