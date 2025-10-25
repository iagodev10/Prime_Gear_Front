import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import {
  HeaderContainer,
  LeftSection,
  MenuButton,
  NavLinks,
  RightSection,
  Icons,
  Logo
} from "./style";
import LogoImage from "../../assets/images/logo (2).png";

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
  function handleScroll() {
      setIsScrolled(window.scrollY > 50);
    }

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <>
      <HeaderContainer isScrolled={isScrolled}>
        <LeftSection>
          <MenuButton onClick={() => setIsMenuOpen(true)}>
            <FiMenu size={22} />
            <span>Menu</span>
          </MenuButton>

          <NavLinks>
            <Link to="/laptops">Laptops</Link>
            <Link to="/desktops">Desktops</Link>
            <Link to="/consoles">Consoles</Link>
            <Link to="/perifericos">Periféricos</Link>
          </NavLinks>

        </LeftSection>

         <RightSection>
          <Icons>
            <FiSearch size={20} />
            <FiShoppingCart size={20} />
            <FiUser size={20} />
          </Icons>

          <Logo isScrolled={isScrolled}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <img src={LogoImage} alt="PrimeGear Logo" />
            </Link>
          </Logo>
        </RightSection>

      </HeaderContainer>
    </>
  );
};

export default Header;