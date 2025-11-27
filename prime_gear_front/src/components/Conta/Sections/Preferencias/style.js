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
  background-color: ${({ $bgColor }) => $bgColor || "#e0e7ff"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ $iconColor }) => $iconColor || "#4f46e5"};
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

export const PreferenceItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: ${({ $noBorder }) => ($noBorder ? "none" : "1px solid #f3f4f6")};
  gap: 1rem;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const PreferenceInfo = styled.div`
  flex: 1;
`

export const PreferenceLabel = styled.h4`
  font-size: 1rem;
  font-weight: 500;
  color: black;
  margin: 0;
`

export const PreferenceDescription = styled.p`
  font-size: 0.875rem;
  color: black;
  margin: 0.25rem 0 0 0;
`

export const ToggleSwitch = styled.button`
  position: relative;
  width: 48px;
  height: 24px;
  background-color: ${({ $isActive }) => ($isActive ? "black" : "white")};
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
