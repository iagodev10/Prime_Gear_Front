import styled from "styled-components"

export const SectionContainer = styled.div`
  background-color: #ffffff;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.5rem;
  border-bottom: 1px solid #f3f4f6;
`

export const SectionIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ $bgColor }) => $bgColor || "#fee2e2"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ $iconColor }) => $iconColor || "#dc2626"};
`

export const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: black;
  margin: 0;
`

export const ContentContainer = styled.div`
  padding: 1.5rem;
`

export const SubSection = styled.div`
  margin-bottom: 2rem;
`

export const SubSectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  color: black;
`

export const SubSectionTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: black;
  margin: 0;
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
  max-width: 400px;
`

export const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: black;
`

export const Input = styled.input`
  padding: 0.75rem 1rem;
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  color: black;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: #2563eb;
  }

  &::placeholder {
    color: black;
  }
`

export const SaveButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: black;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: black;
  }
`

export const TwoFactorSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1.5rem;
  border-top: 1px solid #f3f4f6;
  gap: 1rem;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const TwoFactorInfo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: black;
`

export const TwoFactorTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: black;
  margin: 0;
`

export const TwoFactorDescription = styled.p`
  font-size: 0.875rem;
  color: black;
  margin: 0.25rem 0 0 0;
`

export const ToggleSwitch = styled.button`
  position: relative;
  width: 48px;
  height: 24px;
  background-color: ${({ $isActive }) => ($isActive ? "black" : "#d1d5db")};
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  flex-shrink: 0;

  @media (max-width: 480px) {
    align-self: flex-end;
  }
`

export const ToggleSlider = styled.span`
  position: absolute;
  top: 2px;
  left: ${({ $isActive }) => ($isActive ? "26px" : "2px")};
  width: 20px;
  height: 20px;
  background-color: ${({ $isActive }) => ($isActive ? "white" : "black")};
  border-radius: 50%;
  transition: left 0.2s ease;
`
