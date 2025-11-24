import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  color: #0f0f12;
  padding-top: 8vh;
`;

export const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 24px 20px 60px 20px;
`;

export const Steps = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-bottom: 26px;
`;

export const StepItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${(p) => (p.active ? "#111" : "#6b6b71")};
`;

export const StepCircle = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.95rem;
  background: ${(p) => (p.active ? "#111" : "#e7e7ea")};
  color: ${(p) => (p.active ? "#fff" : "#3b3b40")};
`;

export const Divider = styled.div`
  height: 2px;
  width: 80px;
  background: #e7e7ea;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 28px;
`;

export const Card = styled.div`
  background: #fff;
  border: 1px solid #e9e9ee;
  border-radius: 12px;
  padding: 22px;
`;

export const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 18px;
`;

export const Section = styled.div`
  margin-bottom: 24px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
`;

export const Row3 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 0.95rem;
  color: #3b3b40;
`;

export const Input = styled.input`
  height: 42px;
  border: 1px solid #dfe0e6;
  border-radius: 8px;
  padding: 0 12px;
  outline: none;
`;

export const Select = styled.select`
  height: 42px;
  border: 1px solid #dfe0e6;
  border-radius: 8px;
  padding: 0 12px;
  background: #fff;
`;

export const CheckRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-top: 12px;
  color: #3b3b40;
`;

export const Actions = styled.div`
  margin-top: 18px;
`;

export const PrimaryButton = styled.button`
  width: 100%;
  height: 46px;
  border-radius: 28px;
  border: none;
  outline: none;
  background: #e9e9ee;
  color: #9b9ba1;
  font-weight: 600;
`;

export const SummaryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const BagItem = styled.div`
  display: grid;
  grid-template-columns: 70px 1fr;
  gap: 12px;
  margin-bottom: 14px;
`;

export const BagImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 8px;
  object-fit: cover;
  border: 1px solid #e9e9ee;
`;

export const BagTitle = styled.p`
  font-size: 0.95rem;
  color: #1b1b1f;
`;

export const RowPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;

export const PriceText = styled.span`
  font-size: 0.95rem;
  color: #3b3b40;
`;

export const PriceValue = styled.span`
  font-size: 0.95rem;
  color: #0c8a1f;
  font-weight: 600;
`;

export const DiscountNote = styled.div`
  font-size: 0.9rem;
  color: #0c8a1f;
`;

export const ShippingFree = styled.div`
  font-size: 0.95rem;
  color: #007bff;
  font-weight: 600;
`;

export const TotalBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 10px;
`;

export const TotalLabel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Total = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: #111;
`;

export const Installments = styled.div`
  font-size: 0.95rem;
  color: #3b3b40;
`;

export const SignUpBox = styled.div`
  margin-top: 18px;
  background: #f7f7fa;
  border: 1px solid #e9e9ee;
  border-radius: 12px;
  padding: 14px;
  font-size: 0.95rem;
  color: #3b3b40;
`;

