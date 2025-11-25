import React from "react";

import { FiPlus, FiSearch, FiUsers, FiShield } from "react-icons/fi";
import { LuMail } from "react-icons/lu";
import {
  Container,
  Header,
  Title,
  Button,
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
  const mockUsuarios = [
    {
      name: "Felipe Peixoto",
      email: "felipepeixoto@example.com",
      role: "admin",
      dataCadastro: "01-01-2023",
    },
    {
      name: "João Silva",
      email: "joaosilva@example.com",
      role: "user",
      dataCadastro: "02-01-2023",
    },
    {
      name: "Maria Oliveira",
      email: "mariaoliveira@example.com",
      role: "user",
      dataCadastro: "03-01-2023",
    },
  ];
  return (
    <>
      <Container>
        <Header>
          <Title>
            <h1>Gerenciar Usuários</h1>
            <p> {mockUsuarios.length} usuários cadastrados</p>
          </Title>
          {/* <Button>
            <FiPlus size={18} />
            Adicionar Usuário
          </Button> */}
        </Header>

        <CardGeral>
          <Total>
            <Icon color="#E8E2FF">
              <FiUsers size={24} color="#6A00FF" />
            </Icon>
            <Info>
              <p>Total de Usuários</p>
              <p>{mockUsuarios.length}</p>
            </Info>
          </Total>

          <Total>
            <Icon color="#FFE5F0">
              <FiShield size={24} color="#E4005C" />
            </Icon>
            <Info>
              <p>Administradores</p>
              <p>
                {
                  mockUsuarios.filter((usuario) => usuario.role === "admin")
                    .length
                }
              </p>
            </Info>
          </Total>

          <Total>
            <Icon color="#DFFFEA">
              <FiUsers size={24} color="#00A85A" />
            </Icon>
            <Info>
              <p>Clientes</p>
              <p>
                {
                  mockUsuarios.filter((usuario) => usuario.role === "user")
                    .length
                }
              </p>
            </Info>
          </Total>
        </CardGeral>

        <Search>
          <FiSearch size={20} color="#666" />
          <input type="text" placeholder="Buscar usuário..." aria-label="Buscar usuário" />
        </Search>

        <Content>
          {mockUsuarios.map((usuario) => (
            <UserCard key={usuario.email} role={usuario.role}>
              <Conteudo>
                <Icone color={usuario.role === "admin" ? "#E8E2FF" : "#DFFFEA"}>
                  {usuario.name.charAt(0).toUpperCase()}
                </Icone>

                <Informacoes>
                  <Status>
                    <SNome>{usuario.name}</SNome>
                    <SRol
                    role={usuario.role}
                    >
                      {usuario.role === "admin" ? "Administrador" : "Cliente"}
                    </SRol>
                  </Status>

                  <SMail>
                    <LuMail /> {usuario.email}
                  </SMail>
              </Informacoes>
              </Conteudo>

              <Conteudo2>
                <Data>Cadastro em {usuario.dataCadastro}</Data>
              </Conteudo2>
            </UserCard>
          ))}
        </Content>

        {mockUsuarios.length === 0 && (
          <EmptyStateWrapper>
            <EmptyIcon>
              <FiSearch size={22} />
            </EmptyIcon>
            <EmptyTitle>Nenhum usuário encontrado</EmptyTitle>
            <EmptyDescription>Ajuste a busca para localizar resultados</EmptyDescription>
          </EmptyStateWrapper>
        )}
      </Container>
    </>
  );
};

export default AdminUsers;
