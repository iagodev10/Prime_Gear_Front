import React, { useState,useEffect } from 'react';
import { Container, Header, Title, Button, Search, Content, Categoria, Infos, Action, Edit, Excluir, Badge } from './style'
import { FiPlus, FiSearch, FiEdit, FiTrash, FiRewind } from 'react-icons/fi'
import axios from 'axios';
import ModalAdicionarCategoria from '../../components/Categoria/ModalAdicionarCategoria';
import ModalEditarCategoria from '../../components/Categoria/ModalEditarCategoria';
import ModalExcluirCategoria from '../../components/Categoria/ModalExcluirCategoria';

const AdminCategorias = () => {

    const [categorias, setCategorias] = useState([])

    async function obterCategorias(){
        try {
            const response= await axios.get('http://localhost:8080/get-categorias')
            setCategorias(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    async function deletarCategoria(idCat){
        console.log("chamou");
        try {
            const response = await axios.delete('http://localhost:8080/delete-categoria/'+idCat)
            console.log("DELETOU");
            window.location.reload()
            setModalExcluirVisivel(false)
        } catch (error) {
          console.log(error);
        }
      }

    useEffect(()=>{
        obterCategorias()
    },[])

    const [modalVisivel, setModalVisivel] = useState(false);
    const [modalEditarVisivel, setModalEditarVisivel] = useState(false);
    const [modalExcluirVisivel, setModalExcluirVisivel] = useState(false);
    const [categoriaAtual, setCategoriaAtual] = useState(null);
    const [idParaExcluirEEditar,setidParaExcluirEEditar]=useState()
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
                        <Categoria key={categoria.cod_categoria}>
                            <Infos>
                                <div style={{display:'flex',alignItems:'center',gap:10}}>
                                    <h3>{categoria.nome_cat}</h3>
                                    <Badge>#{categoria.cod_categoria}</Badge>
                                </div>
                                <p>{categoria.descricao_cat}</p>
                            </Infos>
                            <Action>
                                <Edit onClick={() => { setCategoriaAtual(categoria); setModalEditarVisivel(true); setidParaExcluirEEditar(categoria.cod_categoria)}}>
                                    <FiEdit size={20} color="white" />
                                    Editar
                                </Edit>
                                <Excluir onClick={() => { setCategoriaAtual(categoria); setModalExcluirVisivel(true); setidParaExcluirEEditar(categoria.cod_categoria)}}>
                                    <FiTrash size={20} color="white" />
                                </Excluir>
                            </Action>
                        </Categoria>
                    ))}
                </Content>

                <ModalAdicionarCategoria
                     isVisivel={modalVisivel}
                     onClose={() => {
                       setModalVisivel(false);
                       obterCategorias();
                     }}
                />

                {modalEditarVisivel && (
                    <ModalEditarCategoria
                        categoriaAtual={categoriaAtual}
                        onClose={() => setModalEditarVisivel(false)}
                        onSave={(c) => {
                            setCategorias(prev => prev.map(item => item.id === c.id ? c : item))
                        }}
                        id={idParaExcluirEEditar}
                    />
                )}

                <ModalExcluirCategoria
                    isVisivel={modalExcluirVisivel}
                    categoria={categoriaAtual}
                    onClose={() => setModalExcluirVisivel(false)}
                    onConfirm={() => deletarCategoria(idParaExcluirEEditar)}
                    id={idParaExcluirEEditar}
                />
            </Container>
        </>
    )
}

export default AdminCategorias