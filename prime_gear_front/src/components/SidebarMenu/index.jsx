import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Backdrop, Sidebar, SideHeader, Close, SideBody, NavList, NavItem, NavLink, BestSellers } from './style';

import { FiX, FiChevronRight } from "react-icons/fi";

import BestSeller from '../../assets/images/bestseller.png';

const SidebarMenu = ({ isOpen, onClose }) => {
    React.useEffect(() => {
        const handler = (e) => {
            if (e.key === 'Escape') onClose?.();
        };
        if (isOpen) {
            window.addEventListener('keydown', handler);
        }
        return () => window.removeEventListener('keydown', handler);
    }, [isOpen, onClose]);
    return (
        <>
            <Backdrop isOpen={isOpen} onClick={onClose} />

            <Sidebar isOpen={isOpen}>
                <SideHeader>
                    <Close onClick={onClose}>
                        <FiX size={20}/>
                    </Close>
                </SideHeader>

                <SideBody>
                    <NavList>
                        <NavItem>
                            <NavLink to="/institucional" onClick={onClose}>Sobre</NavLink>
                            <FiChevronRight size={20} />
                        </NavItem>

                        <NavItem>
                            <NavLink to="/institucional" onClick={onClose}>Nossas Lojas</NavLink>
                            <FiChevronRight size={20} />
                        </NavItem>

                        <NavItem>
                            <NavLink to="/fale-conosco" onClick={onClose}>Fale Conosco</NavLink>
                            <FiChevronRight size={20} />
                        </NavItem>

                        <hr />

                        <NavItem>
                            <NavLink to="/" onClick={onClose}>Categorias</NavLink>
                            <FiChevronRight size={20} />
                        </NavItem>

                        <NavItem>
                            <NavLink to="/" onClick={onClose}>FAQs</NavLink>
                        </NavItem>

                    </NavList>

                    <Link to="/loja" onClick={onClose} style={{ display: 'block' }}>
                        <BestSellers>
                            <img src={BestSeller} alt="Bestsellers" />
                            <h3>Produtos em Destaque</h3>
                        </BestSellers>
                    </Link>

                </SideBody>

            </Sidebar>
        </>
    );
}

export default SidebarMenu;