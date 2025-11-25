import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Backdrop, Sidebar, SideHeader, Close, SideBody, NavList, NavItem, BestSellers } from './style';

import { FiX, FiChevronRight } from "react-icons/fi";

import BestSeller from '../../assets/images/bestseller.png';

const SidebarMenu = ({ isOpen, onClose }) => {

    const handleClose = () => {
        onClose?.();
    };

    React.useEffect(() => {
        const handler = (e) => {
            if (e.key === 'Escape') handleClose();
        };
        if (isOpen) {
            window.addEventListener('keydown', handler);
        }
        return () => window.removeEventListener('keydown', handler);
    }, [isOpen, onClose]);

    return (
        <>
            <Backdrop $isOpen={isOpen} onClick={handleClose} />

            <Sidebar $isOpen={isOpen}>
                <SideHeader>
                    <Close onClick={handleClose}>
                        <FiX size={24} />
                    </Close>
                </SideHeader>

                <SideBody>
                    <NavList>
                        <NavItem>
                            <Link to="/institucional" onClick={handleClose}>Sobre</Link>
                        </NavItem>

                        <NavItem>
                            <Link to="/loja" onClick={handleClose}>Nossas Lojas</Link>
                            <FiChevronRight size={20} />
                        </NavItem>

                        <NavItem>
                            <Link to="/fale-conosco" onClick={handleClose}>Fale Conosco</Link>
                            <FiChevronRight size={20} />
                        </NavItem>

                        <hr />

                        <NavItem>
                            <Link to="/loja" onClick={handleClose}>Categorias</Link>
                            <FiChevronRight size={20} />
                        </NavItem>

                        <NavItem>
                            <Link to="/" onClick={handleClose}>FAQs</Link>
                        </NavItem>

                    </NavList>

                    <Link to="/loja" onClick={handleClose} style={{ display: 'block', textDecoration: 'none' }}>
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