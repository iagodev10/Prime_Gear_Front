import React from 'react';
import { useState,useEffect } from 'react';
import { FiEdit, FiTrash, FiPlus, FiSearch } from 'react-icons/fi';
import {
    Container, Header, Title, Button, Search,
    Content, ProdutoCard, ProdImage, ProdName,
    ProdInfos, ProdCategoria, ProdQuantidade,
    ProdPrice, ProdActions, ActionButton
} from './style';
import Desktop from '../../assets/images/desktopPC.png';
import axios from 'axios';

import ModalAdicionarProduto from '../../components/ModalAdicionarProduto';


const AdminProdutos = () => {

    const [produtos,setProdutos]=useState([])

    async function obterProdutos(){
        try {
            const response=await axios.get('http://localhost:8080/produtos-adm')
            console.log(response.data);   
            setProdutos(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        obterProdutos()
    },[])

    async function deletarProd(id){
        try {
            const response=await axios.delete('http://localhost:8080/delete-produto/'+id)
            obterProdutos()
        } catch (error) {
            console.log(error);
        }
    }
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
                {produtos.map((produto) => (
                    <ProdutoCard key={produto.id_prod} >
                        <ProdImage>
                            <img src={produto.url_img_prod} alt={produto.nome_prod} />
                        </ProdImage>

                        <ProdName>
                            <p>{produto.nome_prod}</p>
                        </ProdName>

                        <ProdInfos>
                            <ProdCategoria><p>{produto.categoria}</p></ProdCategoria>
                            <ProdQuantidade><p>{produto.qtd_estoque_prod} unid.</p></ProdQuantidade>
                        </ProdInfos>

                        <ProdPrice><p>R$ {produto.preco_prod.toLocaleString('pt-BR')}</p></ProdPrice>

                        <ProdActions>
                            <ActionButton><FiEdit /> Editar</ActionButton>
                            <ActionButton onClick={()=> deletarProd(produto.cod_produto)}><FiTrash /> Excluir</ActionButton>
                        </ProdActions>
                    </ProdutoCard>
                ))}
            </Content>

            {modalVisivel && (
                <ModalAdicionarProduto onClose={() => {setModalVisivel(false),obterProdutos()}} />
            )}

        </Container>
    );
};

export default AdminProdutos;