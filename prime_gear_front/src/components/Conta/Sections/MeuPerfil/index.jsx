"use client"

import { useState } from "react"
import { FiUser, FiEdit2, FiSave, FiLoader } from "react-icons/fi" 
import axios from "axios" 
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
  const [saving, setSaving] = useState(false)  

 
  const [formData, setFormData] = useState({
    nome: user.nome_user || "",
    login: user.login_user || "",
    email: user.email_user || "",
    telefone: user.telefone_user || "",
    cpf: user.cpf_user || "",
    dataNascimento: user.data_nascimento_user || "",
    genero: user.genero_user || "",
    cep: user.cep_user || "",
    pais: user.pais_user || "",
    estado: user.estado_user || "",
    cidade: user.cidade_user || "",
    bairro: user.bairro_user || "",
    rua: user.rua_user || "",
    numero: user.numero_user || "",
    complemento: user.complemento_user || "",
  })

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSave = async () => {
    try {
      setSaving(true)


      const dadosAtualizados = {
        nome_user: formData.nome,
        telefone_user: formData.telefone,
        cpf_user: formData.cpf,
        data_nascimento_user: formData.dataNascimento,
        genero_user: formData.genero,
        cep_user: formData.cep,
        pais_user: formData.pais,
        estado_user: formData.estado,
        cidade_user: formData.cidade,
        bairro_user: formData.bairro,
        rua_user: formData.rua,
        numero_user: formData.numero,
        complemento_user: formData.complemento,
        endereco_user: `${formData.rua}, ${formData.numero} - ${formData.bairro}, ${formData.cidade} - ${formData.estado}`
      }

      
      const userId = user.cod_user || user.id; 
      await axios.put(`http://localhost:8080/atualizar-usuario/${userId}`, dadosAtualizados)

      
      window.location.reload()
      setIsEditing(false)
      
   

    } catch (error) {
      console.error("Erro ao atualizar perfil:", error)
      alert("❌ Erro ao atualizar perfil. Verifique os dados e tente novamente.")
    } finally {
      setSaving(false)
    }
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
        <EditButton onClick={() => !saving && setIsEditing(!isEditing)} disabled={saving}>
          <FiEdit2 size={16} />
          {isEditing ? "Cancelar" : "Editar"}
        </EditButton>
      </SectionHeader>

      <FormContainer>
        <FormGrid>
          {/* --- Dados da Conta --- */}
          <FormGroup>
            <Label htmlFor="nome">Nome Completo <span>*</span></Label>
            <Input
              id="nome"
              value={formData.nome}
              onChange={(e) => handleInputChange("nome", e.target.value)}
              disabled={!isEditing}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="login">Login <span>*</span></Label>
            <Input
              id="login"
              value={formData.login}
              onChange={(e) => handleInputChange("login", e.target.value)}
              disabled={true}  
              style={{ backgroundColor: isEditing ? '#f3f4f6' : 'transparent' }}
            />
             {isEditing && <HelperText>O login não pode ser alterado.</HelperText>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={formData.email} disabled />
            <HelperText>O email não pode ser alterado por aqui.</HelperText>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="telefone">Telefone <span>*</span></Label>
            <Input
              id="telefone"
              value={formData.telefone}
              onChange={(e) => handleInputChange("telefone", e.target.value)}
              disabled={!isEditing}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="cpf">CPF <span>*</span></Label>
            <Input
              id="cpf"
              value={formData.cpf}
              onChange={(e) => handleInputChange("cpf", e.target.value)}
              disabled={!isEditing}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="dataNascimento">Data de Nascimento <span>*</span></Label>
            <Input
              id="dataNascimento"
              type="date" 
              value={formData.dataNascimento}
              onChange={(e) => handleInputChange("dataNascimento", e.target.value)}
              disabled={!isEditing}
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
              <option value="O">Outro</option>
            </Select>
          </FormGroup>

          <div style={{ gridColumn: "1 / -1", height: "10px" }}></div>

          {/* --- Dados de Endereço --- */}
          <FormGroup>
            <Label htmlFor="cep">CEP</Label>
            <Input
              id="cep"
              value={formData.cep}
              onChange={(e) => handleInputChange("cep", e.target.value)}
              disabled={!isEditing}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="pais">País</Label>
            <Input
              id="pais"
              value={formData.pais}
              onChange={(e) => handleInputChange("pais", e.target.value)}
              disabled={!isEditing}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="estado">Estado (UF)</Label>
            <Input
              id="estado"
              value={formData.estado}
              onChange={(e) => handleInputChange("estado", e.target.value)}
              disabled={!isEditing}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="cidade">Cidade</Label>
            <Input
              id="cidade"
              value={formData.cidade}
              onChange={(e) => handleInputChange("cidade", e.target.value)}
              disabled={!isEditing}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="bairro">Bairro</Label>
            <Input
              id="bairro"
              value={formData.bairro}
              onChange={(e) => handleInputChange("bairro", e.target.value)}
              disabled={!isEditing}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="rua">Rua / Logradouro</Label>
            <Input
              id="rua"
              value={formData.rua}
              onChange={(e) => handleInputChange("rua", e.target.value)}
              disabled={!isEditing}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="numero">Número</Label>
            <Input
              id="numero"
              value={formData.numero}
              onChange={(e) => handleInputChange("numero", e.target.value)}
              disabled={!isEditing}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="complemento">Complemento</Label>
            <Input
              id="complemento"
              value={formData.complemento}
              onChange={(e) => handleInputChange("complemento", e.target.value)}
              disabled={!isEditing}
            />
          </FormGroup>
        </FormGrid>

        {isEditing && (
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "1.5rem" }}>
            <SaveButton onClick={handleSave} disabled={saving}>
              {saving ? (
                <>
                  <FiLoader className="animate-spin" /> Salvando...
                </>
              ) : (
                <>
                  <FiSave /> Salvar Alterações
                </>
              )}
            </SaveButton>
          </div>
        )}
      </FormContainer>
    </SectionContainer>
  )
}

export default MeuPerfil