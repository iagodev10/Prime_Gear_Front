import styled, { keyframes } from "styled-components";
import { Link as RouterLink } from "react-router-dom";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideDown = keyframes`
  from { transform: translateY(-20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  animation: ${fadeIn} 0.3s ease-out;
`;

export const Container = styled.div`
  position: fixed;
  top: 8vh;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  background: #2f2f2f;
  border-radius: 0;
  height: auto;
  max-height: calc(100vh - 25vh);
  overflow: visible;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  animation: ${slideDown} 0.4s ease-out;
  display: flex;
  flex-direction: column;
  z-index: 1000;

  @media (max-width: 768px) {
    top: 70px;
    max-height: calc(100vh - 70px);
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

  @media (max-width: 768px) {
    padding: 20px 24px;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 400;
  color: #fff;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 24px;
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

  &:hover {
    background: #f0f0f0;
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 13px;
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
  cursor: pointer;
  color: #fff;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.3);
  }

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

export const CartContent = styled.div`
  padding: 20px 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow: hidden;
  margin-left: 5%;
  margin-right: 5%;

  @media (max-width: 768px) {
    padding: 16px 24px;
    gap: 16px;
  }
`;

export const CartItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-height: none;
`;

export const CartItem = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  padding-bottom: 16px;

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  @media (max-width: 768px) {
    gap: 12px;
    padding-bottom: 12px;
  }
`;

export const MoreItemsText = styled.p`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  padding-top: 12px;
  padding-bottom: 0;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 13px;
    padding-top: 10px;
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
`;

export const ItemInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ItemName = styled.p`
  font-size: 14px;
  color: #fff;
  margin: 0;
  line-height: 1.4;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export const ProfileSection = styled.div`
  padding-top: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    padding-top: 12px;
    gap: 10px;
  }
`;

export const ProfileTitle = styled.h2`
  font-size: 18px;
  font-weight: 400;
  color: #fff;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ProfileLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
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

  &:hover {
    color: rgba(255, 255, 255, 0.8);
    transform: translateX(4px);
  }

  @media (max-width: 768px) {
    padding: 6px 0;
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

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
  }
`;

export const ProfileLinkText = styled.span`
  font-size: 16px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

