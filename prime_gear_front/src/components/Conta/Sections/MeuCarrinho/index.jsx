import { useState, useEffect } from "react"
import axios from 'axios'
import {useAuth} from '../../../../contexts/AuthContext'

const formatarPreco = (preco) => {
  return preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  })
}

const ModalConfirmarRemocao = ({ isOpen, onConfirm, onCancel, itemNome }) => {
  if (!isOpen) return null

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
      padding: "1rem"
    }}>
      <div style={{
        backgroundColor: "white",
        borderRadius: "0.75rem",
        padding: "1.5rem",
        maxWidth: "400px",
        width: "100%",
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "1rem"
        }}>
         
          
          <div style={{ flex: 1 }}>
            <h3 style={{
              fontSize: "1.125rem",
              fontWeight: "600",
              color: "#111827",
              margin: "0 0 0.25rem 0"
            }}>
              Remover item?
            </h3>
            <p style={{
              fontSize: "0.875rem",
              color: "#6b7280",
              margin: 0
            }}>
              Esta ação não pode ser desfeita
            </p>
          </div>
        </div>

        <p style={{
          fontSize: "0.875rem",
          color: "#374151",
          margin: "0 0 1.5rem 0",
          lineHeight: "1.5"
        }}>
          Tem certeza que deseja remover <strong>{itemNome}</strong> do seu carrinho?
        </p>

        <div style={{
          display: "flex",
          gap: "0.75rem",
          justifyContent: "flex-end"
        }}>
          <button
            onClick={onCancel}
            style={{
              padding: "0.625rem 1.25rem",
              backgroundColor: "white",
              color: "#374151",
              border: "1px solid #d1d5db",
              borderRadius: "0.5rem",
              fontSize: "0.875rem",
              fontWeight: "500",
              cursor: "pointer",
              transition: "all 0.2s"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#f9fafb"
              e.currentTarget.style.borderColor = "#9ca3af"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "white"
              e.currentTarget.style.borderColor = "#d1d5db"
            }}
          >
            Cancelar
          </button>
          
          <button
            onClick={onConfirm}
            style={{
              padding: "0.625rem 1.25rem",
              backgroundColor: "#ef4444",
              color: "white",
              border: "none",
              borderRadius: "0.5rem",
              fontSize: "0.875rem",
              fontWeight: "500",
              cursor: "pointer",
              transition: "background-color 0.2s"
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#dc2626"}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#ef4444"}
          >
            Sim, remover
          </button>
        </div>
      </div>
    </div>
  )
}

