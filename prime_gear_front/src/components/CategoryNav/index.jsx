import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styled from "styled-components";
import { Button } from "../ButtonCategories";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  gap: 8px;
  width: 100%;
  background: transparent;
  padding: 16px 8px;
  margin-top: 80px;
`;

const ScrollContainer = styled.div`
    
  display: flex;
  justify-content:space-around;
  align-items: center;
  gap: 12px;
  overflow-x: auto;
 
  scroll-behavior: smooth;
    background: transparent;
    width:70%;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default function CategoryNav() {
    const categories=["Laptops","Gabinetes","Mouses","Consoles","Teclados","Desktops", "Headsets"] 
    const defaultCategory="PC"
  const [activeCategory, setActiveCategory] = useState(defaultCategory || categories[0]);
  const scrollContainerRef = useRef(null);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    onCategoryChange?.(category);
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
        <ChevronLeft color="gray" size={40}/>
      </Button>

      <ScrollContainer ref={scrollContainerRef}>
        {categories.map((cat) => (
          <Button
            key={cat}
            onClick={() => handleCategoryClick(cat)}
            style={{
              background: activeCategory === cat ? "#000" : "#e5e5e5",
              color: activeCategory === cat ? "#fff" : "#333",
            }}
          >
            {cat}
          </Button>
        ))}
      </ScrollContainer>

      <Button onClick={() => scroll("right")}>
        <ChevronRight color="gray" size={40}/>
      </Button>
    </Container>
  );
}
