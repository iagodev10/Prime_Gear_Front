import React, { useState } from 'react';
import styled from 'styled-components';

import { Container, Header, Title, Button, Search, Fornecedor, Content, Action, Edit, Excluir } from './style';
import { FiPlus, FiSearch, FiEdit, FiTrash } from 'react-icons/fi';

const AdminFornecedor = () => {

    const mockFornecedor = [
        {
            id: 1,
            nome: 'Eletrônicos Master',
            email: 'vendas@eletromaster.com.br',
            telefone: '(21) 2345-6789',
            endereco: 'Rua A, 123',
            cnpj: '12.345.678/0001-95',
            responsavel: 'Ana Santos',
        },
        {
            id: 2,
            nome: 'Fornecedor 2',
            email: 'fornecedor2@example.com',
            telefone: '(11) 4567-8901',
            endereco: 'Rua B, 456',
            cnpj: '98.765.432/0001-87',
            responsavel: 'João Silva',
        },
        {
            id: 3,
            nome: 'Fornecedor 3',
            email: 'fornecedor3@example.com',
            telefone: '(41) 3456-7890',
            endereco: 'Rua C, 789',
            cnpj: '55.555.555/0001-55',
            responsavel: 'Mariana Oliveira',
        },
        {
            id: 4,
            nome: 'Fornecedor 3',
            email: 'fornecedor3@example.com',
            telefone: '(41) 3456-7890',
            endereco: 'Rua C, 789',
            cnpj: '55.555.555/0001-55',
            responsavel: 'Mariana Oliveira',
        },
        {
            id: 5,
            nome: 'Fornecedor 3',
            email: 'fornecedor3@example.com',
            telefone: '(41) 3456-7890',
            endereco: 'Rua C, 789',
            cnpj: '55.555.555/0001-55',
            responsavel: 'Mariana Oliveira',
        },
        {
            id: 6,
            nome: 'Fornecedor 3',
            email: 'fornecedor3@example.com',
            telefone: '(41) 3456-7890',
            endereco: 'Rua C, 789',
            cnpj: '55.555.555/0001-55',
            responsavel: 'Mariana Oliveira',
        },
    ];

    return (
        <Container>
            <Header>
                <Title>
                    <h1>Gerenciar Fornecedores</h1>
                    <p>{mockFornecedor.length} fornecedores cadastrados</p>
                </Title>
                <Button>
                    <FiPlus size={18} />
                    Adicionar Fornecedor
                </Button>
            </Header>

            <Search>
                <FiSearch size={20} color="#666" />
                <input type="text" placeholder="Buscar fornecedor..." />
            </Search>

            <Content>
                {mockFornecedor.map((fornecedor) => (
                    <Fornecedor key={fornecedor.id}>
                        <h3>{fornecedor.nome}</h3>
                        <p className='label'>CNPJ</p>
                        <p>{fornecedor.cnpj}</p>
                        <p className='label'>Responsável</p>
                        <p>{fornecedor.responsavel}</p>
                        <p className='label'>Email</p>
                        <p>{fornecedor.email}</p>
                        <p className='label'>Telefone</p>
                        <p>{fornecedor.telefone}</p>
                        <p className='label'>Endereço</p>
                        <p>{fornecedor.endereco}</p>
                        
                        <Action>
                            <Edit>
                                <FiEdit size={20} color="white" />
                                Editar
                            </Edit>
                            <Excluir>
                                <FiTrash size={20} color="white" />
                            </Excluir>
                        </Action>
                    </Fornecedor>
                ))}
            </Content>

        </Container>
    );
}

export default AdminFornecedor;