const ItemCarrinho = ({ item, onUpdateQuantity, onRemove }) => {
  const [quantidade, setQuantidade] = useState(item.quantidade)
  const [atualizando, setAtualizando] = useState(false)

  const handleQuantidadeChange = async (novaQuantidade) => {
    if (novaQuantidade < 1) return
    
    setAtualizando(true)
    setQuantidade(novaQuantidade)
    
    try {
      await onUpdateQuantity(item.id, novaQuantidade)
    } catch (error) {
      setQuantidade(item.quantidade)
    } finally {
      setAtualizando(false)
    }
  }

  const subtotal = item.preco_unitario * quantidade

  return (
    <div style={{
      display: "flex",
      gap: "1rem",
      padding: "1rem",
      backgroundColor: "#f9fafb",
      borderRadius: "0.5rem",
      marginBottom: "1rem",
      opacity: atualizando ? 0.6 : 1,
      transition: "opacity 0.2s"
    }}>
      <div style={{
        width: "100px",
        height: "100px",
        backgroundColor: "#e5e7eb",
        borderRadius: "0.5rem",
        overflow: "hidden",
        flexShrink: 0
      }}>
        {item.imagem ? (
          <img 
            src={item.imagem} 
            alt={item.nome}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }}
          />
        ) : (
          <div style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#9ca3af"
          }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
          </div>
        )}
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div>
          <h3 style={{ 
            fontSize: "1rem", 
            fontWeight: "600", 
            color: "black", 
            margin: "0 0 0.25rem 0" 
          }}>
            {item.nome || "Produto"}
          </h3>
          <p style={{ 
            fontSize: "0.875rem", 
            color: "#6b7280", 
            margin: 0,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden"
          }}>
            {item.descricao || "Sem descrição"}
          </p>
        </div>

        <div style={{ 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "space-between",
          marginTop: "auto"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <button
              onClick={() => handleQuantidadeChange(quantidade - 1)}
              disabled={quantidade <= 1 || atualizando}
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "0.375rem",
                border: "1px solid #d1d5db",
                backgroundColor: "white",
                cursor: quantidade <= 1 ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: quantidade <= 1 ? 0.5 : 1
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
            
            <span style={{ 
              fontSize: "0.875rem", 
              fontWeight: "500",
              minWidth: "30px",
              textAlign: "center"
            }}>
              {quantidade}
            </span>
            
            <button
              onClick={() => handleQuantidadeChange(quantidade + 1)}
              disabled={atualizando}
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "0.375rem",
                border: "1px solid #d1d5db",
                backgroundColor: "white",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.25rem" }}>
            <span style={{ fontSize: "0.75rem", color: "#6b7280" }}>
              {formatarPreco(item.preco_unitario)} cada
            </span>
            <span style={{ fontSize: "1rem", fontWeight: "600", color: "black" }}>
              {formatarPreco(subtotal)}
            </span>
          </div>
        </div>
      </div>

      <button
        onClick={() => onRemove(item)}
        disabled={atualizando}
        style={{
          alignSelf: "flex-start",
          padding: "0.5rem",
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
          color: "#ef4444",
          borderRadius: "0.375rem",
          transition: "background-color 0.2s"
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#fee2e2"}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="3 6 5 6 21 6" />
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          <line x1="10" y1="11" x2="10" y2="17" />
          <line x1="14" y1="11" x2="14" y2="17" />
        </svg>
      </button>
    </div>
  )
}

const MeuCarrinho = () => {
  const {user}=useAuth()
  const [carrinho, setCarrinho] = useState(null)
  const [itens, setItens] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState(null)
  const [modalAberto, setModalAberto] = useState(false)
  const [itemParaRemover, setItemParaRemover] = useState(null)

  useEffect(() => {
    carregarCarrinho()
  }, [])

  const carregarCarrinho = async () => {
    try {
      setCarregando(true)
      const response = await axios.get('http://72.62.10.218:8080/get-produtos-cart/'+user.cod_user, {
        withCredentials:true
      })

      if (response.status==200) {
          setCarrinho(response.data)
          setItens(response.data || [])
          setErro(null)
      } else{
        setCarrinho(null)
        setItens([])
      }
    } catch (error) {
      console.error('Erro ao carregar carrinho:', error)
      setErro('Não foi possível carregar o carrinho')
    } finally {
      setCarregando(false)
    }
  }

  const atualizarQuantidade = async (codItemCar, novaQuantidade) => {
    try {
      const response = await axios.put(
        `http://72.62.10.218:8080/update-cart-item/${codItemCar}`,
        { qtd_produto_itemcar: novaQuantidade },
        { withCredentials: true }
      )
  
      setItens(itens.map(item => 
        item.id === codItemCar
          ? { ...item, quantidade: novaQuantidade }
          : item
      ))
    } catch (error) {
      console.error('Erro ao atualizar quantidade:', error)
      throw error
    }
  }

  const abrirModalRemocao = (item) => {
    setItemParaRemover(item)
    setModalAberto(true)
  }

  const confirmarRemocao = async () => {
    if (!itemParaRemover) return

    try {
      await axios.delete(
        `http://72.62.10.218:8080/remove-from-cart/${itemParaRemover.id}`,
        { withCredentials: true }
      )
  
      const novosItens = itens.filter(item => item.id !== itemParaRemover.id)
      setItens(novosItens)
      
      if (novosItens.length === 0) {
        carregarCarrinho()
      }

      setModalAberto(false)
      setItemParaRemover(null)
    } catch (error) {
      console.error('Erro ao remover item:', error)
      alert('Não foi possível remover o item')
      setModalAberto(false)
      setItemParaRemover(null)
    }
  }

  const cancelarRemocao = () => {
    setModalAberto(false)
    setItemParaRemover(null)
  }

  const calcularTotal = () => {
    return itens.reduce((total, item) => {
      return total + (item.preco_unitario * item.quantidade)
    }, 0)
  }

  const hasItems = itens.length > 0

  if (carregando) {
    return (
      <div style={{
        backgroundColor: "#ffffff",
        borderRadius: "0.75rem",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
        padding: "3rem",
        textAlign: "center"
      }}>
        <div style={{
          display: "inline-block",
          width: "48px",
          height: "48px",
          border: "4px solid #f3f4f6",
          borderTopColor: "#2563eb",
          borderRadius: "50%",
          animation: "spin 1s linear infinite"
        }} />
        <style>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
        <p style={{ marginTop: "1rem", color: "#6b7280" }}>Carregando carrinho...</p>
      </div>
    )
  }

  return (
    <>
      <ModalConfirmarRemocao 
        isOpen={modalAberto}
        onConfirm={confirmarRemocao}
        onCancel={cancelarRemocao}
        itemNome={itemParaRemover?.nome || "este item"}
      />

      <div style={{
        backgroundColor: "#ffffff",
        borderRadius: "0.75rem",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)"
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          padding: "1.5rem",
          borderBottom: "1px solid #f3f4f6"
        }}>
          <div style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: "#dbeafe",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#2563eb"
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
          </div>
          <h2 style={{ fontSize: "1.25rem", fontWeight: "600", color: "black", margin: 0 }}>
            Meu Carrinho
          </h2>
          {hasItems && (
            <span style={{
              marginLeft: "auto",
              padding: "0.25rem 0.75rem",
              backgroundColor: "#dbeafe",
              color: "#2563eb",
              borderRadius: "9999px",
              fontSize: "0.875rem",
              fontWeight: "600"
            }}>
              {itens.length} {itens.length === 1 ? 'item' : 'itens'}
            </span>
          )}
        </div>

        <div style={{ padding: "1.5rem" }}>
          {erro && (
            <div style={{
              padding: "1rem",
              backgroundColor: "#fee2e2",
              color: "#991b1b",
              borderRadius: "0.5rem",
              marginBottom: "1rem",
              fontSize: "0.875rem"
            }}>
              {erro}
            </div>
          )}

          {hasItems ? (
            <div>
              <div style={{ marginBottom: "1.5rem" }}>
                {itens.map((item) => (
                  <ItemCarrinho 
                    key={item.id} 
                    item={item}
                    onUpdateQuantity={atualizarQuantidade}
                    onRemove={abrirModalRemocao}
                  />
                ))}
              </div>

              <div style={{
                padding: "1.5rem",
                backgroundColor: "#f9fafb",
                borderRadius: "0.5rem",
                border: "1px solid #e5e7eb"
              }}>
                <h3 style={{ 
                  fontSize: "1rem", 
                  fontWeight: "600", 
                  color: "black", 
                  margin: "0 0 1rem 0" 
                }}>
                  Resumo do Pedido
                </h3>
                
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  <div style={{ 
                    display: "flex", 
                    justifyContent: "space-between",
                    fontSize: "0.875rem",
                    color: "#6b7280"
                  }}>
                    <span>Subtotal ({itens.length} {itens.length === 1 ? 'item' : 'itens'})</span>
                    <span style={{ color: "black", fontWeight: "500" }}>
                      {formatarPreco(calcularTotal())}
                    </span>
                  </div>
                  
                  <div style={{ 
                    borderTop: "1px solid #e5e7eb",
                    paddingTop: "0.75rem",
                    display: "flex", 
                    justifyContent: "space-between",
                    fontSize: "1.125rem",
                    fontWeight: "600"
                  }}>
                    <span>Total</span>
                    <span>{formatarPreco(calcularTotal())}</span>
                  </div>
                </div>

                <button
                  onClick={() => window.location.href = '/checkout'}
                  style={{
                    width: "100%",
                    marginTop: "1.5rem",
                    padding: "0.875rem",
                    backgroundColor: "black",
                    color: "white",
                    border: "none",
                    borderRadius: "0.5rem",
                    fontSize: "0.875rem",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "background-color 0.2s"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#1f2937"}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "black"}
                >
                  Finalizar Compra
                </button>

                <button
                  onClick={() => window.location.href = '/'}
                  style={{
                    width: "100%",
                    marginTop: "0.75rem",
                    padding: "0.875rem",
                    backgroundColor: "white",
                    color: "black",
                    border: "1px solid #e5e7eb",
                    borderRadius: "0.5rem",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    cursor: "pointer",
                    transition: "background-color 0.2s"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#f9fafb"}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "white"}
                >
                  Continuar Comprando
                </button>
              </div>
            </div>
          ) : (
            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "4rem 1rem"
            }}>
              <div style={{
                width: "96px",
                height: "96px",
                borderRadius: "50%",
                backgroundColor: "#f3f4f6",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "black",
                marginBottom: "1.5rem"
              }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
              </div>
              <h3 style={{ 
                fontSize: "1.125rem", 
                fontWeight: "600", 
                color: "black", 
                margin: "0 0 0.5rem 0", 
                textAlign: "center" 
              }}>
                Seu carrinho está vazio
              </h3>
              <p style={{ 
                fontSize: "0.875rem", 
                color: "#6b7280", 
                margin: "0 0 1.5rem 0", 
                textAlign: "center" 
              }}>
                Adicione produtos ao carrinho para continuar comprando
              </p>
              <button 
                onClick={() => window.location.href = '/'}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.75rem 1.5rem",
                  backgroundColor: "black",
                  color: "white",
                  border: "none",
                  borderRadius: "0.5rem",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  cursor: "pointer",
                  transition: "background-color 0.2s"
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
                Explorar Produtos
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default MeuCarrinho