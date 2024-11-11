import styled from "styled-components";

export const SectionContainer = styled.div`
  padding: 16px;
  margin-top: 20px;
`;

export const SectionTitle = styled.h2`
  color: #fff;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
`;

export const SectionSlider = styled.div`
  display: flex;
  overflow-x: scroll;
  gap: 16px;
  padding: 10px 0;
`;

export const Card = styled.div`
  min-width: 200px;
  background: #333;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

export const CardTitle = styled.h3`
  color: #fff;
  font-size: 16px;
  padding: 8px;
  font-family: "Roboto", sans-serif;
`;

const Section = ({ title, items }) => {
  return (
    <SectionContainer>
      <SectionTitle>{title}</SectionTitle>
      <SectionSlider>
        {items.map((item, index) => (
          <Card key={index}>
            <CardImage src={item.image} alt={item.title} />
            <CardTitle>{item.title}</CardTitle>
          </Card>
        ))}
      </SectionSlider>
    </SectionContainer>
  );
};

export default Section;
