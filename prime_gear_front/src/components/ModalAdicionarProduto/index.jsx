import React, { useState } from "react";
import styled from "styled-components";
import { FiX } from 'react-icons/fi'

import { ModalOverlay, ModalContent, ModalHeader, Form, Divide, ProdDestaque, SwitchContainer, SwitchCheckbox, SwitchLabel, SwitchSlider, SubmitButton } from './style.js';


const ModalAdicionarProduto = ({ onClose }) => {
  const [produtoDestaque, setProdutoDestaque] = useState(false);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      <ModalOverlay onClick={handleOverlayClick}>

        <ModalContent>
          <ModalHeader>
            <h2>Novo Produto</h2>
            <button onClick={onClose}>
              <FiX size={24} />
            </button>
          </ModalHeader>

          <Form>
            <div>
              <label htmlFor="nome">Nome do Produto</label>
              <input type="text" id="nome" required />
            </div>

            <Divide>
              <div>
                <label htmlFor="preco">Preço (R$)</label>
                <input type="number" id="preco" required placeholder="0" />
              </div>

              <div>
                <label htmlFor="quantidade">Quantidade em Estoque</label>
                <input type="number" id="quantidade" required placeholder="0" />
              </div>
            </Divide>

            <div>
              <label htmlFor="categoria">Categoria</label>
              <select id="categoria">
                <option value="Laptops">Laptops</option>
                <option value="Laptops">Laptops</option>
                <option value="Laptops">Laptops</option>
                <option value="Laptops">Laptops</option>
                <option value="Laptops">Laptops</option>
                <option value="Laptops">Laptops</option>
              </select>
            </div>

            <div>
              <label htmlFor="descricao">Descrição</label>
              <textarea id="descricao" rows={4} placeholder="Descrição detalhada do Produto."></textarea>
            </div>

            <hr />

            <div>
              <label htmlFor="dimensao">Dimensões e Peso</label>
              <Divide>

                <div className="divs">
                  <label htmlFor="peso">Peso (Kg)</label>
                  <input type="number" placeholder="0" />
                </div>

                <div className="divs">
                  <label htmlFor="altura">Altura (cm)</label>
                  <input type="number" placeholder="0" />
                </div>

                <div className="divs">
                  <label htmlFor="largura">Largura (cm)</label>
                  <input type="number" placeholder="0" />
                </div>

                <div className="divs">
                  <label htmlFor="comprimento">Comprimento (cm)</label>
                  <input type="number" placeholder="0" />
                </div>

              </Divide>
            </div>

            <ProdDestaque>
              <div className="destaque">
                <p>Produto em Destaque</p>
                <p className="p-destaque">Exibir na página inicial</p>
              </div>
              <SwitchContainer>
                <SwitchCheckbox
                  type="checkbox"
                  id="produtoDestaque"
                  checked={produtoDestaque}
                  onChange={(e) => setProdutoDestaque(e.target.checked)}
                />
                <SwitchLabel 
                  htmlFor="produtoDestaque" 
                  checked={produtoDestaque}
                >
                  <SwitchSlider checked={produtoDestaque} />
                </SwitchLabel>
              </SwitchContainer>
            </ProdDestaque>

            <SubmitButton type="submit">
              Cadastrar Produto
            </SubmitButton>

          </Form>

        </ModalContent>

      </ModalOverlay>
    </>
  )

}

export default ModalAdicionarProduto;