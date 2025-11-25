"use client"

import { useState } from "react"
import { FiX, FiSearch, FiFilter, FiStar, FiSave } from "react-icons/fi"
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

  const categories = [...new Set(allProducts.map((p) => p.categoria))]

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
  }

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <div>
            <ModalTitle>Selecionar Produtos - Seção {sectionId}</ModalTitle>
            <ModalSubtitle>Clique nos produtos para adicionar ou remover da seleção</ModalSubtitle>
          </div>
          <CloseButton onClick={onClose}>
            <FiX size={24} />
          </CloseButton>
        </ModalHeader>

        <ModalBody>
          <Sidebar>
            <SidebarTitle>
              <FiStar size={18} />
              Produtos Selecionados
            </SidebarTitle>
            <SelectedCount>{selected.length} selecionados</SelectedCount>

            <SelectedList>
              {selected.map((product) => (
                <SelectedItem key={product.id}>
                  <SelectedImage>
                    <img src={product.image || "/placeholder.svg"} alt={product.name} />
                  </SelectedImage>
                  <SelectedInfo>
                    <SelectedName>{product.name}</SelectedName>
                    <SelectedPrice>
                      R$ {product.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                    </SelectedPrice>
                  </SelectedInfo>
                </SelectedItem>
              ))}
            </SelectedList>
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
                <SelectInput value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
                  <option value="">Todas as Categorias</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </SelectInput>
              </FilterGroup>
            </FiltersRow>

            <ProductCount>
              <span>{filteredProducts.length}</span> produtos disponíveis
            </ProductCount>

            <ProductsGrid>
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  $selected={isProductSelected(product.id)}
                  onClick={() => toggleProduct(product)}
                >
                  <ProductCardImage>
                    <img src={product.image || "/placeholder.svg"} alt={product.name} />
                  </ProductCardImage>
                </ProductCard>
              ))}
            </ProductsGrid>
          </MainArea>
        </ModalBody>

        <ModalFooter>
          <SaveSelectionButton onClick={handleSave}>
            <FiSave size={18} />
            Salvar Seleção ({selected.length} produtos)
          </SaveSelectionButton>
          <CancelButton onClick={onClose}>Cancelar</CancelButton>
        </ModalFooter>
      </Modal>
    </Overlay>
  )
}

export default ModalSelecionarProdutos
