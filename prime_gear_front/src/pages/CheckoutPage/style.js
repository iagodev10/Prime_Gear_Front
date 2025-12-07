import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  color: #0f0f12;
  background-color: #fff;
  padding-top: 10vh;
  box-sizing: border-box;
  overflow-x: hidden;

  @media (max-width: 600px) {
    padding-top: 8vh;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
`;

export const Steps = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 24px 16px;
  width: 100%;
  border-bottom: 1px solid #e0e0e0;
  background: #fff;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 20px 16px;
    gap: 12px;
  }
`;

export const StepItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  font-size: 0.8rem;
  color: ${(props) => (props.$active ? "#111" : "#6b6b71")};
  font-weight: 500;
`;

export const StepCircle = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  font-weight: 600;
  background: ${(props) => (props.$active ? "#4d7294" : "#767676")};
  color: #fff;
`;

export const StepDivider = styled.div`
  height: 1px;
  width: 60px;
  background: #e0e0e0;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    width: 40px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: calc(100vh - 100px);
  gap: 0;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 0;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const VerticalDivider = styled.div`
  display: none;
`;

export const Card = styled.div`
  padding: ${(props) => (props.$summary ? "40px 5%" : "40px 10%")};
  background-color: ${(props) => (props.$summary ? "transparent" : "#fff")};
  height: ${(props) => (props.$summary ? "auto" : "auto")};
  min-height: ${(props) => (props.$summary ? "auto" : "100%")};
  border-left: none;
  overflow: visible;
  padding-bottom: 60px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 900px) {
    padding: ${(props) => (props.$summary ? "24px 5%" : "24px")};
    border-left: none;
    border-top: ${(props) => (props.$summary ? "1px solid #e0e0e0" : "none")};
    height: auto;
    padding-bottom: 40px;
    margin-top: ${(props) => (props.$summary ? "0" : "0")};
  }

  @media (max-width: 600px) {
    padding: ${(props) => (props.$summary ? "20px 16px" : "20px 16px")};
    padding-bottom: 32px;
  }
`;

export const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 400;
  margin-bottom: 24px;
  color: #111;
`;

export const Section = styled.div`
  margin-bottom: 24px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

export const Row3 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 400;
  color: #3b3b40;
`;

export const Input = styled.input`
  height: 48px;
  border: 1px solid ${(props) => (props.$error ? '#dc2626' : '#c9c9ce')};
  border-radius: 6px;
  padding: 0 14px;
  font-size: 0.95rem;
  outline: none;
  background: #fff;
  color: #3b3b40;

  &::placeholder {
    color: #8e8e93;
  }

  &:focus {
    border-color: ${(props) => (props.$error ? '#dc2626' : '#4d7294')};
  }
`;

export const Select = styled.select`
  height: 48px;
  border: 1px solid ${(props) => (props.$error ? '#dc2626' : '#c9c9ce')};
  border-radius: 6px;
  padding: 0 14px;
  font-size: 0.95rem;
  background: #fff;
  color: #3b3b40;
  outline: none;
  cursor: pointer;

  &:focus {
    border-color: ${(props) => (props.$error ? '#dc2626' : '#4d7294')};
  }
`;

export const CheckRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 12px;
  color: #3b3b40;
  font-size: 0.9rem;

  input[type="checkbox"] {
    width: 18px;
    height: 18px;
    cursor: pointer;
    border-radius: 4px;
    border: 1px solid #c9c9ce;
  }

  label {
    line-height: 1.4;
    color: #666;
  }
`;

export const ErrorMessage = styled.span`
  display: block;
  color: #dc2626;
  font-size: 0.85rem;
  margin-top: 4px;
  line-height: 1.3;
`;

export const Actions = styled.div`
  margin-top: 32px;
  margin-bottom: 20px;
`;

export const PrimaryButton = styled.button`
  width: 100%;
  height: 52px;
  border-radius: 26px;
  border: none;
  outline: none;
  background: ${(props) =>
    props.disabled
      ? "#e0e0e0"
      : "#d1d1d6"};
  color: ${(props) => (props.disabled ? "#8e8e93" : "#fff")};
  font-weight: 500;
  font-size: 1rem;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: background 0.2s;

  &:hover:not(:disabled) {
    background: #b0b0b5;
  }
`;

export const SummaryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const BagItem = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr auto;
  gap: 16px;
  margin-bottom: 24px;
  align-items: center;
`;

export const BagImageWrapper = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
`;

export const BagImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 12px;
  object-fit: contain;
  border: none;
  background: transparent;
  padding: 0;
`;

