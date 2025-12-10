import React from 'react';
import styled from 'styled-components';
import { FiX, FiAlertTriangle } from 'react-icons/fi';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  backdrop-filter: blur(4px);
`;

const ModalContainer = styled.div`
  background: white;
  border-radius: 16px;
  width: 90%;
  max-width: 480px;
  padding: 32px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: slideUp 0.3s ease;

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: #fee;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dc2626;
`;

const TitleWrapper = styled.div`
  h2 {
    font-size: 20px;
    font-weight: 600;
    color: #111;
    margin: 0 0 4px 0;
  }

  p {
    font-size: 14px;
    color: #666;
    margin: 0;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  transition: all 0.2s;

  &:hover {
    background: #f5f5f5;
    color: #111;
  }
`;

const ProductInfo = styled.div`
  background: #f9f9f9;
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 16px;
`;

const ProductImage = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  overflow: hidden;
  background: white;
  border: 1px solid #eee;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProductDetails = styled.div`
  flex: 1;

  h3 {
    font-size: 16px;
    font-weight: 600;
    color: #111;
    margin: 0 0 4px 0;
  }

  p {
    font-size: 14px;
    color: #666;
    margin: 0;
  }
`;

const WarningBox = styled.div`
  background: #fef3c7;
  border: 1px solid #fde68a;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 24px;
  display: flex;
  gap: 12px;

  svg {
    color: #d97706;
    flex-shrink: 0;
    margin-top: 2px;
  }

  div {
    p {
      font-size: 14px;
      color: #92400e;
      margin: 0;
      line-height: 1.5;

      strong {
        font-weight: 600;
      }
    }
  }
`;

const Actions = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const CancelButton = styled(Button)`
  background: #f5f5f5;
  color: #666;

  &:hover:not(:disabled) {
    background: #e5e5e5;
    color: #111;
  }
`;

const DeleteButton = styled(Button)`
  background: #dc2626;
  color: white;

  &:hover:not(:disabled) {
    background: #b91c1c;
    box-shadow: 0 4px 12px rgba(220, 38, 38, 0.3);
  }
`;

const ModalExcluirProduto = ({ isOpen, onClose, onConfirm, produto, isDeleting }) => {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <Header>
          <HeaderContent>
            
            <TitleWrapper>
              <h2>Excluir Produto</h2>
              <p>Esta ação não pode ser desfeita</p>
            </TitleWrapper>
          </HeaderContent>
          <CloseButton onClick={onClose}>
            <FiX size={20} />
          </CloseButton>
        </Header>

        {produto && (
          <ProductInfo>
            <ProductImage>
              <img 
                src={produto.url_img_prod || "/placeholder.svg"} 
                alt={produto.nome_prod}
                onError={(e) => {
                  e.target.src = "/placeholder.svg";
                }}
              />
            </ProductImage>
            <ProductDetails>
              <h3>{produto.nome_prod}</h3>
              <p>{produto.categoria} • R$ {produto.preco_prod?.toLocaleString("pt-BR")}</p>
            </ProductDetails>
          </ProductInfo>
        )}

        

        <Actions>
          <CancelButton onClick={onClose} disabled={isDeleting}>
            Cancelar
          </CancelButton>
          <DeleteButton onClick={onConfirm} disabled={isDeleting}>
            {isDeleting ? "Excluindo..." : "Sim, Excluir"}
          </DeleteButton>
        </Actions>
      </ModalContainer>
    </Overlay>
  );
};

export default ModalExcluirProduto;