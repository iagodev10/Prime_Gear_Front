import React, { useState } from 'react';

import { Container, Header, Title, Button, Search,Name, Info, 
    Transportadora, Content, Action, Edit, Excluir, TransPrice } from './style';
import { FiPlus, FiSearch, FiEdit, FiTrash, FiTruck } from 'react-icons/fi';

import ModalAdicionarTransportadora from '../../components/Transportadora/ModalAdicionarTransportadora';

const AdminTransportadora = () => {

    const [transportadoras, setTransportadoras] = useState([
        {
            id: 1,
            nome: 'Azul Cargo Express',
            preco_frete: 30.00,
            email: 'vendas@eletromaster.com.br',
            telefone: '(21) 2345-6789', 
            endereco: 'Rua A, 123',
            cnpj: '09.296.295/0001-60',
            regioes: 'Todo Brasil - Entrega Aérea',
        },
        {
            id: 2,
            nome: 'Transportadora 2',
            preco_frete: 30.00,
            email: 'transportadora2@example.com',
            telefone: '(11) 4567-8901',
            endereco: 'Rua B, 456',
            cnpj: '98.765.432/0001-87',
            regioes: 'Todo Brasil - Entrega Aérea',
        },
        {
            id: 3,
            nome: 'Transportadora 3',
            preco_frete: 30.00,
            email: 'transportadora3@example.com',
            telefone: '(41) 3456-7890',
            endereco: 'Rua C, 789',
            cnpj: '55.555.555/0001-55',
            regioes: 'Todo Brasil - Entrega Aérea',
        },
        {
            id: 4,
            nome: 'Transportadora 4',
            preco_frete: 30.00,
            email: 'transportadora4@example.com',
            telefone: '(41) 3456-7890',
            endereco: 'Rua C, 789',
            cnpj: '55.555.555/0001-55',
            regioes: 'Todo Brasil - Entrega Aérea',
        },
        {
            id: 5,
            nome: 'Transportadora 5',
            preco_frete: 30.00,
            email: 'transportadora5@example.com',
            telefone: '(41) 3456-7890',
            endereco: 'Rua C, 789',
            cnpj: '55.555.555/0001-55',
            regioes: 'Todo Brasil - Entrega Aérea',
        },
        {
            id: 6,
            nome: 'Transportadora 6',
            preco_frete: 30.00,
            email: 'transportadora6@example.com',
            telefone: '(41) 3456-7890',
            endereco: 'Rua C, 789',
            cnpj: '55.555.555/0001-55',
            regioes: 'Todo Brasil - Entrega Aérea',
        },
    ]);

    const [modalVisivel, setModalVisivel] = useState(false);

    return (
        <Container>
            <Header>
                <Title>
                    <h1>Gerenciar Transportadoras</h1>
                    <p>{transportadoras.length} transportadoras cadastradas</p>
                </Title>
                <Button onClick={() => setModalVisivel(true)}>
                    <FiPlus size={18} />
                    Adicionar Transportadora
                </Button>
            </Header>

            <Search>
                <FiSearch size={20} color="#666" />
                <input type="text" placeholder="Buscar transportadora..." />
            </Search>

            <Content>
                {transportadoras.map((transportadora) => (
                    <Transportadora key={transportadora.id}>
                        <Name>
                            <div>
                                <FiTruck size={28} color="#fff" />
                            </div>
                            <h3>{transportadora.nome}</h3>
                        </Name>
                        <TransPrice>
                            <p className='label'>Preço Base do Frete</p>
                            <p>R$ {transportadora.preco_frete.toFixed(2)}</p>
                        </TransPrice>

                        <Info>
                            <p className='label'>CNPJ</p>
                            <p style={{'margin-bottom': '20px'}}>{transportadora.cnpj}</p>
                            <p className='label'>Contato</p>
                            <p>{transportadora.telefone}</p>
                            <p style={{'margin-bottom': '20px'}}>{transportadora.email}</p>
                            <p className='label'>Regiões de Entrega</p>
                            <p>{transportadora.regioes}</p>
                        </Info>

                        <Action>
                            <Edit>
                                <FiEdit size={20} color="white" />
                                Editar
                            </Edit>
                            <Excluir>
                                <FiTrash size={20} color="white" />
                            </Excluir>
                        </Action>
                    </Transportadora>
                ))}
            </Content>

            <ModalAdicionarTransportadora
                isVisivel={modalVisivel}
                onClose={() => setModalVisivel(false)}
            />

        </Container>
    );
}

export default AdminTransportadora;
