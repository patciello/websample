import styled, { keyframes } from "styled-components";
import { FaPlay } from "react-icons/fa";

const fadeInScale = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;
export const StoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000;
  padding: 0 0 70px 0; // Added padding bottom for fixed bottom bar
  gap: 12px;
  overflow-x: hidden; // Prevent horizontal scroll
  width: 100%;
`;

export const BottomBar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000;
  padding: 16px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #262626;
  z-index: 1000;
  width: 100%;
  box-sizing: border-box;
`;
const fadeOutScale = keyframes`
    from {
      opacity: 1;
      transform: scale(1);
    }
    to {
      opacity: 0.5;
      transform: scale(0.95);
    }
  `;

export const OuterCard = styled.div`
  background-color: #000;
  width: 100%;
  max-width: 470px;
  margin-bottom: 12px;
  opacity: 1;
`;

export const HorizontalScroll = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 16px;
  gap: 12px;
  background-color: #000;
  width: 100%;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StoryCircle = styled.div`
  min-width: 320px;
  height: 180px;
  border-radius: 8px;
  background: #262626;
  border: 2px solid #333;
`;

export const StoryCard = styled.div`
  position: relative;
  width: 100%;

  aspect-ratio: 16 / 9;
  background: #262626;
  cursor: pointer;
`;

export const Thumbnail = styled.img`
  width: 100%;

  height: 100%;
  object-fit: cover;
`;

export const VideoInfo = styled.div`
  padding: 12px;
  background: #000;
`;
export const Title = styled.h3`
  font-size: 14px;
  color: #fff;
  margin: 0;
  font-weight: 400;
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

export const ChannelName = styled.p`
  font-size: 1rem;
  color: #777;
  margin-top: 5p;
`;

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: #000;
  width: 100%;
  gap: 12px;
`;

export const Logo = styled.img`
  width: auto;
  height: 32px;
  border-radius: 50%;
  margin-right: 12px;
`;
export const TopBarTitle = styled.h1`
  color: #fff;
  font-size: 20px;
  margin: 0;
  font-family: "Roboto", sans-serif;
`;
