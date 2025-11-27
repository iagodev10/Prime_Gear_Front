import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
  const isHome = location.pathname === "/";

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

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
              to="/laptops"
              onMouseEnter={() => setOpenCategory("laptops")}
              onClick={(e) => {
                if (window.innerWidth <= 768) {
                  e.preventDefault();
                  setOpenCategory("laptops");
                }
              }}
            >
              Laptops{" "}
              <FaChevronDown
                size={14}
                style={{ marginLeft: 6, alignSelf: "center" }}
              />
            </Link>
            <Link
              to="/desktops"
              onMouseEnter={() => setOpenCategory("desktops")}
              onClick={(e) => {
                if (window.innerWidth <= 768) {
                  e.preventDefault();
                  setOpenCategory("desktops");
                }
              }}
            >
              Desktops{" "}
              <FaChevronDown
                size={14}
                style={{ marginLeft: 6, alignSelf: "center" }}
              />
            </Link>
            <Link
              to="/consoles"
              onMouseEnter={() => setOpenCategory("consoles")}
              onClick={(e) => {
                if (window.innerWidth <= 768) {
                  e.preventDefault();
                  setOpenCategory("consoles");
                }
              }}
            >
              Consoles{" "}
              <FaChevronDown
                size={14}
                style={{ marginLeft: 6, alignSelf: "center" }}
              />
            </Link>
            <Link
              to="/perifericos"
              onMouseEnter={() => setOpenCategory("perifericos")}
              onClick={(e) => {
                if (window.innerWidth <= 768) {
                  e.preventDefault();
                  setOpenCategory("perifericos");
                }
              }}
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
            <Link to="/login" style={{ color: "inherit" }}>
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
      />

      <SidebarLaptop
        isOpen={!!openCategory}
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
