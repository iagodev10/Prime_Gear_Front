import styled from "styled-components";

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
    backdrop-filter: blur(2px);
`;

export const ModalContent = styled.div`
    background: #f5f5f5;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    width: 100%;
    max-width: 500px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
`;

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 24px;
    background: #fff;
    border-bottom: 1px solid #eee;

    h2 { margin: 0; font-size: 1.3rem; font-weight: 600; color: #dc3545; }
    button { 
        background: transparent; border: none; font-size: 1.5rem; color: #888; 
        cursor: pointer; display: flex; 
        &:hover { color: #000; }
    }
`;

export const Content = styled.div`
    padding: 24px;
    p { 
        color: #333; font-size: 1rem; margin: 0; line-height: 1.5;
    }
    .name { font-weight: 700; color: #000; }
`;

export const Actions = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    padding: 0 24px 24px;

    @media (max-width: 500px) {
        flex-direction: column;
        button { width: 100%; }
    }
`;

export const CancelButton = styled.button`
    padding: 12px 20px;
    background: #e0e0e0;
    color: #333;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.2s;
    &:hover { background: #d0d0d0; }
`;

export const ConfirmButton = styled.button`
    padding: 12px 20px;
    background: #dc3545;
    color: #fff;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.2s;
    &:hover { background: #c82333; }
`;