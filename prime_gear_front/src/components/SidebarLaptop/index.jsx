import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Container, Panel, List, Item, Right, ProductCard } from "./style";
import { FiChevronRight } from "react-icons/fi";
import LaptopImg from "../../assets/images/laptop.png";
import UltrabookImg from "../../assets/images/Macbook.png";
import DesktopImg from "../../assets/images/desktop.png";
import ConsolesImg from "../../assets/images/consoles.png";
import HeadsetImg from "../../assets/images/headset.jpeg";
import MouseImg from "../../assets/images/foneJBL.png";

const SidebarLaptop = ({ isOpen, category, onClose }) => {
    const menus = {
        laptops: [
            { label: 'Alto desempenho (Gaming)', to: '/loja?cat=laptops-gamer' },
            { label: 'Mobilidade e ultrafinos', to: '/loja?cat=laptops-ultra' },
            { label: 'Acessórios para laptop', to: '/loja?cat=perifericos' }
        ],
        desktops: [
            { label: 'PC Gamer', to: '/loja?cat=desktops-gamer' },
            { label: 'Workstations profissionais', to: '/loja?cat=desktops-workstation' },
            { label: 'Monitores e periféricos', to: '/loja?cat=perifericos' }
        ],
        consoles: [
            { label: 'PlayStation', to: '/loja?cat=playstation' },
            { label: 'Xbox', to: '/loja?cat=xbox' },
            { label: 'Nintendo', to: '/loja?cat=nintendo' }
        ],
        perifericos: [
            { label: 'Teclados mecânicos', to: '/loja?cat=teclados' },
            { label: 'Mouses de precisão', to: '/loja?cat=mouses' },
            { label: 'Headsets e áudio', to: '/loja?cat=headsets' }
        ]
    };

    const cards = {
        laptops: [
            { img: LaptopImg, title: 'Lenovo IdeaPad Gaming' },
            { img: UltrabookImg, title: 'MacBook Pro M2' }
        ],
        desktops: [
            { img: DesktopImg, title: 'Desktop Gamer RGB' },
            { img: DesktopImg, title: 'Workstation para criação' }
        ],
        consoles: [
            { img: ConsolesImg, title: 'Novidades em consoles' },
            { img: ConsolesImg, title: 'Bundles e promoções' }
        ],
        perifericos: [
            { img: HeadsetImg, title: 'Headsets em destaque' },
            { img: MouseImg, title: 'Mouses de alta performance' }
        ]
    };

    return (
        <>
            
            {isOpen && (
                <Container onMouseLeave={onClose}>
                    <Panel>
                        <List>
                            {(menus[category] || []).map((item, idx) => (
                                <Item key={idx}>
                                    <Link to={item.to} onClick={onClose}>{item.label}</Link>
                                    <FiChevronRight size={18} />
                                </Item>
                            ))}
                        </List>
                        <Right>
                            {(cards[category] || []).map((c, i) => (
                                <ProductCard key={i}>
                                    <img src={c.img} alt={c.title} />
                                    <div>{c.title}</div>
                                </ProductCard>
                            ))}
                        </Right>
                    </Panel>
                </Container>
            )}
        </>
    )
}

export default SidebarLaptop;