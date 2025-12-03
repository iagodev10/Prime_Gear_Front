import { FiLogOut } from "react-icons/fi"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../../contexts/AuthContext"

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
  const navigate = useNavigate()
  const { logout } = useAuth()

  console.log("User no Header:", user)

  // ⚠️ PROTEÇÃO: se não tem user, não renderiza
  if (!user) {
    return null
  }

  // ⚠️ PROTEÇÃO: usa optional chaining
  const avatarInitial = user.nome_user?.charAt(0).toUpperCase() || '?'

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/login')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <UserInfo>
          <Avatar>{avatarInitial}</Avatar>

          <UserDetails>
            <UserName>{user.nome_user || 'Nome não disponível'}</UserName>
            <UserEmail>{user.email_user || 'Email não disponível'}</UserEmail>
            <ClientBadge>
              Cliente desde {user.createdAt ? new Date(user.createdAt).getFullYear() : 'N/A'}
            </ClientBadge>
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