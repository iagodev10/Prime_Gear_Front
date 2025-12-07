import styled, { keyframes } from "styled-components";
import { Link as RouterLink } from "react-router-dom";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideDown = keyframes`
  from { 
    transform: translateX(-50%) translateY(-30px);
    opacity: 0;
  }
  to { 
    transform: translateX(-50%) translateY(0);
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from { 
    transform: translateY(100%);
    opacity: 0;
  }
  to { 
    transform: translateY(0);
    opacity: 1;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2000;
  animation: ${fadeIn} 0.2s ease-out;
`;

export const Container = styled.div`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 100%;
  background: #2f2f2f;
  border-radius: 0;
  min-height: 400px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  z-index: 2001;

  /* Desktop */
  @media (min-width: 769px) {
    top: clamp(60px, 8vh, 100px);
    max-height: calc(100vh - clamp(60px, 8vh, 100px) - 16px);
    animation: ${slideDown} 0.3s ease-out;
  }

  /* Mobile */
  @media (max-width: 768px) {
    top: auto;
    bottom: 0;
    left: 0;
    right: 0;
    transform: none;
    max-height: 85vh;
    border-radius: 20px 20px 0 0;
    animation: ${slideUp} 0.3s ease-out;
  }

  @media (max-width: 480px) {
    max-height: 90vh;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 32px;
  background: #2f2f2f;
  margin-left: 5%;
  margin-right: 5%;
  flex-shrink: 0;
  position: relative;

  @media (max-width: 1024px) {
    padding: 20px 24px;
    margin-left: 3%;
    margin-right: 3%;
  }

  @media (max-width: 768px) {
    padding: 20px;
    margin-left: 0;
    margin-right: 0;
    flex-direction: column;
    gap: 16px;
    align-items: stretch;

    /* Linha de arraste no topo */
    &::before {
      content: '';
      position: absolute;
      top: 8px;
      left: 50%;
      transform: translateX(-50%);
      width: 40px;
      height: 4px;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 2px;
    }
  }

  @media (max-width: 480px) {
    padding: 16px;
    gap: 12px;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 400;
  color: #fff;
  margin: 0;

  @media (max-width: 1024px) {
    font-size: 28px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    text-align: center;
    margin-top: 8px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

export const ViewCartButton = styled.button`
  background: #fff;
  color: #000;
  border: none;
  padding: 10px 20px;
  border-radius: 99px;
  font-weight: 400;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  display: inline-block;
  white-space: nowrap;

  &:hover {
    background: #f0f0f0;
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    padding: 12px 24px;
    font-size: 15px;
    width: 100%;
    text-align: center;
  }

  @media (max-width: 480px) {
    padding: 10px 20px;
    font-size: 14px;
  }
`;

export const CloseButton = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #fff;
  transition: all 0.2s ease;
  flex-shrink: 0;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
  }

  @media (max-width: 480px) {
    top: 16px;
    right: 16px;
  }
`;

export const CartContent = styled.div`
  padding: 20px 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow-y: auto;
  flex: 1;
  margin-left: 5%;
  margin-right: 5%;
  padding-bottom: 24px;

  /* Scrollbar customizada */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 3px;

    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
  }

  @media (max-width: 1024px) {
    padding: 16px 24px;
    padding-bottom: 20px;
    margin-left: 3%;
    margin-right: 3%;
  }

  @media (max-width: 768px) {
    padding: 16px 20px;
    gap: 14px;
    padding-bottom: 20px;
    margin-left: 0;
    margin-right: 0;
  }

  @media (max-width: 480px) {
    padding: 12px 16px;
    gap: 12px;
    padding-bottom: 16px;
  }
`;

export const CartItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 768px) {
    gap: 14px;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
`;

export const CartItem = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  @media (max-width: 768px) {
    gap: 12px;
    padding-bottom: 12px;
  }

  @media (max-width: 480px) {
    gap: 10px;
    padding-bottom: 10px;
  }
`;

export const MoreItemsText = styled.p`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  padding-top: 12px;
  padding-bottom: 0;
  font-weight: 400;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 13px;
    padding-top: 10px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding-top: 8px;
  }
`;

export const ItemImage = styled.div`
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  border-radius: 8px;
  overflow: hidden;
  background: #1a1a1a;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
  }

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
    border-radius: 6px;
  }
`;

export const ItemInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;

  @media (max-width: 480px) {
    gap: 6px;
  }
`;

export const ItemName = styled.p`
  font-size: 14px;
  color: #fff;
  margin: 0;
  line-height: 1.4;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  @media (max-width: 768px) {
    font-size: 13px;
    -webkit-line-clamp: 3;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    line-height: 1.3;
  }
`;

export const ProfileSection = styled.div`
  padding-top: 20px;
  margin-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex-shrink: 0;

  @media (max-width: 1024px) {
    padding-top: 16px;
    margin-top: 12px;
    gap: 10px;
  }

  @media (max-width: 768px) {
    padding-top: 16px;
    margin-top: 12px;
    gap: 10px;
  }

  @media (max-width: 480px) {
    padding-top: 12px;
    margin-top: 10px;
    gap: 8px;
  }
`;

export const ProfileTitle = styled.h2`
  font-size: 18px;
  font-weight: 400;
  color: #fff;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 17px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const ProfileLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media (max-width: 768px) {
    gap: 2px;
  }
`;

export const ProfileLink = styled(RouterLink)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 0;
  color: #fff;
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
  border-radius: 8px;

  &:hover {
    color: rgba(255, 255, 255, 0.8);
    transform: translateX(4px);
  }

  &:active {
    transform: translateX(2px);
  }

  @media (max-width: 768px) {
    padding: 10px 8px;
    gap: 12px;
    background: rgba(255, 255, 255, 0.05);
    margin-bottom: 4px;

    &:hover {
      background: rgba(255, 255, 255, 0.08);
    }
  }

  @media (max-width: 480px) {
    padding: 8px 6px;
    gap: 10px;
  }
`;

export const ProfileLinkIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
  }

  @media (max-width: 480px) {
    width: 32px;
    height: 32px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

export const ProfileLinkText = styled.span`
  font-size: 16px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;