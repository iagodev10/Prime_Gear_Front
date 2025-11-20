import React, { useState } from 'react';
import { Container, Header, Title, Button, Search, Content, Categoria, Infos, Action, Edit, Excluir, Badge } from './style'
import { FiPlus, FiSearch, FiEdit, FiTrash } from 'react-icons/fi'

import ModalAdicionarCategoria from '../../components/ModalAdicionarCategoria';
import ModalEditarCategoria from '../../components/ModalEditarCategoria';
import ModalExcluirCategoria from '../../components/ModalExcluirCategoria';

const AdminCategorias = () => {

    const [categorias, setCategorias] = useState([
        { id: 1, name: 'Laptops', descricao: 'Laptops para trabalho e entretenimento' },
        { id: 2, name: 'Headsets', descricao: 'Headsets para jogos' },
        { id: 3, name: 'Mouse', descricao: 'Mouses para jogos' },
        { id: 4, name: 'Teclados', descricao: 'Teclados para jogos' },
        { id: 5, name: 'Monitor', descricao: 'Monitores para jogos' },
        { id: 6, name: 'Webcams', descricao: 'Webcams para jogos' },
    ])

    const [modalVisivel, setModalVisivel] = useState(false);
    const [modalEditarVisivel, setModalEditarVisivel] = useState(false);
    const [modalExcluirVisivel, setModalExcluirVisivel] = useState(false);
    const [categoriaAtual, setCategoriaAtual] = useState(null);

    return (
        <>
            <Container>
                <Header>
                    <Title>
                        <h1>Gerenciar Categorias</h1>
                        <p>{categorias.length} categorias cadastradas</p>
                    </Title>
                    <Button onClick={() => setModalVisivel(true)}>
                        <FiPlus size={18}/>
                        Adicionar Categoria
                    </Button>
                </Header>

                <Search>
                    <FiSearch size={20} color="#666" />
                    <input type="text" placeholder="Buscar categoria..." />
                </Search>

                <Content>
                    {categorias.map((categoria) => (
                        <Categoria key={categoria.id}>
                            <Infos>
                                <div style={{display:'flex',alignItems:'center',gap:10}}>
                                    <h3>{categoria.name}</h3>
                                    <Badge>#{categoria.id}</Badge>
                                </div>
                                <p>{categoria.descricao}</p>
                            </Infos>
                            <Action>
                                <Edit onClick={() => { setCategoriaAtual(categoria); setModalEditarVisivel(true); }}>
                                    <FiEdit size={20} color="white" />
                                    Editar
                                </Edit>
                                <Excluir onClick={() => { setCategoriaAtual(categoria); setModalExcluirVisivel(true); }}>
                                    <FiTrash size={20} color="white" />
                                </Excluir>
                            </Action>
                        </Categoria>
                    ))}
                </Content>

                <ModalAdicionarCategoria
                    isVisivel={modalVisivel}
                    onClose={() => setModalVisivel(false)}
                />

                {modalEditarVisivel && (
                    <ModalEditarCategoria
                        categoriaAtual={categoriaAtual}
                        onClose={() => setModalEditarVisivel(false)}
                        onSave={(c) => {
                            setCategorias(prev => prev.map(item => item.id === c.id ? c : item))
                        }}
                    />
                )}

                <ModalExcluirCategoria
                    isVisivel={modalExcluirVisivel}
                    categoria={categoriaAtual}
                    onClose={() => setModalExcluirVisivel(false)}
                    onConfirm={() => {
                        setCategorias(prev => prev.filter(item => item.id !== categoriaAtual?.id))
                        setModalExcluirVisivel(false)
                        setCategoriaAtual(null)
                    }}
                />
            </Container>
        </>
    )
}

export default AdminCategorias