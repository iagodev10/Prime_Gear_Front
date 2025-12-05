import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import SidebarMenu from "../SidebarMenu";
import SidebarLaptop from "../SidebarLaptop";
import SearchModal from "../SearchModal";
import CartModal from "../CartModal";

import { FiMenu, FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import { RiApps2Line } from "react-icons/ri";
import {
  HeaderContainer,
  LeftSection,
  MenuButton,
  NavLinks,
  RightSection,
  Icons,
  Logo,
} from "./style";
import LogoLigth from "../../assets/images/logoligth.png";
import LogoDark from "../../assets/images/logodark.png";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isHome) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);


  const handleCategoryClick = (e, categoryIdentifier) => {
    e.preventDefault();
    
    console.log('🔗 Header: Navegando para loja com categoria:', categoryIdentifier);
    
    navigate('/loja', {
      state: {
        categoryIdentifier: categoryIdentifier
      },
      replace: false
    });
    
 
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <HeaderContainer
        $isScrolled={
          isScrolled ||
          isHovered ||
          isMenuOpen ||
          !!openCategory ||
          isCartModalOpen
        }
        $isHome={isHome}
        $isCartModalOpen={isCartModalOpen}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <LeftSection>
          <MenuButton
            $isScrolled={
              isScrolled || !isHome || isHovered || isMenuOpen || !!openCategory
            }
            $isCartModalOpen={isCartModalOpen}
            onClick={() => setIsMenuOpen(true)}
          >
            <RiApps2Line size={19} />
            <span>Menu</span>
          </MenuButton>

          <NavLinks>
            <Link
              to="/loja"
            >
              Loja{" "}
            </Link>
            <Link
              to="/loja"
              onMouseEnter={() => setOpenCategory("laptops")}
              onClick={(e) => handleCategoryClick(e, "laptop")}
            >
              Laptops{" "}
              <FaChevronDown
                size={14}
                style={{ marginLeft: 6, alignSelf: "center" }}
              />
            </Link>
            <Link
              to="/loja"
              onMouseEnter={() => setOpenCategory("desktops")}
              onClick={(e) => handleCategoryClick(e, "desktop")}
            >
              Desktops{" "}
              <FaChevronDown
                size={14}
                style={{ marginLeft: 6, alignSelf: "center" }}
              />
            </Link>
            <Link
              to="/loja"
              onMouseEnter={() => setOpenCategory("consoles")}
              onClick={(e) => handleCategoryClick(e, "console")}
            >
              Consoles{" "}
              <FaChevronDown
                size={14}
                style={{ marginLeft: 6, alignSelf: "center" }}
              />
            </Link>
            <Link
              to="/loja"
              onMouseEnter={() => setOpenCategory("perifericos")}
              onClick={(e) => handleCategoryClick(e, "periferico")}
            >
              Periféricos{" "}
              <FaChevronDown
                size={14}
                style={{ marginLeft: 6, alignSelf: "center" }}
              />
            </Link>
          </NavLinks>
        </LeftSection>

        <RightSection>
          <Icons>
            <FiSearch size={20} onClick={() => setIsSearchModalOpen(true)} />
            <FiShoppingCart
              size={20}
              onClick={() => setIsCartModalOpen(true)}
            />
            <Link to="/user" style={{ color: "inherit" }}>
              <FiUser size={20} />
            </Link>
          </Icons>

          <Logo
            $isScrolled={
              isScrolled || !isHome || isHovered || isMenuOpen || !!openCategory
            }
            $isCartModalOpen={isCartModalOpen}
          >
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <img src={LogoDark} alt="PrimeGear Logo" />
            </Link>
          </Logo>
        </RightSection>
      </HeaderContainer>

      <SidebarMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onOpenCategory={(cat) => setOpenCategory(cat)}
        openCategory={openCategory}
      />

      <SidebarLaptop
        isOpen={!!openCategory && !isMobile}
        category={openCategory}
        onClose={() => setOpenCategory(null)}
      />

      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
      />

      <CartModal
        isOpen={isCartModalOpen}
        onClose={() => setIsCartModalOpen(false)}
      />
    </>
  );
};

export default Header;