export const BagBadge = styled.div`
  position: absolute;
  top: -8px;
  right: -8px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #333;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BagTitle = styled.p`
  font-size: 0.9rem;
  color: #111;
  line-height: 1.5;
  margin: 0;
`;

export const SummaryDivider = styled.div`
  height: 1px;
  background: #e0e0e0;
  margin: 20px 0;
`;

export const RowPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px 0;
`;

export const PriceText = styled.span`
  font-size: 0.95rem;
  color: #333;
  font-weight: 600;
`;

export const PriceValue = styled.span`
  font-size: 0.95rem;
  color: ${(props) => (props.$discount ? "#16a34a" : "#111")};
  font-weight: 600;
`;

export const DiscountNote = styled.div`
  font-size: 0.85rem;
  color: #666;
  margin-left: 0;
  margin-top: -8px;
  margin-bottom: 12px;
`;

export const ShippingFree = styled.span`
  font-size: 0.95rem;
  color: #16a34a;
  font-weight: 600;
`;

export const TotalBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 24px;
`;

export const TotalLabel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  span {
    font-size: 1.5rem;
    font-weight: 700;
    color: #111;
  }
`;

export const Total = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #111;
`;

export const Installments = styled.div`
  font-size: 0.9rem;
  color: #666;
  margin-top: 4px;
`;

export const SignUpBox = styled.div`
  margin-top: 32px;
  font-size: 0.85rem;
  color: #666;
  line-height: 1.5;
`;

export const SearchButton = styled.button`
  background: none;
  border: none;
  color: #4d7294;
  font-weight: 500;
  cursor: pointer;
  font-size: 0.9rem;
  padding: 0;
  margin-bottom: 12px;

  &:hover {
    text-decoration: underline;
  }
`;

/* Flip Animation Styles */
export const FlipContainer = styled.div`
  perspective: 1000px;
  width: 100%;
  height: auto;
  min-height: 100%;
  box-sizing: border-box;
  overflow: hidden;
`;

export const Flipper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  min-height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  transform: ${({ $flipped }) =>
    $flipped ? "rotateY(180deg)" : "rotateY(0deg)"};
`;

export const Front = styled.div`
  width: 100%;
  height: auto;
  backface-visibility: hidden;
  background: #fff;
  z-index: 2;
  transform: rotateY(0deg);
  position: ${({ $flipped }) => ($flipped ? "absolute" : "relative")};
`;

export const Back = styled.div`
  width: 100%;
  height: auto;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  background: #fff;
  z-index: 1;
  position: ${({ $flipped }) => ($flipped ? "relative" : "absolute")};
  top: 0;
  left: 0;
`;

/* Payment Form Styles */
export const PaymentOption = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  margin-bottom: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  background: #fff;

  &:hover {
    border-color: #4d7294;
    background: #f9f9f9;
  }

  input[type="radio"] {
    width: 20px;
    height: 20px;
    accent-color: #4d7294;
    cursor: pointer;
  }
`;

export const PaymentContent = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const PaymentIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 28px;
  background: #f5f5f5;
  border-radius: 4px;
  color: #333;
  font-size: 1.2rem;
`;

export const PaymentLabel = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: #111;
`;

export const PaymentIcons = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`;

export const CardIcon = styled.img`
  height: 20px;
  width: auto;
`;

/* Credit Card Form Styles */
export const CreditCardSection = styled.div`
  max-height: ${({ $expanded }) => ($expanded ? '800px' : '0')};
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), 
              opacity 0.3s ease,
              margin 0.3s ease;
  opacity: ${({ $expanded }) => ($expanded ? '1' : '0')};
  margin-top: ${({ $expanded }) => ($expanded ? '16px' : '0')};
  margin-bottom: ${({ $expanded }) => ($expanded ? '16px' : '0')};
`;

export const CreditCardForm = styled.div`
  padding: 24px;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  animation: ${({ $expanded }) => ($expanded ? 'slideIn 0.4s ease-out' : 'none')};

  @keyframes slideIn {
    from {
      transform: translateY(-10px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media (max-width: 600px) {
    padding: 16px;
  }
`;

export const CardRow = styled.div`
  display: grid;
  grid-template-columns: ${({ $columns }) => `repeat(${$columns || 2}, 1fr)`};
  gap: 16px;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    grid-template-columns: ${({ $columns }) => {
      if ($columns === 3) return 'repeat(2, 1fr)';
      if ($columns === 2) return 'repeat(2, 1fr)';
      return '1fr';
    }};
    gap: 12px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 12px;
    margin-bottom: 12px;
  }
`;

