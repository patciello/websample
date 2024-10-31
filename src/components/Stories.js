import styled from "styled-components";

export const StoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  height: 400vh;
  padding: 20px;
  background-color: #3b3a3a;
`;

export const StoryCard = styled.div`
  width: 100%;
  max-width: 600px;
  margin-bottom: 15px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  flex-direction: column;
  transition: transform 0.3s ease;
  aspect-ratio: 16 / 9;
  &:hover {
    transform: scale(1.03);
  }
`;

export const Thumbnail = styled.img`
  width: 100%;
  object-fit: fill;
  padding: 0;
  margin-top: -10%;
  margin-bottom: 0%;
`;

export const StoryInfo = styled.div`
  padding: 0px;
  text-align: center;
`;

export const Title = styled.h3`
  font-size: 1rem;
  color: #dedede;
  margin: 5px 10;
`;

export const ChannelName = styled.p`
  font-size: 1rem;
  color: #777;
  margin-top: 5p;
`;
