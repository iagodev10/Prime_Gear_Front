
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
import axios from "axios"

const CustomerHeader = ({ user }) => {
  // Pega a primeira letra do nome para o avatar
  const avatarInitial = user.nome.charAt(0).toUpperCase()

  const handleLogout = async () => {
    try {
      const url='http://localhost:8080/logout'

      const response=await axios.get(url,{
        withCredentials: true  
      })
      
      window.location.href = response.data.redirect
    } catch (error) {
        console.log(error);
    }
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
