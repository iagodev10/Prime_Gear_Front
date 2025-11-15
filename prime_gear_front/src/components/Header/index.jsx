import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FaChevronDown, FaChevronUp  } from "react-icons/fa";

import SidebarMenu from "../SidebarMenu";

import { FiMenu, FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import { RiApps2Line } from "react-icons/ri";
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
          <MenuButton $isScrolled={isScrolled || !isHome} onClick={() => setIsMenuOpen(true)}>
            <RiApps2Line size={19} />
            <span>Menu</span>
          </MenuButton>

          <NavLinks>
            <Link to="/laptops">Laptops <FaChevronDown size={14} style={{marginLeft: 6, alignSelf: 'center'}}/></Link>
            <Link to="/desktops">Desktops <FaChevronDown size={14} style={{marginLeft: 6, alignSelf: 'center'}}/></Link>
            <Link to="/consoles">Consoles <FaChevronDown size={14} style={{marginLeft: 6, alignSelf: 'center'}}/></Link>
            <Link to="/perifericos">Periféricos <FaChevronDown size={14} style={{marginLeft: 6, alignSelf: 'center'}}/></Link>
          </NavLinks>

        </LeftSection>

        <RightSection>
          <Icons>
            <FiSearch size={20} />
            <FiShoppingCart size={20} />
            <FiUser size={20} />
          </Icons>

          <Logo isScrolled={isScrolled || !isHome}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <img src={LogoDark} alt="PrimeGear Logo" />
            </Link>
          </Logo>
        </RightSection>

      </HeaderContainer>

      <SidebarMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header;