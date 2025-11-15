import React from 'react';
import { useState } from 'react';
import { FiEdit, FiTrash, FiPlus, FiSearch } from 'react-icons/fi';
import {
    Container, Header, Title, Button, Search,
    Content, ProdutoCard, ProdImage, ProdName,
    ProdInfos, ProdCategoria, ProdQuantidade,
    ProdPrice, ProdActions, ActionButton
} from './style';
import Desktop from '../../assets/images/desktopPC.png';

import ModalAdicionarProduto from '../../components/ModalAdicionarProduto';


const AdminProdutos = () => {
    const mockProdutos = [
        { id: 1, name: 'Notebook Lenovo IdeaPad 1i hgg hgh ghgfdh', categoria: 'Laptops', quantidade: 10, price: 3524, image: Desktop },
        { id: 2, name: 'Headset Gamer Logitech G535 LIGHTSPEED', categoria: 'Headsets', quantidade: 10, price: 589.9, image: Desktop },
        { id: 3, name: 'Monitor Samsung Odyssey G32 32" Full HD', categoria: 'Monitors', quantidade: 10, price: 1599, image: Desktop },
        { id: 4, name: 'Monitor Samsung Odyssey G32 32" Full HD', categoria: 'Monitors', quantidade: 10, price: 1599, image: Desktop },
    ];

    const [modalVisivel, setModalVisivel] = useState(false)

    return (
        <Container>
            <Header>
                <Title>
                    <h1>Gerenciar Produtos</h1>
                    <p>Adicione, edite ou remova produtos do catálogo.</p>
                </Title>
                <Button onClick={() => setModalVisivel(true)}>
                    <FiPlus size={18} />
                    Adicionar Produto
                </Button>
            </Header>

            <Search>
                <FiSearch size={20} color="#666" />
                <input type="text" placeholder="Buscar produto..." />
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
                            <ProdCategoria><p>{produto.categoria}</p></ProdCategoria>
                            <ProdQuantidade><p>{produto.quantidade} unid.</p></ProdQuantidade>
                        </ProdInfos>

                        <ProdPrice><p>R$ {produto.price.toLocaleString('pt-BR')}</p></ProdPrice>

                        <ProdActions>
                            <ActionButton><FiEdit /> Editar</ActionButton>
                            <ActionButton><FiTrash /> Excluir</ActionButton>
                        </ProdActions>
                    </ProdutoCard>
                ))}
            </Content>

            {modalVisivel && (
                <ModalAdicionarProduto onClose={() => setModalVisivel(false)} />
            )}

        </Container>
    );
};

export default AdminProdutos;