export const CardField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: relative;
`;

export const CardLabel = styled.label`
  font-size: 0.85rem;
  font-weight: 500;
  color: #333;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  gap: 4px;

  span {
    color: #dc2626;
  }
`;

export const CardInput = styled.input`
  height: 48px;
  border: 1px solid ${(props) => (props.$error ? '#dc2626' : '#c9c9ce')};
  border-radius: 8px;
  padding: 0 14px;
  font-size: 0.95rem;
  outline: none;
  background: #fff;
  color: #3b3b40;
  transition: all 0.2s ease;
  font-family: inherit;

  &::placeholder {
    color: #8e8e93;
  }

  &:focus {
    border-color: ${(props) => (props.$error ? '#dc2626' : '#4d7294')};
    box-shadow: 0 0 0 3px ${(props) => (props.$error ? 'rgba(220, 38, 38, 0.1)' : 'rgba(77, 114, 148, 0.1)')};
    transform: translateY(-1px);
  }

  &:disabled {
    background: #f5f5f5;
    cursor: not-allowed;
  }
`;

export const CardSelect = styled.select`
  height: 48px;
  border: 1px solid ${(props) => (props.$error ? '#dc2626' : '#c9c9ce')};
  border-radius: 8px;
  padding: 0 14px;
  font-size: 0.95rem;
  background: #fff;
  color: #3b3b40;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;

  &:focus {
    border-color: ${(props) => (props.$error ? '#dc2626' : '#4d7294')};
    box-shadow: 0 0 0 3px ${(props) => (props.$error ? 'rgba(220, 38, 38, 0.1)' : 'rgba(77, 114, 148, 0.1)')};
  }

  option {
    padding: 10px;
  }
`;

export const CardBrandSelector = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 16px;
`;

export const BrandOption = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  border: 2px solid ${({ $selected }) => ($selected ? '#4d7294' : '#e0e0e0')};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${({ $selected }) => ($selected ? '#f0f4f8' : '#fff')};
  min-width: 80px;
  position: relative;
  overflow: hidden;

  &:hover {
    border-color: #4d7294;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(77, 114, 148, 0.05) 0%, transparent 100%);
    opacity: ${({ $selected }) => ($selected ? '1' : '0')};
    transition: opacity 0.2s ease;
  }

  input[type="radio"] {
    display: none;
  }

  span {
    font-size: 0.85rem;
    font-weight: 500;
    color: ${({ $selected }) => ($selected ? '#4d7294' : '#666')};
    position: relative;
    z-index: 1;
  }
`;

export const InstallmentSelect = styled(CardSelect)`
  font-weight: 500;
  
  option {
    font-weight: 400;
  }
`;

export const CardFormTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #111;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: '';
    width: 4px;
    height: 20px;
    background: linear-gradient(135deg, #4d7294 0%, #3a5a7a 100%);
    border-radius: 2px;
  }
`;

export const CardInfoIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #e0e0e0;
  color: #666;
  font-size: 0.7rem;
  font-weight: 600;
  cursor: help;
  transition: all 0.2s ease;

  &:hover {
    background: #4d7294;
    color: #fff;
    transform: scale(1.1);
  }
`;

export const SecurityBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border-radius: 8px;
  margin-top: 16px;
  border: 1px solid #bae6fd;

  svg {
    color: #0284c7;
    font-size: 1.2rem;
  }

  span {
    font-size: 0.85rem;
    color: #0c4a6e;
    font-weight: 500;
  }
`;

/* PIX Payment Styles */
export const PixSection = styled.div`
  max-height: ${({ $expanded }) => ($expanded ? '800px' : '0')};
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), 
              opacity 0.3s ease,
              margin 0.3s ease;
  opacity: ${({ $expanded }) => ($expanded ? '1' : '0')};
  margin-top: ${({ $expanded }) => ($expanded ? '16px' : '0')};
  margin-bottom: ${({ $expanded }) => ($expanded ? '16px' : '0')};
`;

export const PixContainer = styled.div`
  padding: 24px;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  animation: ${({ $expanded }) => ($expanded ? 'slideIn 0.4s ease-out' : 'none')};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  @keyframes slideIn {
    from {
      transform: translateY(-10px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media (max-width: 600px) {
    padding: 16px;
  }
`;

