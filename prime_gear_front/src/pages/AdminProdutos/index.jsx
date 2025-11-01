import React from 'react';
import styled from 'styled-components';

import { FiEdit, FiTrash, FiPlus, FiSearch } from 'react-icons/fi';
import {
    Container, Header, Title, Button, Search,
    Content, ProdutoCard, ProdImage, ProdName, ProdInfos, ProdCategoria, ProdQuantidade, ProdPrice, ProdActions, Edit, Delete, Button
} from './style';

const AdminProdutos = () => {

    const mockProdutos = [
        {
            id: 1,
            name: 'Notebook Lenovo IdeaPad 1i',
            categoria: 'Laptops',
            quantidade: 10,
            price: 3.524,
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 2,
            name: 'Headset Gamer Sem Fio Logitech G535 LIGHTSPEED',
            categoria: 'Headsets',
            quantidade: 10,
            price: 589.90,
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 3,
            name: 'Monitor Gamer Samsung Odyssey G32 32" Full HD',
            categoria: 'Monitors',
            quantidade: 10,
            price: 1.599,
            image: 'https://via.placeholder.com/150'
        }
    ]

    return (
        <Container>


            <Header>
                <Title>
                    <h1>Gerenciar Produtos</h1>
                    <p></p>
                </Title>
                <Button className='add-product-button'>
                    <FiPlus size={20} />
                    <span>Adicionar Produto</span>
                </Button>
            </Header>

            <Search>
                <FiSearch size={20} />
                <input type="text" placeholder="Buscar Produto" />
            </Search>

            <Content>
                {mockProdutos.map((produto) => (
                    <ProdutoCard key={produto.id}>

                        <ProdImage>
                            <img src={produto.image} alt={produto.name} />
                        </ProdImage>

                        <ProdName>
                            <p>{produto.name}</p>
                        </ProdName>

                        <ProdInfos>
                            <ProdCategoria>
                                <p>{produto.categoria}</p>
                            </ProdCategoria>
                            <ProdQuantidade>
                                <p>{produto.quantidade}</p>
                            </ProdQuantidade>
                        </ProdInfos>

                        <ProdPrice>
                            <p>{produto.price}</p>
                        </ProdPrice>

                        <ProdActions>
                            <Edit>
                                <Button>
                                    <FiEdit size={20} />
                                    <span>Editar</span>
                                </Button>
                                <Delete>
                                    <Button>
                                        <FiTrash size={20} style={{ backgroundColor: 'red' }} />
                                    </Button>
                                </Delete>
                            </Edit>
                        </ProdActions>

                    </ProdutoCard>
                ))}
            </Content>
        </Container>
    )
}

export default AdminProdutos;