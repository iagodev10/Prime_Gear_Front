"use client"

import { useState, useEffect } from "react"
import { FiX, FiSearch, FiFilter, FiStar, FiSave, FiPackage } from "react-icons/fi"
import {
  Overlay,
  Modal,
  ModalHeader,
  CloseButton,
  ModalTitle,
  ModalSubtitle,
  ModalBody,
  Sidebar,
  SidebarTitle,
  SelectedCount,
  SelectedList,
  SelectedItem,
  SelectedImage,
  SelectedInfo,
  SelectedName,
  SelectedPrice,
  MainArea,
  FiltersRow,
  FilterGroup,
  FilterLabel,
  SearchInput,
  SelectInput,
  ProductCount,
  ProductsGrid,
  ProductCard,
  ProductCardImage,
  ModalFooter,
  SaveSelectionButton,
  CancelButton,
} from "./style"

const ModalSelecionarProdutos = ({ produtos, sectionId, currentSelected, onClose, onSelect }) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("")
  const [selected, setSelected] = useState(currentSelected || [])

  // Atualiza selected quando currentSelected mudar
  useEffect(() => {
    setSelected(currentSelected || [])
  }, [currentSelected])

  // Mock de produtos caso não venha da API
  const mockProdutos = [
    { id: 1, name: "PlayStation 5 Console", categoria: "Consoles", price: 4499.9, image: "/playstation-5-console-white.jpg" },
    { id: 2, name: "PC Gamer RGB RTX 4070", categoria: "Desktops", price: 8990.0, image: "/gaming-pc-rgb-blue-lights.jpg" },
    { id: 3, name: 'iMac Apple 24" M3', categoria: "Desktops", price: 12990.0, image: "/imac-apple-silver.jpg" },
    {
      id: 4,
      name: "Teclado Mecânico RGB Gamer",
      categoria: "Periféricos",
      price: 449.9,
      image: "/mechanical-gaming-keyboard-rgb-colorful.jpg",
    },
    {
      id: 5,
      name: "Headset Gamer HyperX Cloud II",
      categoria: "Periféricos",
      price: 449.9,
      image: "/gaming-headset-black-red.jpg",
    },
    {
      id: 6,
      name: 'Monitor Gamer LG UltraGear 27"',
      categoria: "Monitores",
      price: 1299.0,
      image: "/gaming-monitor-lg-curved.jpg",
    },
    {
      id: 7,
      name: "Mouse Gamer Logitech G Pro",
      categoria: "Periféricos",
      price: 399.9,
      image: "/gaming-mouse-black-wireless.jpg",
    },
    {
      id: 8,
      name: "Notebook Gamer ASUS ROG",
      categoria: "Laptops",
      price: 7999.0,
      image: "/asus-rog-gaming-laptop.jpg",
    },
  ]

  const allProducts =
    produtos.length > 0
      ? produtos.map((p) => ({
          id: p.id_prod || p.cod_produto,
          name: p.nome_prod,
          categoria: p.categoria,
          price: p.preco_prod,
          image: p.url_img_prod,
        }))
      : mockProdutos

  const categories = [...new Set(allProducts.map((p) => p.categoria))].sort()

  const filteredProducts = allProducts.filter((product) => {
    const matchSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchCategory = !categoryFilter || product.categoria === categoryFilter
    return matchSearch && matchCategory
  })

  const toggleProduct = (product) => {
    const isSelected = selected.some((p) => p.id === product.id)
    if (isSelected) {
      setSelected(selected.filter((p) => p.id !== product.id))
    } else {
      setSelected([...selected, product])
    }
  }

  const isProductSelected = (productId) => {
    return selected.some((p) => p.id === productId)
  }

  const handleSave = () => {
    onSelect(selected)
    onClose()
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  // Limpar filtros
  const clearFilters = () => {
    setSearchTerm("")
    setCategoryFilter("")
  }

  return (
    <Overlay onClick={handleOverlayClick}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <div>
            <ModalTitle>Selecionar Produtos - Seção {sectionId}</ModalTitle>
            <ModalSubtitle>
              Clique nos produtos para adicionar ou remover da seleção
            </ModalSubtitle>
          </div>
          <CloseButton onClick={onClose} aria-label="Fechar modal">
            <FiX size={24} />
          </CloseButton>
        </ModalHeader>

        <ModalBody>
          <Sidebar>
            <SidebarTitle>
              <FiStar size={18} />
              Produtos Selecionados
            </SidebarTitle>
            <SelectedCount>{selected.length} selecionado{selected.length !== 1 ? 's' : ''}</SelectedCount>

            {selected.length === 0 ? (
              <div style={{ 
                textAlign: 'center', 
                padding: '40px 20px',
                color: '#9ca3af' 
              }}>
                <FiPackage size={40} style={{ marginBottom: '12px' }} />
                <p style={{ fontSize: '0.9rem', margin: 0 }}>
                  Nenhum produto selecionado
                </p>
              </div>
            ) : (
              <SelectedList>
                {selected.map((product) => (
                  <SelectedItem key={product.id}>
                    <SelectedImage>
                      <img 
                        src={product.image || "/placeholder.svg"} 
                        alt={product.name}
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/55x55?text=Sem+Imagem'
                        }}
                      />
                    </SelectedImage>
                    <SelectedInfo>
                      <SelectedName title={product.name}>
                        {product.name}
                      </SelectedName>
                      <SelectedPrice>
                        R$ {product.price.toLocaleString("pt-BR", { 
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2 
                        })}
                      </SelectedPrice>
                    </SelectedInfo>
                  </SelectedItem>
                ))}
              </SelectedList>
            )}
          </Sidebar>

          <MainArea>
            <FiltersRow>
              <FilterGroup>
                <FilterLabel>
                  <FiSearch size={16} />
                  Buscar Produto
                </FilterLabel>
                <SearchInput
                  type="text"
                  placeholder="Digite o nome do produto..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </FilterGroup>
              
              <FilterGroup>
                <FilterLabel>
                  <FiFilter size={16} />
                  Filtrar por Categoria
                </FilterLabel>
                <SelectInput 
                  value={categoryFilter} 
                  onChange={(e) => setCategoryFilter(e.target.value)}
                >
                  <option value="">Todas as Categorias</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </SelectInput>
              </FilterGroup>
            </FiltersRow>

            {(searchTerm || categoryFilter) && (
              <div style={{ marginBottom: '12px' }}>
                <button
                  onClick={clearFilters}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#3b82f6',
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    textDecoration: 'underline'
                  }}
                >
                  Limpar filtros
                </button>
              </div>
            )}

            <ProductCount>
              <span>{filteredProducts.length}</span> produto{filteredProducts.length !== 1 ? 's' : ''} disponíve{filteredProducts.length !== 1 ? 'is' : 'l'}
            </ProductCount>

            {filteredProducts.length === 0 ? (
              <div style={{ 
                textAlign: 'center', 
                padding: '60px 20px',
                color: '#9ca3af',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <FiPackage size={48} style={{ marginBottom: '16px', opacity: 0.5 }} />
                <p style={{ fontSize: '1.1rem', fontWeight: 600, margin: '0 0 8px' }}>
                  Nenhum produto encontrado
                </p>
                <p style={{ fontSize: '0.9rem', margin: 0 }}>
                  Tente ajustar os filtros de busca
                </p>
              </div>
            ) : (
              <ProductsGrid>
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    $selected={isProductSelected(product.id)}
                    onClick={() => toggleProduct(product)}
                    title={`${product.name} - R$ ${product.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`}
                  >
                    <ProductCardImage>
                      <img 
                        src={product.image || "/placeholder.svg"} 
                        alt={product.name}
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/180x180?text=Sem+Imagem'
                        }}
                      />
                    </ProductCardImage>
                  </ProductCard>
                ))}
              </ProductsGrid>
            )}
          </MainArea>
        </ModalBody>

        <ModalFooter>
          <SaveSelectionButton 
            onClick={handleSave}
            disabled={selected.length === 0}
          >
            <FiSave size={18} />
            Salvar Seleção ({selected.length} produto{selected.length !== 1 ? 's' : ''})
          </SaveSelectionButton>
          <CancelButton onClick={onClose}>
            Cancelar
          </CancelButton>
        </ModalFooter>
      </Modal>
    </Overlay>
  )
}

export default ModalSelecionarProdutos