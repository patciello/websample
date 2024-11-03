import React from "react";
import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4px;
  padding: 4px;
  background-color: #000;
  min-height: 100vh;
`;

const GridItem = styled.div`
  aspect-ratio: 1;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: #000;
  color: white;
`;

const Title = styled.h1`
  font-size: 20px;
  margin: 0;
`;

const Category = () => {
  const images = [
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop",
  ];

  return (
    <div>
      <TopBar>
        <Title>Categories</Title>
      </TopBar>

      <GridContainer>
        {images.map((url, index) => (
          <GridItem key={index}>
            <Image src={url} alt={`Category ${index + 1}`} />
          </GridItem>
        ))}
      </GridContainer>
    </div>
  );
};

export default Category;
