import styled from "styled-components";

export const Backdrop = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1001;

    opacity: ${({isOpen}) => (isOpen ? "1" : "0")};
    visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
    transition: opacity 0.3s ease, visibility 0.3s ease;
`;