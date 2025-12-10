import React, { useState, useEffect } from 'react';
import { Container, Header, Title, Button, Search, Content, Categoria, Infos, Action, Edit, Excluir, Badge } from './style'
import { FiPlus, FiSearch, FiEdit, FiTrash, FiRewind } from 'react-icons/fi'
import axios from 'axios';
import ModalAdicionarMarca from '../../components/Marca/ModalAdicionarMarca';
import ModalEditarMarca from '../../components/Marca/ModalEditarMarca';
import ModalExcluirMarca from '../../components/Marca/ModalExcluirMarca';

const AdminMarcas = () => {

    const [marcas, setmarcas] = useState([])

    async function obtermarcas() {
        try {
            const response = await axios.get('http://72.62.10.218:8080/get-marcas')
            setmarcas(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    async function deletarCategoria(idCat) {
        console.log("chamou");
        try {
            const response = await axios.delete('http://72.62.10.218:8080/delete-marca/' + idCat)
            console.log("DELETOU");
            window.location.reload()
            setModalExcluirVisivel(false)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        obtermarcas()
    }, [])

    const [modalVisivel, setModalVisivel] = useState(false);
    const [modalEditarVisivel, setModalEditarVisivel] = useState(false);
    const [modalExcluirVisivel, setModalExcluirVisivel] = useState(false);
    const [categoriaAtual, setCategoriaAtual] = useState(null);
    const [idParaExcluirEEditar, setidParaExcluirEEditar] = useState()
    return (
        <>
            <Container>
                <Header>
                    <Title>
                        <h1>Gerenciar Marcas</h1>
                        <p>{marcas.length} marcas cadastradas</p>
                    </Title>
                    <Button onClick={() => setModalVisivel(true)}>
                        <FiPlus size={18} />
                        Adicionar Marca
                    </Button>
                </Header>

                <Search>
                    <FiSearch size={20} color="#666" />
                    <input type="text" placeholder="Buscar marca..." />
                </Search>

                <Content>
                    {marcas.map((marca) => (
                        <Categoria key={marca.cod_marca}>
                            <Infos>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                    <h3>{marca.nome_marca}</h3>
                                    <Badge>#{marca.cod_marca}</Badge>
                                </div>
                                <img src={marca.url_nome_img_marca} style={{
                                    width: '40%',
                                    height: 'auto',
                                    aspectRatio: '4 / 2',
                                    objectFit: 'cover',
                                    objectPosition: 'center',
                                    borderRadius: '8px',
                                    padding: "10px"
                                }}></img>
                            </Infos>
                            <Action>
                                <Edit onClick={() => { setCategoriaAtual(marca); setModalEditarVisivel(true); setidParaExcluirEEditar(marca.cod_marca) }}>
                                    <FiEdit size={20} color="white" />
                                    Editar
                                </Edit>
                                <Excluir onClick={() => { setCategoriaAtual(marca); setModalExcluirVisivel(true); setidParaExcluirEEditar(marca.cod_marca) }}>
                                    <FiTrash size={20} color="white" />
                                </Excluir>
                            </Action>
                        </Categoria>
                    ))}
                </Content>

                <ModalAdicionarMarca
                    isVisivel={modalVisivel}
                    onClose={() => {
                        setModalVisivel(false);
                        obtermarcas();
                    }}
                />

                {modalEditarVisivel && (
                    <ModalEditarMarca
                        categoriaAtual={categoriaAtual}
                        onClose={() => setModalEditarVisivel(false)}
                        onSave={(c) => {
                            setmarcas(prev => prev.map(item => item.id === c.id ? c : item))
                        }}
                        id={idParaExcluirEEditar}
                    />
                )}

                <ModalExcluirMarca
                    isVisivel={modalExcluirVisivel}
                    marca={categoriaAtual}
                    onClose={() => setModalExcluirVisivel(false)}
                    onConfirm={() => deletarCategoria(idParaExcluirEEditar)}
                    id={idParaExcluirEEditar}
                />
            </Container>
        </>
    )
}

export default AdminMarcas