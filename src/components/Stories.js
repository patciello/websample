import styled from "styled-components";
import { FaPlay } from "react-icons/fa";

export const StoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  height: 400vh;
  padding: 20px;
  background-color: #3b3a3a;
`;

export const OuterCard = styled.div`
  background-color: #050505;
  color: #fff;
  padding: 20px;
  margin-bottom: 25px;
  border-radius: 15px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StoryCard = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
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

export const PlayIcon = styled(FaPlay)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  color: rgba(255, 255, 255, 0.8);
  pointer-events: none;
`;

export const Title = styled.h3`
  font-size: 1.1rem;
  color: #dedede;
  margin: 10px 0;
  align-items: center;
`;

export const ChannelName = styled.p`
  font-size: 1rem;
  color: #777;
  margin-top: 5p;
`;
export const VideoInfo = styled.div`
  margin-top: 15px;
  text-align: center;
  width: 100%;
`;

export const VideoDate = styled.p`
  font-size: 0.9rem;
  color: #ccc;
  margin: 5px 0;
`;

export const ViewsCount = styled.p`
  font-size: 0.9rem;
  color: #ccc;
  margin: 5px 0;
`;
