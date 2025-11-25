"use client"

import { useState } from "react"
import { FiSave, FiPlus, FiPackage, FiChevronDown, FiChevronUp, FiX } from "react-icons/fi"
import ModalSelecionarProdutos from "../ModalSelecionarProdutos"
import {
  Container,
  Header,
  Title,
  SaveButton,
  SectionCard,
  SectionHeader,
  SectionNumber,
  SectionTitle,
  SectionContent,
  SectionTitleLabel,
  SectionInput,
  ProductsHeader,
  ProductsLabel,
  SelectButton,
  ProductsArea,
  EmptyState,
  EmptyIcon,
  SelectedProducts,
  ProductItem,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  RemoveButton,
} from "./style"

const ProdutosDestaque = ({ produtos = [] }) => {
  const [sections, setSections] = useState([
    { id: 1, title: "Destaques de Hardware", products: [], expanded: true },
    { id: 2, title: "Periféricos em Promoção", products: [], expanded: false },
  ])
  const [modalOpen, setModalOpen] = useState(false)
  const [activeSectionId, setActiveSectionId] = useState(null)

  const toggleSection = (id) => {
    setSections(sections.map((section) => (section.id === id ? { ...section, expanded: !section.expanded } : section)))
  }

  const updateSectionTitle = (id, newTitle) => {
    setSections(sections.map((section) => (section.id === id ? { ...section, title: newTitle } : section)))
  }

  const openProductSelector = (sectionId) => {
    setActiveSectionId(sectionId)
    setModalOpen(true)
  }

  const handleSelectProducts = (selectedProducts) => {
    setSections(
      sections.map((section) =>
        section.id === activeSectionId ? { ...section, products: selectedProducts } : section,
      ),
    )
    setModalOpen(false)
  }

  const removeProduct = (sectionId, productId) => {
    setSections(
      sections.map((section) =>
        section.id === sectionId
          ? { ...section, products: section.products.filter((p) => p.id !== productId) }
          : section,
      ),
    )
  }

  const handleSaveAll = () => {
    console.log("Salvando alterações:", sections)
    alert("Alterações salvas com sucesso!")
  }

  const sectionColors = [
    { bg: "#e8f4fd", number: "#3b82f6" },
    { bg: "#fce7f3", number: "#ec4899" },
    { bg: "#d1fae5", number: "#10b981" },
    { bg: "#fef3c7", number: "#f59e0b" },
  ]

  return (
    <Container>
      <Header>
        <Title>
          <h1>Gerenciar Destaques da Home</h1>
          <p>Configure os títulos e produtos exibidos nas seções de destaque</p>
        </Title>
        <SaveButton onClick={handleSaveAll}>
          <FiSave size={18} />
          Salvar Todas as Alterações
        </SaveButton>
      </Header>

      {sections.map((section, index) => {
        const colors = sectionColors[index % sectionColors.length]
        return (
          <SectionCard key={section.id}>
            <SectionHeader $bgColor={colors.bg} onClick={() => toggleSection(section.id)}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <SectionNumber $bgColor={colors.number}>{section.id}</SectionNumber>
                <SectionTitle>
                  {section.id === 1 ? "Primeira" : section.id === 2 ? "Segunda" : `${section.id}ª`} Seção de Destaques
                </SectionTitle>
              </div>
              {section.expanded ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
            </SectionHeader>

            {section.expanded && (
              <SectionContent>
                <SectionTitleLabel>Título da Seção</SectionTitleLabel>
                <SectionInput
                  type="text"
                  value={section.title}
                  onChange={(e) => updateSectionTitle(section.id, e.target.value)}
                  placeholder="Digite o título da seção"
                />

                <ProductsHeader>
                  <ProductsLabel>Produtos Selecionados</ProductsLabel>
                  <SelectButton onClick={() => openProductSelector(section.id)}>
                    <FiPlus size={16} />
                    Selecionar Produtos
                  </SelectButton>
                </ProductsHeader>

                <ProductsArea>
                  {section.products.length === 0 ? (
                    <EmptyState>
                      <EmptyIcon>
                        <FiPackage size={48} />
                      </EmptyIcon>
                      <p>Nenhum produto selecionado</p>
                      <span>Clique em "Selecionar Produtos" para adicionar</span>
                    </EmptyState>
                  ) : (
                    <SelectedProducts>
                      {section.products.map((product) => (
                        <ProductItem key={product.id}>
                          <ProductImage>
                            <img src={product.image || "/placeholder.svg"} alt={product.name} />
                          </ProductImage>
                          <ProductInfo>
                            <ProductName>{product.name}</ProductName>
                            <ProductPrice>
                              R$ {product.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                            </ProductPrice>
                          </ProductInfo>
                          <RemoveButton onClick={() => removeProduct(section.id, product.id)}>
                            <FiX size={16} />
                          </RemoveButton>
                        </ProductItem>
                      ))}
                    </SelectedProducts>
                  )}
                </ProductsArea>
              </SectionContent>
            )}
          </SectionCard>
        )
      })}

      {modalOpen && (
        <ModalSelecionarProdutos
          produtos={produtos}
          sectionId={activeSectionId}
          currentSelected={sections.find((s) => s.id === activeSectionId)?.products || []}
          onClose={() => setModalOpen(false)}
          onSelect={handleSelectProducts}
        />
      )}
    </Container>
  )
}

export default ProdutosDestaque
