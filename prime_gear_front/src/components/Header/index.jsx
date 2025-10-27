import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

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
import LogoLigth from "../../assets/images/logoligth.png";
import LogoDark from "../../assets/images/logodark.png";

const Header = () => {

  const location = useLocation();
  const isHome = location.pathname === "/";


  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isHome) {
      // reset scroll state for non-home pages
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);
  return (
    <>
      <HeaderContainer isScrolled={isScrolled} isHome={isHome}>
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
              <img src={LogoDark} alt="PrimeGear Logo" />
            </Link>
          </Logo>
        </RightSection>

      </HeaderContainer>
    </>
  );
};

export default Header;