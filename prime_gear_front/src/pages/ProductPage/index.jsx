import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ShoppingCart, Heart, Share2, Truck, Shield, CreditCard } from 'lucide-react';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [produto, setProduto] = useState(null);
  const [categoria, setCategoria] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantidade, setQuantidade] = useState(1);
  const [imagemPrincipal, setImagemPrincipal] = useState('');

  useEffect(() => {
    buscarProduto();
  }, [id]);

  const buscarProduto = async () => {
    try {
      setLoading(true);
      
     
      const responseProduto = await axios.get(`http://localhost:8080/produto/${id}`);
      const produtoData = responseProduto.data;
      setProduto(produtoData);
      setImagemPrincipal(produtoData.url_img_prod);

    
      if (produtoData.cod_categoria) {
        try {
          const responseCategoria = await axios.get(`http://localhost:8080/categoria/${produtoData.cod_categoria}`);
          setCategoria(responseCategoria.data);
        } catch (error) {
          console.log('Erro ao buscar categoria:', error);
        }
      }
    } catch (error) {
      console.error('Erro ao buscar produto:', error);
  
      setTimeout(() => navigate('/loja'), 2000);
    } finally {
      setLoading(false);
    }
  };

  const handleQuantidadeChange = (operacao) => {
    if (operacao === 'incrementar' && quantidade < produto.qtd_estoque_prod) {
      setQuantidade(quantidade + 1);
    } else if (operacao === 'decrementar' && quantidade > 1) {
      setQuantidade(quantidade - 1);
    }
  };

  const adicionarAoCarrinho = () => {
   
    console.log('Adicionar ao carrinho:', { produto, quantidade });
    alert(`${quantidade}x ${produto.nome_prod} adicionado ao carrinho!`);
  };

  const formatarPreco = (valor) => {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  };

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh',
        backgroundColor: '#f5f5f5'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '50px',
            height: '50px',
            border: '4px solid #f3f3f3',
            borderTop: '4px solid #000',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 20px'
          }} />
          <p style={{ fontSize: '16px', color: '#666' }}>Carregando produto...</p>
        </div>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  if (!produto) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        padding: '20px'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '16px', color: '#333' }}>
            Produto não encontrado
          </h2>
          <p style={{ fontSize: '16px', color: '#666', marginBottom: '24px' }}>
            Redirecionando para a loja...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '120px 20px 60px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Breadcrumb */}
        <div style={{ marginBottom: '24px', fontSize: '14px', color: '#666' }}>
          <span 
            onClick={() => navigate('/')} 
            style={{ cursor: 'pointer', textDecoration: 'none' }}
          >
            Home
          </span>
          <span style={{ margin: '0 8px' }}>/</span>
          <span 
            onClick={() => navigate('/loja')} 
            style={{ cursor: 'pointer', textDecoration: 'none' }}
          >
            Loja
          </span>
          {categoria && (
            <>
              <span style={{ margin: '0 8px' }}>/</span>
              <span>{categoria.nome_cat}</span>
            </>
          )}
          <span style={{ margin: '0 8px' }}>/</span>
          <span style={{ color: '#000', fontWeight: '500' }}>{produto.nome_prod}</span>
        </div>

        {/* Container Principal */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '60px',
          backgroundColor: '#fff',
          borderRadius: '12px',
          padding: '40px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          marginBottom: '40px'
        }}>
          
          {/* Coluna Esquerda - Imagens */}
          <div>
            <div style={{
              width: '100%',
              height: '500px',
              backgroundColor: '#f9f9f9',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px',
              overflow: 'hidden'
            }}>
              <img 
                src={imagemPrincipal || '/placeholder.png'}
                alt={produto.nome_prod}
                style={{ 
                  maxWidth: '100%', 
                  maxHeight: '100%', 
                  objectFit: 'contain'
                }}
                onError={(e) => {
                  e.target.src = '/placeholder.png';
                }}
              />
            </div>
          </div>

          {/* Coluna Direita - Informações */}
          <div>
            {/* Categoria */}
            {categoria && (
              <div style={{ 
                display: 'inline-block',
                padding: '6px 16px',
                backgroundColor: '#f0f0f0',
                borderRadius: '20px',
                fontSize: '13px',
                fontWeight: '500',
                color: '#666',
                marginBottom: '16px'
              }}>
                {categoria.nome_cat}
              </div>
            )}

            {/* Título */}
            <h1 style={{ 
              fontSize: '32px', 
              fontWeight: '700', 
              color: '#1b1b1f',
              marginBottom: '16px',
              lineHeight: '1.3'
            }}>
              {produto.nome_prod}
            </h1>

            {/* Status de Estoque */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px',
              marginBottom: '24px'
            }}>
              <div style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: produto.qtd_estoque_prod > 0 ? '#00a85a' : '#e4005c'
              }} />
              <span style={{ 
                fontSize: '14px', 
                fontWeight: '500',
                color: produto.qtd_estoque_prod > 0 ? '#00a85a' : '#e4005c'
              }}>
                {produto.qtd_estoque_prod > 0 
                  ? `Em estoque (${produto.qtd_estoque_prod} disponíveis)` 
                  : 'Esgotado'}
              </span>
            </div>

            {/* Preço */}
            <div style={{ 
              padding: '24px 0',
              borderTop: '1px solid #e5e5e5',
              borderBottom: '1px solid #e5e5e5',
              marginBottom: '32px'
            }}>
              <div style={{ 
                fontSize: '40px', 
                fontWeight: '700', 
                color: '#e4005c',
                marginBottom: '8px'
              }}>
                {formatarPreco(produto.preco_prod)}
              </div>
              <p style={{ fontSize: '14px', color: '#666' }}>
                ou 10x de {formatarPreco(produto.preco_prod / 10)} sem juros
              </p>
            </div>

            {/* Quantidade */}
            {produto.qtd_estoque_prod > 0 && (
              <div style={{ marginBottom: '24px' }}>
                <label style={{ 
                  display: 'block', 
                  fontSize: '14px', 
                  fontWeight: '600',
                  marginBottom: '12px',
                  color: '#333'
                }}>
                  Quantidade:
                </label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <button
                    onClick={() => handleQuantidadeChange('decrementar')}
                    disabled={quantidade <= 1}
                    style={{
                      width: '44px',
                      height: '44px',
                      border: '1px solid #ddd',
                      borderRadius: '8px',
                      backgroundColor: '#fff',
                      fontSize: '20px',
                      fontWeight: '600',
                      cursor: quantidade <= 1 ? 'not-allowed' : 'pointer',
                      opacity: quantidade <= 1 ? 0.5 : 1
                    }}
                  >
                    −
                  </button>
                  <span style={{ 
                    fontSize: '18px', 
                    fontWeight: '600',
                    minWidth: '40px',
                    textAlign: 'center'
                  }}>
                    {quantidade}
                  </span>
                  <button
                    onClick={() => handleQuantidadeChange('incrementar')}
                    disabled={quantidade >= produto.qtd_estoque_prod}
                    style={{
                      width: '44px',
                      height: '44px',
                      border: '1px solid #ddd',
                      borderRadius: '8px',
                      backgroundColor: '#fff',
                      fontSize: '20px',
                      fontWeight: '600',
                      cursor: quantidade >= produto.qtd_estoque_prod ? 'not-allowed' : 'pointer',
                      opacity: quantidade >= produto.qtd_estoque_prod ? 0.5 : 1
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            )}

            {/* Botões de Ação */}
            <div style={{ display: 'flex', gap: '12px', marginBottom: '32px' }}>
              <button
                onClick={adicionarAoCarrinho}
                disabled={produto.qtd_estoque_prod === 0}
                style={{
                  flex: 1,
                  height: '56px',
                  backgroundColor: produto.qtd_estoque_prod === 0 ? '#ccc' : '#000',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: produto.qtd_estoque_prod === 0 ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  if (produto.qtd_estoque_prod > 0) {
                    e.currentTarget.style.backgroundColor = '#333';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = produto.qtd_estoque_prod === 0 ? '#ccc' : '#000';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <ShoppingCart size={20} />
                {produto.qtd_estoque_prod === 0 ? 'Indisponível' : 'Adicionar ao Carrinho'}
              </button>
              
              <button style={{
                width: '56px',
                height: '56px',
                backgroundColor: '#fff',
                border: '1px solid #ddd',
                borderRadius: '12px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s'
              }}>
                <Heart size={20} />
              </button>
            </div>

            {/* Benefícios */}
            <div style={{ 
              display: 'grid', 
              gap: '16px',
              padding: '24px',
              backgroundColor: '#f9f9f9',
              borderRadius: '12px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Truck size={24} color="#00a85a" />
                <div>
                  <div style={{ fontWeight: '600', fontSize: '14px' }}>Frete Grátis</div>
                  <div style={{ fontSize: '13px', color: '#666' }}>Para compras acima de R$ 199</div>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Shield size={24} color="#00a85a" />
                <div>
                  <div style={{ fontWeight: '600', fontSize: '14px' }}>Garantia de 1 ano</div>
                  <div style={{ fontSize: '13px', color: '#666' }}>Produto com garantia do fabricante</div>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <CreditCard size={24} color="#00a85a" />
                <div>
                  <div style={{ fontWeight: '600', fontSize: '14px' }}>Parcele em até 10x</div>
                  <div style={{ fontSize: '13px', color: '#666' }}>Sem juros no cartão de crédito</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Descrição do Produto */}
        {produto.descricao_prod && (
          <div style={{
            backgroundColor: '#fff',
            borderRadius: '12px',
            padding: '40px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            marginBottom: '40px'
          }}>
            <h2 style={{ 
              fontSize: '24px', 
              fontWeight: '700',
              marginBottom: '20px',
              color: '#1b1b1f'
            }}>
              Descrição do Produto
            </h2>
            <p style={{ 
              fontSize: '15px', 
              lineHeight: '1.8',
              color: '#666',
              whiteSpace: 'pre-line'
            }}>
              {produto.descricao_prod}
            </p>
          </div>
        )}

        {/* Especificações Técnicas */}
        <div style={{
          backgroundColor: '#fff',
          borderRadius: '12px',
          padding: '40px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: '700',
            marginBottom: '24px',
            color: '#1b1b1f'
          }}>
            Especificações Técnicas
          </h2>
          
          <div style={{ display: 'grid', gap: '16px' }}>
            {produto.peso_prod && (
              <div style={{ 
                display: 'flex', 
                padding: '16px 0',
                borderBottom: '1px solid #f0f0f0'
              }}>
                <span style={{ fontWeight: '600', minWidth: '200px', color: '#333' }}>
                  Peso
                </span>
                <span style={{ color: '#666' }}>{produto.peso_prod} kg</span>
              </div>
            )}
            
            {produto.altura_prod && (
              <div style={{ 
                display: 'flex', 
                padding: '16px 0',
                borderBottom: '1px solid #f0f0f0'
              }}>
                <span style={{ fontWeight: '600', minWidth: '200px', color: '#333' }}>
                  Altura
                </span>
                <span style={{ color: '#666' }}>{produto.altura_prod} cm</span>
              </div>
            )}
            
            {produto.largura_prod && (
              <div style={{ 
                display: 'flex', 
                padding: '16px 0',
                borderBottom: '1px solid #f0f0f0'
              }}>
                <span style={{ fontWeight: '600', minWidth: '200px', color: '#333' }}>
                  Largura
                </span>
                <span style={{ color: '#666' }}>{produto.largura_prod} cm</span>
              </div>
            )}
            
            {produto.comprimento_prod && (
              <div style={{ 
                display: 'flex', 
                padding: '16px 0',
                borderBottom: '1px solid #f0f0f0'
              }}>
                <span style={{ fontWeight: '600', minWidth: '200px', color: '#333' }}>
                  Comprimento
                </span>
                <span style={{ color: '#666' }}>{produto.comprimento_prod} cm</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;