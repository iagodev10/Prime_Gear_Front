"use client"

import { useState } from "react"
import { FiShield, FiKey, FiSmartphone, FiAlertCircle, FiCheckCircle } from "react-icons/fi"
import axios from "axios"
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
  const [loading, setLoading] = useState(false)
  const [mensagem, setMensagem] = useState({ tipo: "", texto: "" })

  const handlePasswordChange = (field, value) => {
    setPasswords((prev) => ({ ...prev, [field]: value }))
 
    if (mensagem.texto) {
      setMensagem({ tipo: "", texto: "" })
    }
  }

  const validarSenhas = () => {
    if (!passwords.current || !passwords.new || !passwords.confirm) {
      setMensagem({ tipo: "erro", texto: "Por favor, preencha todos os campos" })
      return false
    }

    if (passwords.new.length < 6) {
      setMensagem({ tipo: "erro", texto: "A nova senha deve ter no mínimo 6 caracteres" })
      return false
    }

    if (passwords.new !== passwords.confirm) {
      setMensagem({ tipo: "erro", texto: "As senhas não coincidem" })
      return false
    }

    if (passwords.current === passwords.new) {
      setMensagem({ tipo: "erro", texto: "A nova senha deve ser diferente da atual" })
      return false
    }

    return true
  }

  const handleSavePassword = async () => {
    if (!validarSenhas()) return

    setLoading(true)
    setMensagem({ tipo: "", texto: "" })

    try {
      const response = await axios.put(
        'http://localhost:8080/change-password',
        {
          senhaAtual: passwords.current,
          novaSenha: passwords.new
        },
        { withCredentials: true }
      )

      if (response.data.success) {
        setMensagem({ tipo: "sucesso", texto: "Senha alterada com sucesso!" })
      
        setPasswords({
          current: "",
          new: "",
          confirm: "",
        })
      }
    } catch (error) {
      console.error('Erro ao alterar senha:', error)
      
      const mensagemErro = error.response?.data?.message || 
                          'Não foi possível alterar a senha. Tente novamente.'
      
      setMensagem({ tipo: "erro", texto: mensagemErro })
    } finally {
      setLoading(false)
    }
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

          {/* Mensagem de Feedback */}
          {mensagem.texto && (
            <div
              style={{
                padding: "0.875rem 1rem",
                borderRadius: "0.5rem",
                marginBottom: "1rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.875rem",
                backgroundColor: mensagem.tipo === "sucesso" ? "#d1fae5" : "#fee2e2",
                color: mensagem.tipo === "sucesso" ? "#065f46" : "#991b1b",
                border: `1px solid ${mensagem.tipo === "sucesso" ? "#6ee7b7" : "#fecaca"}`,
              }}
            >
              {mensagem.tipo === "sucesso" ? (
                <FiCheckCircle size={18} />
              ) : (
                <FiAlertCircle size={18} />
              )}
              <span>{mensagem.texto}</span>
            </div>
          )}

          <FormGroup>
            <Label htmlFor="currentPassword">Senha Atual</Label>
            <Input
              id="currentPassword"
              type="password"
              value={passwords.current}
              onChange={(e) => handlePasswordChange("current", e.target.value)}
              placeholder="Digite sua senha atual"
              disabled={loading}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="newPassword">Nova Senha</Label>
            <Input
              id="newPassword"
              type="password"
              value={passwords.new}
              onChange={(e) => handlePasswordChange("new", e.target.value)}
              placeholder="Digite sua nova senha (mínimo 6 caracteres)"
              disabled={loading}
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
              disabled={loading}
            />
          </FormGroup>

          <SaveButton 
            onClick={handleSavePassword}
            disabled={loading}
            style={{
              opacity: loading ? 0.6 : 1,
              cursor: loading ? "not-allowed" : "pointer"
            }}
          >
            {loading ? "Alterando..." : "Alterar Senha"}
          </SaveButton>
        </SubSection>

        {/* Autenticação em Duas Etapas - Comentado para implementação futura */}
        {/*
        <TwoFactorSection>
          <TwoFactorInfo>
            <FiSmartphone size={20} />
            <div>
              <TwoFactorTitle>Autenticação em Duas Etapas</TwoFactorTitle>
              <TwoFactorDescription>
                Adicione uma camada extra de segurança à sua conta
              </TwoFactorDescription>
            </div>
          </TwoFactorInfo>
          <ToggleSwitch 
            $isActive={twoFactorEnabled} 
            onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
          >
            <ToggleSlider $isActive={twoFactorEnabled} />
          </ToggleSwitch>
        </TwoFactorSection>
        */}
      </ContentContainer>
    </SectionContainer>
  )
}

export default Seguranca