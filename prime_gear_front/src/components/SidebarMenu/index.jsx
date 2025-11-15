import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Backdrop, Sidebar, SideHeader, Close, SideBody, NavList, NavItem, NavLink } from './style';

import { FiX, FiChevronRight } from "react-icons/fi";

const SidebarMenu = ({ isOpen, onClose }) => {
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
                            <NavLink to="/">Categorias</NavLink>
                            <FiChevronRight size={20} />
                        </NavItem>

                    </NavList>
                </SideBody>

            </Sidebar>
        </>
    );
}

export default SidebarMenu;