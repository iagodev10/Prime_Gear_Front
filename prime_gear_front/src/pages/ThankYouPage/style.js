import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0f12 0%, #1a1a24 100%);
  padding-top: 10vh;
  padding-bottom: 60px;
  box-sizing: border-box;
  position: relative;
  overflow-x: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      linear-gradient(rgba(0, 0, 0, 0.3) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 0, 0, 0.3) 1px, transparent 1px);
    background-size: 50px 50px;
    opacity: 0.3;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding-top: 8vh;
    padding-bottom: 40px;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 30px 16px;
  }
`;

export const SuccessSection = styled.div`
  text-align: center;
  margin-bottom: 60px;
  padding: 40px 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    padding: 30px 16px;
    margin-bottom: 40px;
  }
`;

export const SuccessIcon = styled.div`
  width: 120px;
  height: 120px;
  margin: 0 auto 30px;
  border-radius: 50%;
  background: linear-gradient(135deg, #4d7294 0%, #2d4a6b 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 0 0 40px rgba(77, 114, 148, 0.5);

  &::before {
    content: "";
    position: absolute;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(77, 114, 148, 0.3) 0%, rgba(45, 74, 107, 0.3) 100%);
    top: -10px;
    left: -10px;
    z-index: -1;
    animation: pulse 2s ease-in-out infinite;
  }

  svg {
    width: 60px;
    height: 60px;
    color: #ffffff;
    stroke-width: 4;
  }

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
      opacity: 0.5;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.3;
    }
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;

    &::before {
      width: 120px;
      height: 120px;
    }

    svg {
      width: 50px;
      height: 50px;
    }
  }
`;

export const SuccessTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 16px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

export const ThankYouMessage = styled.p`
  font-size: 1.25rem;
  color: #e0e0e0;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const OrderNumberSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-size: 1.1rem;
  color: #e0e0e0;
  margin-bottom: 20px;

  svg {
    width: 24px;
    height: 24px;
    color: #4d7294;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    flex-wrap: wrap;
  }
`;

export const OrderNumber = styled.span`
  color: #4d7294;
  font-weight: 600;
  font-size: 1.2rem;
`;

export const EmailMessage = styled.p`
  font-size: 1rem;
  color: #b0b0b0;
  margin-bottom: 40px;
  line-height: 1.6;

  strong {
    color: #4d7294;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 30px;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const PrimaryButton = styled.button`
  padding: 18px 40px;
  background: linear-gradient(135deg, #4d7294 0%, #2d4a6b 100%);
  color: #ffffff;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(77, 114, 148, 0.3);
  white-space: nowrap;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(77, 114, 148, 0.4);
    background: linear-gradient(135deg, #5a85a8 0%, #3a5a7f 100%);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 16px 32px;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 16px;
  }
`;

export const SecondaryButton = styled.button`
  padding: 18px 40px;
  background: transparent;
  color: #e0e0e0;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.5);
    color: #ffffff;
  }

  @media (max-width: 768px) {
    padding: 16px 32px;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 16px;
  }
`;

export const OrderSummarySection = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 40px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    padding: 30px 20px;
  }

  @media (max-width: 480px) {
    padding: 20px 16px;
  }
`;

export const SummaryTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 30px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 24px;
  }
`;

export const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

export const OrderItems = styled.div`
  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 1.1rem;
    }
  }
`;

export const OrderItem = styled.div`
  display: flex;
  gap: 16px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  margin-bottom: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 480px) {
    padding: 16px;
    gap: 12px;
  }
`;

export const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);

  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
  }
`;

export const ItemInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ItemName = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 8px;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const ItemQuantity = styled.p`
  font-size: 0.9rem;
  color: #b0b0b0;
  margin-bottom: 8px;
`;

export const ItemPrice = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  color: #4d7294;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const SummaryDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const DetailCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

export const DetailTitle = styled.h4`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const DetailIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: rgba(77, 114, 148, 0.2);
  color: #4d7294;

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const TotalSection = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  padding: 24px;
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

export const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => props.$highlight ? "0" : "12px"};
  padding-bottom: ${props => props.$highlight ? "0" : "12px"};
  border-bottom: ${props => props.$highlight ? "none" : "1px solid rgba(255, 255, 255, 0.1)"};

  &:last-child {
    margin-top: 16px;
    padding-top: 16px;
    border-top: 2px solid rgba(77, 114, 148, 0.3);
  }
`;

export const TotalLabel = styled.span`
  font-size: 1rem;
  color: ${props => props.$highlight ? "#ffffff" : "#b0b0b0"};
  font-weight: ${props => props.$highlight ? "600" : "400"};
`;

export const TotalValue = styled.span`
  font-size: ${props => props.$highlight ? "1.5rem" : "1rem"};
  color: ${props => props.$highlight ? "#4d7294" : "#ffffff"};
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: ${props => props.$highlight ? "1.3rem" : "1rem"};
  }
`;

export const DeliveryInfo = styled.p`
  font-size: 0.95rem;
  color: #b0b0b0;
  line-height: 1.6;
  margin: 0;
`;

export const PaymentInfo = styled.p`
  font-size: 0.95rem;
  color: #b0b0b0;
  line-height: 1.6;
  margin: 0;
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 40px 20px;
  color: #b0b0b0;
  font-size: 1rem;

  p {
    margin-bottom: 20px;
  }
`;

