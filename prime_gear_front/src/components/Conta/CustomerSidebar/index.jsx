
import {
  FiUser,
  FiShoppingCart,
  FiHeart,
  FiMapPin,
  FiCreditCard,
  FiBell,
  FiShield,
  FiChevronRight,
} from "react-icons/fi"
import { SidebarContainer, MenuItem, MenuIcon, MenuLabel, ChevronIcon } from "./style"

const menuItems = [
  { id: "meu-perfil", label: "Meu Perfil", icon: FiUser },
  { id: "meus-pedidos", label: "Meus Pedidos", icon: FiShoppingCart },
  { id: "carrinho", label: "Carrinho", icon: FiShoppingCart },
 // { id: "enderecos", label: "Endereços", icon: FiMapPin },
  //{ id: "pagamentos", label: "Pagamentos", icon: FiCreditCard },
  { id: "seguranca", label: "Segurança", icon: FiShield },
]

const CustomerSidebar = ({ activeSection, onSectionChange }) => {
  return (
    <SidebarContainer>
      {menuItems.map((item) => {
        const Icon = item.icon
        const isActive = activeSection === item.id

        return (
          <MenuItem key={item.id} $isActive={isActive} onClick={() => onSectionChange(item.id)}>
            <MenuIcon $isActive={isActive}>
              <Icon size={20} />
            </MenuIcon>
            <MenuLabel>{item.label}</MenuLabel>
            <ChevronIcon $isActive={isActive}>
              <FiChevronRight size={16} />
            </ChevronIcon>
          </MenuItem>
        )
      })}
    </SidebarContainer>
  )
}

export default CustomerSidebar
