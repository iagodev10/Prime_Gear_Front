import React, { useEffect, useState } from "react";
import axios from "axios";
import { FiSearch, FiUsers, FiShield } from "react-icons/fi";
import { LuMail } from "react-icons/lu";
import {
  Container,
  Header,
  Title,
  Search,
  CardGeral,
  Total,
  Icon,
  Info,
  Content,
  UserCard,
  Icone,
  Informacoes,
  Status,
  SNome,
  SRol,
  SMail,
  Data,
  Conteudo,
  Conteudo2,
  EmptyStateWrapper,
  EmptyIcon,
  EmptyTitle,
  EmptyDescription,
} from "./style";

const AdminUsers = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    buscarUsuarios();
  }, []);

  const buscarUsuarios = async () => {
    try {
      const response = await axios.get('http://localhost:8080/get-users', {
        withCredentials: true
      });
      console.log('Usuários:', response.data);
      setUsuarios(response.data);
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
      alert('Erro ao carregar usuários');
    } finally {
      setLoading(false);
    }
  };

  const handleTipoChange = async (codUser, novoTipo) => {
    try {
      await axios.put(
        `http://localhost:8080/update-user-tipo/${codUser}`,
        { tipo_user: novoTipo },
        { withCredentials: true }
      );
      
      // Atualiza o estado local
      setUsuarios(usuarios.map(user => 
        user.cod_user === codUser 
          ? { ...user, tipo_user: novoTipo }
          : user
      ));
      
      alert('Cargo atualizado com sucesso!');
    } catch (error) {
      console.error('Erro ao atualizar cargo:', error);
      alert('Erro ao atualizar cargo do usuário');
    }
  };

  const formatarData = (data) => {
    if (!data) return 'Data não disponível';
    const date = new Date(data);
    return date.toLocaleDateString('pt-BR');
  };

  // Filtrar usuários pela busca
  const usuariosFiltrados = usuarios.filter(user => 
    user.nome_user?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email_user?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Contar por tipo
  const totalAdmins = usuariosFiltrados.filter(u => u.tipo_user === 'Administrador').length;
  const totalClientes = usuariosFiltrados.filter(u => u.tipo_user === 'Cliente').length;

  if (loading) {
    return (
      <Container>
        <div style={{ textAlign: 'center', padding: '50px' }}>
          Carregando usuários...
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <Title>
          <h1>Gerenciar Usuários</h1>
          <p>{usuariosFiltrados.length} usuários cadastrados</p>
        </Title>
      </Header>

      <CardGeral>
        <Total>
          <Icon color="#E8E2FF">
            <FiUsers size={24} color="#6A00FF" />
          </Icon>
          <Info>
            <p>Total de Usuários</p>
            <p>{usuariosFiltrados.length}</p>
          </Info>
        </Total>

        <Total>
          <Icon color="#FFE5F0">
            <FiShield size={24} color="#E4005C" />
          </Icon>
          <Info>
            <p>Administradores</p>
            <p>{totalAdmins}</p>
          </Info>
        </Total>

        <Total>
          <Icon color="#DFFFEA">
            <FiUsers size={24} color="#00A85A" />
          </Icon>
          <Info>
            <p>Clientes</p>
            <p>{totalClientes}</p>
          </Info>
        </Total>
      </CardGeral>

      <Search>
        <FiSearch size={20} color="#666" />
        <input 
          type="text" 
          placeholder="Buscar usuário por nome ou email..." 
          aria-label="Buscar usuário"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Search>

      <Content>
        {usuariosFiltrados.map((usuario) => (
          <UserCard 
            key={usuario.cod_user} 
            role={usuario.tipo_user === 'Administrador' ? 'admin' : 'user'}
          >
            <Conteudo>
              <Icone color={usuario.tipo_user === 'Administrador' ? "#E8E2FF" : "#DFFFEA"}>
                {usuario.nome_user?.charAt(0).toUpperCase() || '?'}
              </Icone>

              <Informacoes>
                <Status>
                  <SNome>{usuario.nome_user || 'Nome não disponível'}</SNome>
                  <SRol role={usuario.tipo_user === 'Administrador' ? 'admin' : 'user'}>
                    {usuario.tipo_user || 'Sem tipo'}
                  </SRol>
                </Status>

                <SMail>
                  <LuMail /> {usuario.email_user || 'Email não disponível'}
                </SMail>
              </Informacoes>
            </Conteudo>

            <Conteudo2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
                <Data>Cadastro: {formatarData(usuario.createdAt)}</Data>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <label style={{ fontSize: '0.85rem', color: '#666', fontWeight: '500' }}>
                    Alterar Cargo:
                  </label>
                  <select
                    value={usuario.tipo_user || 'Cliente'}
                    onChange={(e) => handleTipoChange(usuario.cod_user, e.target.value)}
                    style={{
                      padding: '8px 12px',
                      borderRadius: '6px',
                      border: '1px solid #ddd',
                      fontSize: '0.9rem',
                      cursor: 'pointer',
                      backgroundColor: '#fff',
                      color: '#333',
                      outline: 'none',
                      transition: 'border-color 0.2s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#6A00FF'}
                    onBlur={(e) => e.target.style.borderColor = '#ddd'}
                  >
                    <option value="Cliente">Cliente</option>
                    <option value="Administrador">Administrador</option>
                    <option value="Funcionário">Funcionário</option>
                    <option value="Transportadora">Transportadora</option>
                  </select>
                </div>
              </div>
            </Conteudo2>
          </UserCard>
        ))}
      </Content>

      {usuariosFiltrados.length === 0 && (
        <EmptyStateWrapper>
          <EmptyIcon>
            <FiSearch size={22} />
          </EmptyIcon>
          <EmptyTitle>Nenhum usuário encontrado</EmptyTitle>
          <EmptyDescription>
            {searchTerm 
              ? 'Ajuste a busca para localizar resultados' 
              : 'Não há usuários cadastrados no sistema'}
          </EmptyDescription>
        </EmptyStateWrapper>
      )}
    </Container>
  );
};

export default AdminUsers;