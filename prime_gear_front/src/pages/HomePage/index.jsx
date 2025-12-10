import React, { useState, useEffect } from 'react';
import axios from 'axios';

import HeroBanner from '../../components/HeroBanner';
import CategoryCarousel from '../../components/CategoryCarousel';
import ProductCarousel from '../../components/ProductCarousel';
import BrandsCarousel from '../../components/BrandsCarousel';
import EmailSignUp from '../../components/EmailSignUp';
import CategoryNav from '../../components/CategoryNav';

import { BannerPromo, BannerImg, BannerBuy } from './style'
import { IdeaButton, IdeaImg, IdeapadText, Ideapad, Descrip, Title, SubTitle } from './style'

import OutroNivelImersao from '../../assets/images/Outro-Nivel-Imersao.png';
import Ideapad1 from '../../assets/images/Ideapad1.png';

import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [produtosSecao1, setProdutosSecao1] = useState([]);
  const [produtosSecao2, setProdutosSecao2] = useState([]);
  const [categorias,setCategorias]=useState([])
  const [marcas,setMarcas]=useState([])
  const [nomeSecao1, setNomeSecao1] = useState('Carregando...');
  const [nomeSecao2, setNomeSecao2] = useState('Carregando...');
  const [loading, setLoading] = useState(true);
 
  const navigate=useNavigate()

  useEffect(() => {
    const carregarDadosSecoes = async () => {
      try {
        setLoading(true);

        const responseMarcas = await axios.get('http://primegear.site:8080/get-marcas');
       
        setMarcas(responseMarcas.data);
        console.log("MARCAS");
        console.log(responseMarcas.data);
     
        
       const responseCategorias = await axios.get('http://primegear.site:8080/get-categorias');
       
        setCategorias(responseCategorias.data);
       console.log('ó');

       
        const response1 = await axios.get('http://primegear.site:8080/get-prods-vinc/1');
        if (response1.data.success) {
          setProdutosSecao1(response1.data.produtos);
          console.log(response1.data.produtos);
          console.log("ó");
          setNomeSecao1(response1.data.nomeSecao || 'Destaques da Semana');
        }

        const response2 = await axios.get('http://primegear.site:8080/get-prods-vinc/2');
        if (response2.data.success) {
          setProdutosSecao2(response2.data.produtos || []);
          setNomeSecao2(response2.data.nomeSecao || 'Até 50% de desconto');
        }

        setLoading(false);
      } catch (error) {
        console.error('Erro ao carregar dados das seções:', error);
      
        setNomeSecao1('Destaques da Semana');
        setNomeSecao2('Até 50% de desconto');
        setLoading(false);
      }
    };

    carregarDadosSecoes();
  }, []);

  return (
    <>
      <HeroBanner />
      <CategoryNav
                categorias={categorias}
            
            />

      {/* Seção 1 - Destaques da Semana (produtos vinculados da seção 1) */}
      {loading ? (
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <p>Carregando produtos...</p>
        </div>
      ) : (
        <ProductCarousel 
          title={nomeSecao1} 
          produtos={produtosSecao1}
        />
      )}

      <BrandsCarousel marcas={marcas}/>

      <BannerPromo>
        <BannerImg>
          <img src={OutroNivelImersao} alt="Outro Nível de Imersão" />
        </BannerImg>
        <BannerBuy href="/detalhe/11">Compre Agora</BannerBuy>
      </BannerPromo>

      <Ideapad>
        <IdeaImg>
          <img src={Ideapad1} alt="" />
        </IdeaImg>

        <IdeapadText>
          <Title>IDEAPAD 1I</Title>
          <SubTitle>O companheiro do dia a dia</SubTitle>
          <Descrip>
            O Ideapad 1i foi projetado para aumentar a produtividade e maximizar o prazer durante todo o dia. Apresentando um eficiente processador MediaTek Kompanio 520 e até 15 horas de duração da bateria, garante que você se mantenha produtivo e entretido ao longo do dia.
          </Descrip>
          <IdeaButton onClick={()=>navigate('/detalhe/10')}>Compre Agora</IdeaButton>
        </IdeapadText>
      </Ideapad>

      {/* Seção 2 - Até 50% de desconto (produtos vinculados da seção 2) */}
      {!loading && (
        <ProductCarousel 
          title={nomeSecao2} 
          produtos={produtosSecao2}
        />
      )}

      <EmailSignUp />
    </>
  );
};

export default HomePage;