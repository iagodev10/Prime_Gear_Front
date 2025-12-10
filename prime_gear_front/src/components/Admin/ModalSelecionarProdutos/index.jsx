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

const ModalSelecionarProdutos = ({ produtos, sectionId, categorias = [], currentSelected, onClose, onSelect }) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("")
  const [selected, setSelected] = useState(currentSelected || [])

  useEffect(() => {
    setSelected(currentSelected || [])
  }, [currentSelected])

  
  const mockProdutos = [
    { cod_produto: 1, nome_prod: "PlayStation 5", cod_categoria: 101, preco_prod: 4499.9, url_img_prod: "" },
    { cod_produto: 2, nome_prod: "PC Gamer", cod_categoria: 102, preco_prod: 8990.0, url_img_prod: "" },
  ]


  const listaParaRenderizar = produtos.length > 0 ? produtos : mockProdutos

  const allProducts = listaParaRenderizar.map((p) => ({

      id: p.cod_produto || p.id, 
      name: p.nome_prod || p.name,
      price: p.preco_prod || p.price || 0,
      image: p.url_img_prod || p.image,
      categoryId: p.cod_categoria || p.categoryId, 
  }))


  const filteredProducts = allProducts.filter((product) => {
 
    const matchSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    

    const matchCategory = !categoryFilter || String(product.categoryId) === String(categoryFilter)

    return matchSearch && matchCategory
  })


  const toggleProduct = (product) => {

    const isSelected = selected.some((p) => (p.cod_produto || p.id) === product.id)
    
    if (isSelected) {
      setSelected(selected.filter((p) => (p.cod_produto || p.id) !== product.id))
    } else {
    
      const originalFormat = produtos.find(p => p.cod_produto === product.id) || product
      setSelected([...selected, originalFormat])
    }
  }

  const isProductSelected = (productId) => {
    return selected.some((p) => (p.cod_produto || p.id) === productId)
  }

  const handleSave = () => {
    onSelect(selected)
    onClose()
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

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
              <div style={{ textAlign: 'center', padding: '40px 20px', color: '#9ca3af' }}>
                <FiPackage size={40} style={{ marginBottom: '12px' }} />
                <p style={{ fontSize: '0.9rem', margin: 0 }}>Nenhum produto selecionado</p>
              </div>
            ) : (
              <SelectedList>
                {selected.map((p) => {
             
                   const displayImg = p.url_img_prod || p.image || "/placeholder.svg"
                   const displayName = p.nome_prod || p.name
                   const displayPrice = p.preco_prod || p.price || 0
                   const displayId = p.cod_produto || p.id

                   return (
                    <SelectedItem key={displayId}>
                        <SelectedImage>
                        <img 
                            src={displayImg} 
                            alt={displayName}
                            onError={(e) => { e.target.src = 'https://via.placeholder.com/55x55?text=Sem+Imagem' }}
                        />
                        </SelectedImage>
                        <SelectedInfo>
                        <SelectedName title={displayName}>{displayName}</SelectedName>
                        <SelectedPrice>
                            R$ {displayPrice.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </SelectedPrice>
                        </SelectedInfo>
                    </SelectedItem>
                   )
                })}
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
                  
                  {/* Mapeamento baseado em TabelaCategoria (cod_categoria, nome_cat) */}
                  {categorias.map((cat) => (
                    <option key={cat.cod_categoria} value={cat.cod_categoria}>
                      {cat.nome_cat}
                    </option>
                  ))}
                </SelectInput>
              </FilterGroup>
            </FiltersRow>

            {(searchTerm || categoryFilter) && (
              <div style={{ marginBottom: '12px' }}>
                <button
                  onClick={clearFilters}
                  style={{ background: 'none', border: 'none', color: '#3b82f6', fontSize: '0.85rem', cursor: 'pointer', textDecoration: 'underline' }}
                >
                  Limpar filtros
                </button>
              </div>
            )}

            <ProductCount>
              <span>{filteredProducts.length}</span> produto{filteredProducts.length !== 1 ? 's' : ''} disponíve{filteredProducts.length !== 1 ? 'is' : 'l'}
            </ProductCount>

            {filteredProducts.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '60px 20px', color: '#9ca3af', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <FiPackage size={48} style={{ marginBottom: '16px', opacity: 0.5 }} />
                <p style={{ fontSize: '1.1rem', fontWeight: 600, margin: '0 0 8px' }}>Nenhum produto encontrado</p>
                <p style={{ fontSize: '0.9rem', margin: 0 }}>Tente ajustar os filtros de busca</p>
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
                        onError={(e) => { e.target.src = 'https://via.placeholder.com/180x180?text=Sem+Imagem' }}
                      />
                    </ProductCardImage>
                  </ProductCard>
                ))}
              </ProductsGrid>
            )}
          </MainArea>
        </ModalBody>

        <ModalFooter>
          <SaveSelectionButton onClick={handleSave} disabled={selected.length === 0}>
            <FiSave size={18} />
            Salvar Seleção ({selected.length} produto{selected.length !== 1 ? 's' : ''})
          </SaveSelectionButton>
          <CancelButton onClick={onClose}>Cancelar</CancelButton>
        </ModalFooter>
      </Modal>
    </Overlay>
  )
}

export default ModalSelecionarProdutos