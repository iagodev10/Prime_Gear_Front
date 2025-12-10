"use client"

import { useState, useEffect } from "react"
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
import axios from "axios"

const ProdutosDestaque = ({ produtos = [], nome1, nome2 }) => {
  const [sections, setSections] = useState([
    { id: 1, title: nome1 || "Primeira Seção", products: [], expanded: true },
    { id: 2, title: nome2 || "Segunda Seção", products: [], expanded: false },
  ])
  

  const [categorias, setCategorias] = useState([]) 
  
  const [modalOpen, setModalOpen] = useState(false)
  const [activeSectionId, setActiveSectionId] = useState(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    const carregarDados = async () => {
      try {
        setLoading(true)

     
        
        const [resSecao1, resSecao2, resCategorias] = await Promise.all([
            axios.get('http://72.62.10.218:8080/prods-vinculados/1'),
            axios.get('http://72.62.10.218:8080/prods-vinculados/2'),
            axios.get('http://72.62.10.218:8080/get-categorias') 
        ])

        const produtosSecao1 = resSecao1.data.produtos || []
        const produtosSecao2 = resSecao2.data.produtos || []
        
        setSections([
          { id: 1, title: nome1 || "Primeira Seção", products: produtosSecao1, expanded: true },
          { id: 2, title: nome2 || "Segunda Seção", products: produtosSecao2, expanded: false },
        ])
        
      
        setCategorias(resCategorias.data || [])

        setLoading(false)
      } catch (error) {
        console.error('Erro ao carregar dados:', error)
        setLoading(false)
      }
    }

    carregarDados()
  }, [nome1, nome2])

  const toggleSection = (id) => {
    setSections(sections.map((section) => 
      section.id === id ? { ...section, expanded: !section.expanded } : section
    ))
  }

  const updateSectionTitle = (id, newTitle) => {
    setSections(sections.map((section) => 
      section.id === id ? { ...section, title: newTitle } : section
    ))
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

  const handleSaveAll = async () => {
    setSaving(true)
    const section1 = sections.find(s => s.id === 1)
    const section2 = sections.find(s => s.id === 2)
    
    const novosNomes = {
      nome1: section1?.title || "",
      nome2: section2?.title || ""
    }

    try {
      await axios.put('http://72.62.10.218:8080/atualizar-nomes', novosNomes)
      
      const produtosIds1 = section1.products.map(p => p.id)
      await axios.put(`http://72.62.10.218:8080/vincular-secao/${section1.id}`, {
        produtos: produtosIds1
      })
      
      const produtosIds2 = section2.products.map(p => p.id)
      await axios.put(`http://72.62.10.218:8080/vincular-secao/${section2.id}`, {
        produtos: produtosIds2
      })

      console.log("✅ Alterações salvas com sucesso!")
      
      setTimeout(() => {
        window.location.reload()
      }, 500)

    } catch (error) {
      console.error("❌ Erro ao salvar:", error)
      alert("❌ Erro ao salvar as alterações. Tente novamente.")
    } finally {
      setSaving(false)
    }
  }

  const sectionColors = [
    { bg: "#dbeafe", number: "#2563eb" },  
    { bg: "#fce7f3", number: "#db2777" },  
  ]

  if (loading) {
    return (
      <Container>
        <div style={{ padding: '40px', textAlign: 'center', color: '#666' }}>
          Carregando produtos e categorias...
        </div>
      </Container>
    )
  }

  return (
    <Container>
      <Header>
        <Title>
          <h1>Gerenciar Destaques da Home</h1>
          <p>Configure os títulos e produtos exibidos nas seções de destaque</p>
        </Title>
        <SaveButton onClick={handleSaveAll} disabled={saving}>
          <FiSave size={18} />
          {saving ? "Salvando..." : "Salvar Todas as Alterações"}
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
                  {section.id === 1 ? "Primeira" : "Segunda"} Seção de Destaques
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
                  <ProductsLabel>
                    Produtos Selecionados ({section.products.length})
                  </ProductsLabel>
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
                            <img 
                              src={product.image || "/placeholder.svg"} 
                              alt={product.name}
                              onError={(e) => {
                                e.target.src = 'https://via.placeholder.com/60x60?text=Sem+Imagem'
                              }}
                            />
                          </ProductImage>
                          <ProductInfo>
                            <ProductName title={product.name}>
                              {product.name}
                            </ProductName>
                            <ProductPrice>
                              R$ {product.price?.toLocaleString("pt-BR", { 
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2 
                              })}
                            </ProductPrice>
                          </ProductInfo>
                          <RemoveButton 
                            onClick={() => removeProduct(section.id, product.id)}
                            title="Remover produto"
                          >
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
        
          categorias={categorias} 
          currentSelected={sections.find((s) => s.id === activeSectionId)?.products || []}
          onClose={() => setModalOpen(false)}
          onSelect={handleSelectProducts}
        />
      )}
    </Container>
  )
}

export default ProdutosDestaque