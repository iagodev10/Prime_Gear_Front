"use client"

import { useState } from "react"
import { FiShield, FiKey, FiSmartphone } from "react-icons/fi"
import {
  SectionContainer,
  SectionHeader,
  SectionIcon,
  SectionTitle,
  ContentContainer,
  SubSection,
  SubSectionHeader,
  SubSectionTitle,
  FormGroup,
  Label,
  Input,
  SaveButton,
  TwoFactorSection,
  TwoFactorInfo,
  TwoFactorTitle,
  TwoFactorDescription,
  ToggleSwitch,
  ToggleSlider,
} from "./style"

const Seguranca = () => {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false)
  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  })

  const handlePasswordChange = (field, value) => {
    setPasswords((prev) => ({ ...prev, [field]: value }))
  }

  const handleSavePassword = () => {
    console.log("Saving password:", passwords)
  }

  return (
    <SectionContainer>
      <SectionHeader>
        <SectionIcon $bgColor="#fee2e2" $iconColor="#dc2626">
          <FiShield size={20} />
        </SectionIcon>
        <SectionTitle>Segurança da Conta</SectionTitle>
      </SectionHeader>

      <ContentContainer>
        {/* Alterar Senha */}
        <SubSection>
          <SubSectionHeader>
            <FiKey size={20} />
            <SubSectionTitle>Alterar Senha</SubSectionTitle>
          </SubSectionHeader>

          <FormGroup>
            <Label htmlFor="currentPassword">Senha Atual</Label>
            <Input
              id="currentPassword"
              type="password"
              value={passwords.current}
              onChange={(e) => handlePasswordChange("current", e.target.value)}
              placeholder="Digite sua senha atual"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="newPassword">Nova Senha</Label>
            <Input
              id="newPassword"
              type="password"
              value={passwords.new}
              onChange={(e) => handlePasswordChange("new", e.target.value)}
              placeholder="Digite sua nova senha"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="confirmPassword">Confirmar Nova Senha</Label>
            <Input
              id="confirmPassword"
              type="password"
              value={passwords.confirm}
              onChange={(e) => handlePasswordChange("confirm", e.target.value)}
              placeholder="Confirme sua nova senha"
            />
          </FormGroup>

          <SaveButton onClick={handleSavePassword}>Alterar Senha</SaveButton>
        </SubSection>

        {/* Autenticação em Duas Etapas */}
        <TwoFactorSection>
          <TwoFactorInfo>
            <FiSmartphone size={20} />
            <div>
              <TwoFactorTitle>Autenticação em Duas Etapas</TwoFactorTitle>
              <TwoFactorDescription>Adicione uma camada extra de segurança à sua conta</TwoFactorDescription>
            </div>
          </TwoFactorInfo>
          <ToggleSwitch $isActive={twoFactorEnabled} onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}>
            <ToggleSlider $isActive={twoFactorEnabled} />
          </ToggleSwitch>
        </TwoFactorSection>
      </ContentContainer>
    </SectionContainer>
  )
}

export default Seguranca
