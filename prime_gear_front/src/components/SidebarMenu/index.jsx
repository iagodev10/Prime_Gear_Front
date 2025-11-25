import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Backdrop, Sidebar, SideHeader, Close, SideBody, NavList, NavItem, NavLink, BestSellers, Badge } from './style';

import { FiX, FiChevronRight, FiUser } from "react-icons/fi";

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
            <Backdrop isOpen={isOpen} onClick={onClose} />

            <Sidebar isOpen={isOpen}>
                <SideHeader>
                    <Close onClick={onClose}>
                        <FiX size={20} />
                    </Close>
                </SideHeader>

                <SideBody>
                    <NavList>
                        <NavItem>
                            <NavLink>About</NavLink>
                            <FiChevronRight size={20} />
                        </NavItem>
                        <NavItem>
                            <NavLink>Blog</NavLink>
                            <FiChevronRight size={20} />
                        </NavItem>
                        <NavItem>
                            <NavLink>Get In Touch</NavLink>
                            <FiChevronRight size={20} />
                        </NavItem>

                        <hr />

                        <NavItem>
                            <NavLink>Category</NavLink>
                            <FiChevronRight size={20} />
                        </NavItem>
                        <NavItem>
                            <NavLink>On Sale</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>New In</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>FAQs</NavLink>
                        </NavItem>

                        <hr />

                        <NavItem>
                            <NavLink>TV</NavLink>
                            <FiChevronRight size={20} />
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                Mobile
                                <Badge>Top</Badge>
                            </NavLink>
                            <FiChevronRight size={20} />
                        </NavItem>
                        <NavItem>
                            <NavLink>Laptops</NavLink>
                            <FiChevronRight size={20} />
                        </NavItem>

                        <hr />

                        <NavItem>
                            <NavLink>
                                <FiUser size={20} style={{ marginRight: 8 }} />
                                Login
                            </NavLink>
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