export const PixQRCode = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 20px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  img {
    width: 250px;
    height: 250px;
    border-radius: 8px;
    object-fit: contain;
  }

  @media (max-width: 600px) {
    padding: 16px;
    
    img {
      width: 200px;
      height: 200px;
    }
  }
`;

export const PixTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #111;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: '';
    width: 4px;
    height: 20px;
    background: linear-gradient(135deg, #4d7294 0%, #3a5a7a 100%);
    border-radius: 2px;
  }
`;

export const PixKeyContainer = styled.div`
  width: 100%;
  max-width: 500px;
`;

export const PixKeyLabel = styled.label`
  font-size: 0.85rem;
  font-weight: 500;
  color: #333;
  margin-bottom: 8px;
  display: block;
`;

export const PixKeyField = styled.div`
  display: flex;
  gap: 8px;
  align-items: stretch;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const PixKeyInput = styled.input`
  flex: 1;
  height: 48px;
  border: 1px solid #c9c9ce;
  border-radius: 8px;
  padding: 0 14px;
  font-size: 0.9rem;
  background: #fff;
  color: #3b3b40;
  font-family: 'Courier New', monospace;
  font-weight: 500;

  &:focus {
    outline: none;
    border-color: #4d7294;
    box-shadow: 0 0 0 3px rgba(77, 114, 148, 0.1);
  }
`;

export const CopyButton = styled.button`
  height: 48px;
  padding: 0 24px;
  border: none;
  border-radius: 8px;
  background: #d1d1d6;
  color: #fff;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;

  svg {
    font-size: 1.1rem;
  }

  &:hover {
    background: #b0b0b5;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }

  &.copied {
    background: #4d7294;
  }

  @media (max-width: 600px) {
    width: 100%;
    justify-content: center;
  }
`;

export const PixInstructions = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 16px;
  background: #f5f5f5;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 0.85rem;
  color: #333;
  line-height: 1.6;

  strong {
    display: block;
    margin-bottom: 8px;
    color: #111;
  }

  ol {
    margin: 8px 0 0 0;
    padding-left: 20px;
  }

  li {
    margin-bottom: 4px;
  }
`;

/* Boleto Payment Styles */
export const BoletoSection = styled.div`
  max-height: ${({ $expanded }) => ($expanded ? '1200px' : '0')};
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), 
              opacity 0.3s ease,
              margin 0.3s ease;
  opacity: ${({ $expanded }) => ($expanded ? '1' : '0')};
  margin-top: ${({ $expanded }) => ($expanded ? '16px' : '0')};
  margin-bottom: ${({ $expanded }) => ($expanded ? '16px' : '0')};
`;

export const BoletoContainer = styled.div`
  padding: 24px;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  animation: ${({ $expanded }) => ($expanded ? 'slideIn 0.4s ease-out' : 'none')};

  @keyframes slideIn {
    from {
      transform: translateY(-10px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media (max-width: 600px) {
    padding: 16px;
  }
`;

export const BoletoTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #111;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: '';
    width: 4px;
    height: 20px;
    background: linear-gradient(135deg, #4d7294 0%, #3a5a7a 100%);
    border-radius: 2px;
  }
`;

export const BoletoForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

export const GenerateBoletoButton = styled.button`
  width: 100%;
  height: 52px;
  border-radius: 8px;
  border: none;
  outline: none;
  background: #4d7294;
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    background: #3a5a7a;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(77, 114, 148, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 600px) {
    height: 48px;
    font-size: 0.95rem;
  }
`;

export const ShippingSection = styled.div`
  margin: 24px 0;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 12px;
`;

export const ShippingTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 16px;
  color: #333;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ShippingOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ShippingOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background: white;
  border: 2px solid ${props => props.$selected ? '#000' : '#e5e5e5'};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: ${props => props.$selected ? '#000' : '#999'};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const ShippingInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
`;

export const ShippingIcon = styled.div`
  width: 40px;
  height: 40px;
  background: #f0f0f0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 20px;
`;

export const ShippingDetails = styled.div`
  flex: 1;
`;

export const ShippingName = styled.div`
  font-weight: 600;
  font-size: 0.95rem;
  color: #333;
  margin-bottom: 4px;
`;

export const ShippingTime = styled.div`
  font-size: 0.85rem;
  color: #666;
`;

export const ShippingPrice = styled.div`
  font-weight: 700;
  font-size: 1.1rem;
  color: ${props => props.$free ? '#00a85a' : '#333'};
  margin-right: 12px;
`;

export const ShippingRadio = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;