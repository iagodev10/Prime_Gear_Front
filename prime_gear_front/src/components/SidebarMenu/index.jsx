import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Backdrop } from './style';

import { FiX } from "react-icons/fi";

const SidebarMenu = ({ isOpen, onCLose }) => {
    return (
        <>
            <Backdrop isOpen={isOpen} onClick={onCLose} />

            {/* <Sidebar isOpen={isOpen}>
                <SibeHeader>
                    <Close onClick={onCLose}>
                        <FiX size={24}/>
                    </Close>
                </SibeHeader>

                <SideBody></SideBody>

            </Sidebar> */}
        </>
    );
}

export default SidebarMenu;