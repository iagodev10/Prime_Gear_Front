import styled from "styled-components";

export const PageContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #111;
  padding-top: 10vh;
  position: relative;
  overflow: hidden;
  isolation: isolate;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
        80% 80% at 50% 10%,
        rgba(255, 255, 255, 0.06) 0%,
        rgba(255, 255, 255, 0) 60%
      ),
      radial-gradient(
        60% 60% at 20% 70%,
        rgba(255, 255, 255, 0.05) 0%,
        rgba(255, 255, 255, 0) 60%
      ),
      radial-gradient(
        70% 70% at 80% 50%,
        rgba(255, 255, 255, 0.04) 0%,
        rgba(255, 255, 255, 0) 65%
      );
    pointer-events: none;
  }
`;

export const Card = styled.div`
  width: 90%;
  max-width: 560px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.15);
  padding: 32px 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
`;

export const Logo = styled.img`
  width: 72px;
  height: 72px;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 2rem;
  font-weight: 600;
  color: #111;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const LabelRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: #111;
  font-weight: 600;
`;

export const Required = styled.span`
  color: #e11d48;
  margin-left: 6px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px 18px;
  border-radius: 999px;
  border: 1px solid ${(props) => (props.$error ? '#e11d48' : '#b3b3b3')};
  outline: none;
  font-size: 1rem;
  color: #111;
  background: #fff;
  &:focus {
    border-color: ${(props) => (props.$error ? '#e11d48' : '#000')};
  }
`;

export const Submit = styled.button`
  width: 100%;
  padding: 14px 20px;
  border-radius: 999px;
  border: none;
  background: #000;
  color: #fff;
  font-size: 1.05rem;
  font-weight: 600;
`;

export const HelpLink = styled.button`
  background: transparent;
  border: none;
  color: #111;
  font-weight: 600;
  cursor: pointer;
  align-self: flex-start;
`;

export const ErrorMessage = styled.span`
  color: #e11d48;
  font-size: 0.9rem;
  margin-top: 4px;
`;
