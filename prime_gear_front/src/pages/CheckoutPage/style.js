import styled from "styled-components"

export const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  color: #0f0f12;
  background-color: #fff;
  padding-top: 10vh; /* Account for fixed header */
`

export const Wrapper = styled.div`
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
  padding: 0;
`

export const Steps = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 24px 0;
  width: 100%;
  border-bottom: 1px solid #e0e0e0;
  background: #fff;
`

export const StepItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  font-size: 0.8rem;
  color: ${(props) => (props.$active ? "#111" : "#6b6b71")};
  font-weight: 500;
`

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
`

export const StepDivider = styled.div`
  height: 1px;
  width: 60px;
  background: #e0e0e0;
  margin-bottom: 20px; /* Align with circles */
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: calc(100vh - 100px);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

export const VerticalDivider = styled.div`
  display: none;
`

export const Card = styled.div`
  padding: 40px 10%;
  background-color: ${(props) => (props.$summary ? "#f5f5f5" : "#fff")};
  height: 100%;
  border-left: ${(props) => (props.$summary ? "1px solid #e0e0e0" : "none")};

  @media (max-width: 900px) {
    padding: 24px;
    border-left: none;
    border-top: ${(props) => (props.$summary ? "1px solid #e0e0e0" : "none")};
  }
`

export const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 400;
  margin-bottom: 24px;
  color: #111;
`

export const Section = styled.div`
  margin-bottom: 24px;
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

export const Row3 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 400;
  color: #3b3b40;
`

export const Input = styled.input`
  height: 48px;
  border: 1px solid #c9c9ce;
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
    border-color: #4d7294;
  }
`

export const Select = styled.select`
  height: 48px;
  border: 1px solid #c9c9ce;
  border-radius: 6px;
  padding: 0 14px;
  font-size: 0.95rem;
  background: #fff;
  color: #3b3b40;
  outline: none;
  cursor: pointer;

  &:focus {
    border-color: #4d7294;
  }
`

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
`

export const Actions = styled.div`
  margin-top: 32px;
`

export const PrimaryButton = styled.button`
  width: 100%;
  height: 52px;
  border-radius: 26px;
  border: none;
  outline: none;
  background: ${(props) => (props.disabled ? "#e0e0e0" : "#d1d1d6")}; /* Light gray as per image for disabled/inactive */
  color: ${(props) => (props.disabled ? "#8e8e93" : "#fff")};
  font-weight: 500;
  font-size: 1rem;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: background 0.2s;

  &:hover:not(:disabled) {
    background: #b0b0b5;
  }
`

export const SummaryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`

export const BagItem = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 16px;
  margin-bottom: 24px;
`

export const BagImageWrapper = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
`

export const BagImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 12px;
  object-fit: contain;
  border: 1px solid #e5e5e5;
  background: #fff;
  padding: 8px;
`

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
`

export const BagTitle = styled.p`
  font-size: 0.9rem;
  color: #111;
  line-height: 1.5;
  margin: 0;
`

export const SummaryDivider = styled.div`
  height: 1px;
  background: #e0e0e0;
  margin: 20px 0;
`

export const RowPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px 0;
`

export const PriceText = styled.span`
  font-size: 0.95rem;
  color: #333;
  font-weight: 600;
`

export const PriceValue = styled.span`
  font-size: 0.95rem;
  color: ${(props) => (props.$discount ? "#16a34a" : "#111")};
  font-weight: 600;
`

export const DiscountNote = styled.div`
  font-size: 0.85rem;
  color: #666;
  margin-left: 0;
  margin-top: -8px;
  margin-bottom: 12px;
`

export const ShippingFree = styled.span`
  font-size: 0.95rem;
  color: #16a34a;
  font-weight: 600;
`

export const TotalBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 24px;
`

export const TotalLabel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  
  span {
    font-size: 1.5rem;
    font-weight: 700;
    color: #111;
  }
`

export const Total = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #111;
`

export const Installments = styled.div`
  font-size: 0.9rem;
  color: #666;
  margin-top: 4px;
`

export const SignUpBox = styled.div`
  margin-top: 32px;
  font-size: 0.85rem;
  color: #666;
  line-height: 1.5;
`

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
`

/* Flip Animation Styles */
export const FlipContainer = styled.div`
  perspective: 1000px;
  width: 100%;
  height: 100%;
  min-height: 600px; /* Ensure enough height for both faces */
`

export const Flipper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  transform: ${({ $flipped }) => ($flipped ? "rotateY(180deg)" : "rotateY(0deg)")};
`

export const Front = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 2;
`

export const Back = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  top: 0;
  left: 0;
  transform: rotateY(180deg);
  background: #fff;
  z-index: 1;
`

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
`

export const PaymentContent = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`

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
`

export const PaymentLabel = styled.span`
    font-size: 1rem;
    font-weight: 500;
    color: #111;
`

export const PaymentIcons = styled.div`
    display: flex;
    gap: 8px;
    margin-top: 8px;
`

export const CardIcon = styled.img`
    height: 20px;
    width: auto;
`

