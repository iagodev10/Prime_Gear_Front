
import { FiLogOut } from "react-icons/fi"
import {
  HeaderContainer,
  HeaderContent,
  UserInfo,
  Avatar,
  UserDetails,
  UserName,
  UserEmail,
  ClientBadge,
  LogoutButton,
} from "./style"

const CustomerHeader = ({ user }) => {
  // Pega a primeira letra do nome para o avatar
  const avatarInitial = user.nome.charAt(0).toUpperCase()

  const handleLogout = () => {
    // Implementar lógica de logout
    console.log("Logout clicked")
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <UserInfo>
          <Avatar>{avatarInitial}</Avatar>

          <UserDetails>
            <UserName>{user.nome}</UserName>
            <UserEmail>{user.email}</UserEmail>
            <ClientBadge>Cliente desde {user.clienteDesde}</ClientBadge>
          </UserDetails>
        </UserInfo>

        <LogoutButton onClick={handleLogout}>
          <FiLogOut size={16} />
          Sair
        </LogoutButton>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default CustomerHeader
