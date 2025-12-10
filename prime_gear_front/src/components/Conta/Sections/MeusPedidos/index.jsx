import { useState, useEffect } from "react"
import axios from "axios"

const getStatusConfig = (status) => {
  const configs = {
    "Entregue": {
      bg: "#d1fae5",
      color: "#065f46",
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      )
    },
    "Em Transporte": {
      bg: "#dbeafe",
      color: "#1e40af",
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="1" y="3" width="15" height="13" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      )
    },
    "Processando": {
      bg: "#fef3c7",
      color: "#92400e",
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      )
    },
    "Aguardando Pagamento": {
      bg: "#fee2e2",
      color: "#991b1b",
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      )
    },
    "Cancelado": {
      bg: "#f3f4f6",
      color: "#4b5563",
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="15" y1="9" x2="9" y2="15" />
          <line x1="9" y1="9" x2="15" y2="15" />
        </svg>
      )
    }
  }
  return configs[status] || {
    bg: "#f3f4f6",
    color: "#4b5563",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
      </svg>
    )
  }
}

const formatarData = (data) => {
  return new Date(data).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  })
}

const formatarPreco = (preco) => {
  return preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  })
}

const PedidoItem = ({ pedido, onExpand }) => {
  const [expandido, setExpandido] = useState(false)
  const [detalhes, setDetalhes] = useState(null)
  const [carregando, setCarregando] = useState(false)
  const statusConfig = getStatusConfig(pedido.status_pedido)

  const handleExpand = async () => {
    if (!expandido && !detalhes) {
      setCarregando(true)
      try {
        // Buscar detalhes completos do pedido
        const response = await axios.get(`http://primegear.site:8080/get-order/${pedido.cod_pedido}`, {
          withCredentials:true
        })
        
     
     
          if (response.data.success) {
            setDetalhes(response.data.pedido)
          }
      
      } catch (error) {
        console.error('Erro ao carregar detalhes:', error)
      } finally {
        setCarregando(false)
      }
    }
    setExpandido(!expandido)
  }

  const pedidoCompleto = detalhes || pedido
  const carrinho = pedidoCompleto.Carrinho || {}
  const itens = carrinho.ItemCarrinhos || []
  const subtotal = pedidoCompleto.total_pedido - pedidoCompleto.frete_pedido

  return (
    <div style={{
      border: "1px solid #e5e7eb",
      borderRadius: "0.5rem",
      marginBottom: "1rem",
      overflow: "hidden",
      transition: "box-shadow 0.2s ease"
    }}>
      <div 
        onClick={handleExpand}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 1.25rem",
          backgroundColor: "#f9fafb",
          cursor: "pointer",
          userSelect: "none"
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
          <div style={{ fontSize: "0.875rem", fontWeight: "600", color: "black" }}>
            Pedido #{pedidoCompleto.cod_pedido}
          </div>
          <div style={{ fontSize: "0.75rem", color: "#6b7280" }}>
            {formatarData(pedidoCompleto.data_pedido)}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.375rem 0.75rem",
            borderRadius: "9999px",
            fontSize: "0.75rem",
            fontWeight: "500",
            backgroundColor: statusConfig.bg,
            color: statusConfig.color
          }}>
            {statusConfig.icon}
            {pedidoCompleto.status_pedido}
          </div>
          <div style={{ display: "flex", alignItems: "center", color: "#6b7280" }}>
            {carregando ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" opacity="0.25" />
                <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round">
                  <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="1s" repeatCount="indefinite" />
                </path>
              </svg>
            ) : expandido ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="18 15 12 9 6 15" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            )}
          </div>
        </div>
      </div>

      {expandido && detalhes && (
        <div style={{ padding: "1.25rem", borderTop: "1px solid #e5e7eb" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.5rem",
            marginBottom: "1.5rem"
          }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
              <div style={{ fontSize: "0.75rem", color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Endereço de Entrega
              </div>
              <div style={{ fontSize: "0.875rem", color: "black", fontWeight: "500" }}>
                {pedidoCompleto.endereco_entrega_pedido || "Não informado"}
              </div>
            </div>
            {pedidoCompleto.peso_pedido && (
              <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                <div style={{ fontSize: "0.75rem", color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  Peso Total
                </div>
                <div style={{ fontSize: "0.875rem", color: "black", fontWeight: "500" }}>
                  {pedidoCompleto.peso_pedido} kg
                </div>
              </div>
            )}
            {pedidoCompleto.tamanho_caixa_pedido && (
              <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                <div style={{ fontSize: "0.75rem", color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  Tamanho da Caixa
                </div>
                <div style={{ fontSize: "0.875rem", color: "black", fontWeight: "500" }}>
                  {pedidoCompleto.tamanho_caixa_pedido} cm
                </div>
              </div>
            )}
          </div>

          {itens.length > 0 && (
            <>
              <div style={{ fontSize: "0.875rem", fontWeight: "600", color: "black", marginBottom: "0.75rem" }}>
                Itens do Pedido
              </div>
              {itens.map((item) => (
                <div 
                  key={item.cod_itemcar}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "0.75rem",
                    backgroundColor: "#f9fafb",
                    borderRadius: "0.375rem",
                    marginBottom: "0.5rem"
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                    <div style={{ fontSize: "0.875rem", color: "black", fontWeight: "500" }}>
                      {item.Produto?.nome_produto || "Produto"}
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "#6b7280" }}>
                      Quantidade: {item.qtd_produto_itemcar}
                    </div>
                  </div>
                  <div style={{ fontSize: "0.875rem", color: "black", fontWeight: "600" }}>
                    {formatarPreco(item.preco_unitario_itemcar * item.qtd_produto_itemcar)}
                  </div>
                </div>
              ))}
            </>
          )}

          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            marginTop: "1rem",
            paddingTop: "1rem",
            borderTop: "1px solid #e5e7eb"
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.875rem", color: "black" }}>
              <span>Subtotal</span>
              <span>{formatarPreco(subtotal)}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.875rem", color: "black" }}>
              <span>Frete</span>
              <span>{pedidoCompleto.frete_pedido === 0 ? "Grátis" : formatarPreco(pedidoCompleto.frete_pedido)}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "1rem", fontWeight: "600", color: "black" }}>
              <span>Total</span>
              <span>{formatarPreco(pedidoCompleto.total_pedido)}</span>
            </div>
          </div>
        </div>
      )}

      {expandido && !detalhes && !carregando && (
        <div style={{ padding: "2rem", textAlign: "center", color: "#6b7280" }}>
          Não foi possível carregar os detalhes do pedido
        </div>
      )}
    </div>
  )
}

const MeusPedidos = () => {
  const [pedidos, setPedidos] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState(null)

  useEffect(() => {
    carregarPedidos()
  }, [])

  const carregarPedidos = async () => {
    try {
      setCarregando(true)
      
      const response = await axios.get('http://primegear.site:8080/get-orders', {
        withCredentials:true
      })

      if (response.data.success) {
 
          setPedidos(response.data.pedidos)
        
      } else if (response.status === 404) {
       
        setPedidos([])
      }
    } catch (error) {
      console.error('Erro ao carregar pedidos:', error)
      setErro('Não foi possível carregar os pedidos')
      
     
      setPedidos([
        {
          cod_pedido: 1001,
          data_pedido: "2024-12-01T10:30:00",
          status_pedido: "Entregue",
          total_pedido: 459.90,
          frete_pedido: 15.00,
          endereco_entrega_pedido: "Rua das Flores, 123 - Uberlândia/MG"
        },
        {
          cod_pedido: 1002,
          data_pedido: "2024-12-03T14:15:00",
          status_pedido: "Em Transporte",
          total_pedido: 189.90,
          frete_pedido: 12.00,
          endereco_entrega_pedido: "Av. João Naves, 456 - Uberlândia/MG"
        },
        {
          cod_pedido: 1003,
          data_pedido: "2024-12-05T09:00:00",
          status_pedido: "Processando",
          total_pedido: 899.90,
          frete_pedido: 0.00,
          endereco_entrega_pedido: "Rua Coronel Antônio Alves, 789 - Uberlândia/MG"
        }
      ])
    } finally {
      setCarregando(false)
    }
  }

  const hasPedidos = pedidos.length > 0

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
        <p style={{ marginTop: "1rem", color: "#6b7280" }}>Carregando pedidos...</p>
      </div>
    )
  }

  return (
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
          Histórico de Pedidos
        </h2>
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

        {hasPedidos ? (
          <div>
            {pedidos.map((pedido) => (
              <PedidoItem key={pedido.cod_pedido} pedido={pedido} />
            ))}
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
                <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
            </div>
            <h3 style={{ fontSize: "1.125rem", fontWeight: "600", color: "black", margin: "0 0 0.5rem 0", textAlign: "center" }}>
              Você ainda não fez nenhum pedido
            </h3>
            <p style={{ fontSize: "0.875rem", color: "#6b7280", margin: "0 0 1.5rem 0", textAlign: "center" }}>
              Explore nossos produtos e faça sua primeira compra!
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
                transition: "background-color 0.2s ease"
              }}
            >
              Começar a Comprar
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default MeusPedidos