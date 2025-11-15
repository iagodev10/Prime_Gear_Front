import React from 'react';
import styled from 'styled-components';

import { Container, Header, Title, Button, Search, Content, Categoria, CatImage, Infos, Action, Edit, Excluir } from './style'
import { FiPlus, FiSearch, FiEdit, FiTrash } from 'react-icons/fi'

import Notebook from '../../assets/images/cat-notebook.png'

const AdminCategorias = () => {

    const mockCategorias = [
        { id: 1, image: Notebook, name: 'Laptops', descricao: 'Laptops para trabalho e entretenimento' },
        { id: 2, image: Notebook, name: 'Headsets', descricao: 'Headsets para jogos' },
        { id: 3, image: Notebook, name: 'Mouse', descricao: 'Mouses para jogos' },
        { id: 4, image: Notebook, name: 'Teclados', descricao: 'Teclados para jogos' },
        { id: 5, image: Notebook, name: 'Monitor', descricao: 'Monitores para jogos' },
        { id: 6, image: Notebook, name: 'Webcams', descricao: 'Webcams para jogos' },
    ]

    return (
        <>
            <Container>
                <Header>
                    <Title>
                        <h1>Gerenciar Categorias</h1>
                        <p>{mockCategorias.length} categorias cadastradas</p>
                    </Title>
                    <Button onClick={() => setModalVisivel(true)}>
                        <FiPlus size={18} />
                        Adicionar Categoria
                    </Button>
                </Header>

                <Search>
                    <FiSearch size={20} color="#666" />
                    <input type="text" placeholder="Buscar categoria..." />
                </Search>

                <Content>
                    {mockCategorias.map((categoria) => {
                        return(
                        <Categoria key={categoria.id}>
                            <CatImage>
                                <img src={categoria.image} alt={categoria.name} />
                            </CatImage>
                            <Infos>
                                <h3>{categoria.name}</h3>
                                <p>{categoria.descricao}</p>
                            </Infos>

                            <Action>
                                <Edit>
                                    <FiEdit size={20} color="white" />
                                    Editar
                                </Edit>
                                <Excluir>
                                    <FiTrash size={20} color="white" />
                                </Excluir>
                            </Action>
                        </Categoria>
                    
                        )
                    })}
                </Content>

            </Container>
        </>
    )
}

export default AdminCategorias