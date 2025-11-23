import styled from "styled-components";

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
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
    max-width: 700px;
    max-height: 90vh;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    
    &::-webkit-scrollbar { width: 8px; }
    &::-webkit-scrollbar-thumb { background: #888; border-radius: 4px; }
`;

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 24px;
    border-bottom: 1px solid #e0e0e0;
    background: #fff;
    position: sticky;
    top: 0;
    z-index: 10;

    h2 {
        margin: 0;
        font-size: 1.4rem;
        font-weight: 600;
    }

    button {
        background: transparent;
        border: none;
        font-size: 1.5rem;
        color: #666;
        cursor: pointer;
        padding: 4px;
        display: flex;
        &:hover { color: #000; }
    }
`;

export const Form = styled.form`
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    > div {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    label {
        font-weight: 600;
        color: #333;
    }

    input {
        width: 100%;
        padding: 12px;
        border: 1px solid #ddd;
        border-radius: 8px;
        font-size: 1rem;
        background: #fff;
        transition: 0.3s;
        
        &:focus {
            outline: none;
            border-color: #000;
            box-shadow: 0 0 0 2px rgba(0,0,0,0.1);
        }
    }

    @media (max-width: 480px) {
        padding: 16px;
    }
`;

export const ErrorText = styled.span`
    color: #d32f2f;
    font-size: 0.85rem;
`;

export const SubmitButton = styled.button`
    width: 100%;
    padding: 14px;
    background: #000;
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    margin-top: 12px;
    transition: transform 0.2s;
    
    &:hover {
        transform: translateY(-2px);
        background: #1a1a1a;
    }
`;