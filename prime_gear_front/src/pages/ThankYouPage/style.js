import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #fff;
  padding-top: 10vh;
  padding-bottom: 60px;
  box-sizing: border-box;
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
  background: #fff;
  border-radius: 20px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.08);

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
  background: linear-gradient(135deg, #111 0%, #000 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.15);

  svg {
    width: 60px;
    height: 60px;
    color: #ffffff;
    stroke-width: 4;
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;

    svg {
      width: 50px;
      height: 50px;
    }
  }
`;

export const SuccessTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #111;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

export const ThankYouMessage = styled.p`
  font-size: 1.25rem;
  color: #666;
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
  color: #333;
  margin-bottom: 20px;

  svg {
    width: 24px;
    height: 24px;
    color: #111;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    flex-wrap: wrap;
  }
`;

export const OrderNumber = styled.span`
  color: #111;
  font-weight: 600;
  font-size: 1.2rem;
`;

export const EmailMessage = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 40px;
  line-height: 1.6;

  strong {
    color: #111;
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
  background: linear-gradient(135deg, #111 0%, #000 100%);
  color: #fff;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
  white-space: nowrap;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 22px rgba(0, 0, 0, 0.18);
    filter: brightness(1.08);
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
  color: #111;
  border: 1px solid #e0e0e0;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    background: #f5f5f5;
    border-color: #ddd;
    color: #111;
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
  background: #fff;
  border-radius: 20px;
  padding: 40px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.08);

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
  color: #111;
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
    color: #111;
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
  background: #fafafa;
  border-radius: 12px;
  margin-bottom: 16px;
  border: 1px solid #eee;
  transition: all 0.2s ease;

  &:hover {
    background: #f5f5f5;
    border-color: #e0e0e0;
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
  background: #fff;
  border: 1px solid #eee;

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
  color: #111;
  margin-bottom: 8px;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const ItemQuantity = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 8px;
`;

export const ItemPrice = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  color: #111;

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
  background: #fafafa;
  border-radius: 12px;
  padding: 20px;
  border: 1px solid #eee;
`;

export const DetailTitle = styled.h4`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  color: #111;
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
  background: #111;
  color: #fff;

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const TotalSection = styled.div`
  background: #fafafa;
  border-radius: 12px;
  padding: 24px;
  border: 1px solid #eee;
`;

export const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${(props) => (props.$highlight ? "0" : "12px")};
  padding-bottom: ${(props) => (props.$highlight ? "0" : "12px")};
  border-bottom: ${(props) =>
    props.$highlight ? "none" : "1px solid rgba(255, 255, 255, 0.1)"};

  &:last-child {
    margin-top: 16px;
    padding-top: 16px;
    border-top: 2px solid rgba(77, 114, 148, 0.3);
  }
`;

export const TotalLabel = styled.span`
  font-size: 1rem;
  color: ${(props) => (props.$highlight ? "#111" : "#666")};
  font-weight: ${(props) => (props.$highlight ? "600" : "400")};
`;

export const TotalValue = styled.span`
  font-size: ${(props) => (props.$highlight ? "1.5rem" : "1rem")};
  color: ${(props) => (props.$highlight ? "#111" : "#333")};
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: ${(props) => (props.$highlight ? "1.3rem" : "1rem")};
  }
`;

export const DeliveryInfo = styled.p`
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
  margin: 0;
`;

export const PaymentInfo = styled.p`
  font-size: 0.95rem;
  color: #666;
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
