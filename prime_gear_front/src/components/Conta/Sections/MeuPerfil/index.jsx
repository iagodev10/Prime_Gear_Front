"use client"

import { useState } from "react"
import { FiUser, FiEdit2 } from "react-icons/fi"
import {
  SectionContainer,
  SectionHeader,
  SectionIcon,
  SectionTitle,
  EditButton,
  FormContainer,
  FormGrid,
  FormGroup,
  Label,
  Input,
  Select,
  HelperText,
  FullWidthGroup,
  SaveButton,
} from "./style"

const MeuPerfil = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    nome: user.nome_user ,
    email: user.email_user,
    telefone: user.telefone_user,
    cpf: user.cpf_user,
    dataNascimento: user.data_nascimento_user,
    genero: user.genero_user,
    endereco: user.endereco_user,
  })
  console.log("FORM");
  console.log(formData);
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSave = () => {
    console.log("Saving:", formData)
    setIsEditing(false)
  }

  return (
    <SectionContainer>
      <SectionHeader>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <SectionIcon $bgColor="#e0e7ff" $iconColor="#4f46e5">
            <FiUser size={20} />
          </SectionIcon>
          <SectionTitle>Informações Pessoais</SectionTitle>
        </div>
        <EditButton onClick={() => setIsEditing(!isEditing)}>
          <FiEdit2 size={16} />
          {isEditing ? "Cancelar" : "Editar"}
        </EditButton>
      </SectionHeader>

      <FormContainer>
        <FormGrid>
          <FormGroup>
            <Label htmlFor="nome">
              Nome Completo <span>*</span>
            </Label>
            <Input
              id="nome"
              value={formData.nome}
              onChange={(e) => handleInputChange("nome", e.target.value)}
              disabled={!isEditing}
              placeholder="Seu nome completo"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={formData.email} disabled />
            <HelperText>O email não pode ser alterado</HelperText>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="telefone">
              Telefone <span>*</span>
            </Label>
            <Input
              id="telefone"
              value={formData.telefone}
              onChange={(e) => handleInputChange("telefone", e.target.value)}
              disabled={!isEditing}
              placeholder="(00) 00000-0000"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="cpf">
              CPF <span>*</span>
            </Label>
            <Input
              id="cpf"
              value={formData.cpf}
              onChange={(e) => handleInputChange("cpf", e.target.value)}
              disabled={!isEditing}
              placeholder="000.000.000-00"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="dataNascimento">
              Data de Nascimento <span>*</span>
            </Label>
            <Input
              id="dataNascimento"
              value={formData.dataNascimento}
              onChange={(e) => handleInputChange("dataNascimento", e.target.value)}
              disabled={!isEditing}
              placeholder="dd/mm/aaaa"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="genero">Gênero</Label>
            <Select
              id="genero"
              value={formData.genero}
              onChange={(e) => handleInputChange("genero", e.target.value)}
              disabled={!isEditing}
            >
              <option value="">Selecione</option>
              <option value="M">Masculino</option>
              <option value="F">Feminino</option>
            </Select>
          </FormGroup>
        </FormGrid>

        <FullWidthGroup>
          <Label htmlFor="endereco">Endereço Completo</Label>
          <Input
            id="endereco"
            value={formData.endereco}
            onChange={(e) => handleInputChange("endereco", e.target.value)}
            disabled={!isEditing}
            placeholder="Rua, número, bairro, cidade, estado, CEP"
          />
        </FullWidthGroup>

        {isEditing && (
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "1.5rem" }}>
            <SaveButton onClick={handleSave}>Salvar Alterações</SaveButton>
          </div>
        )}
      </FormContainer>
    </SectionContainer>
  )
}

export default MeuPerfil
