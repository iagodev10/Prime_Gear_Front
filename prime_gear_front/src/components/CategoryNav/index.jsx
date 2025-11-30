import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styled from "styled-components";
import { Button } from "../ButtonCategories";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  background: transparent;
  padding: 16px 8px;
  margin-top: 80px;
`;

const ScrollContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 12px;
  overflow-x: auto;
  scroll-behavior: smooth;
  background: transparent;
  width: 70%;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default function CategoryNav({ categorias, selectedCategories = [], onCategoryChange }) {
  const categories = categorias;

  const scrollContainerRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();




  const handleCategoryClick = (category) => {
    const isOnStorePage = location.pathname === '/loja';

    if (!isOnStorePage) {
      navigate('/loja', { state: { selectedCategory: category } });
    } else {
      onCategoryChange?.(category);
    }
  };

  const scroll = (dir) => {
    scrollContainerRef.current?.scrollBy({
      left: dir === "left" ? -200 : 200,
      behavior: "smooth",
    });
  };

  return (
    <Container>
      <Button onClick={() => scroll("left")}>
        <ChevronLeft color="gray" size={40} />
      </Button>

      <ScrollContainer ref={scrollContainerRef}>
        {categories.map((cat) => {
          const isActive = selectedCategories.includes(cat.nome_cat);

          return (
            <Button
              key={cat.cod_categoria}
              onClick={() => handleCategoryClick(cat)}
              style={{
                background: isActive ? "#000" : "#e5e5e5",
                color: isActive ? "#fff" : "#333",
                transition: "all 0.3s ease",
              }}
            >
              {cat.nome_cat}
            </Button>
          );
        })}
      </ScrollContainer>

      <Button onClick={() => scroll("right")}>
        <ChevronRight color="gray" size={40} />
      </Button>
    </Container>
  );
}