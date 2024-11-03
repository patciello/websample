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
  padding: 0;
  gap: 12px;
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
  opacity: 0.5;
  transform: scale(0.95);
  transition: all 0.3s ease;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    transition: opacity 0.3s ease;
    pointer-events: none;
    opacity: 1;
  }

  &.center {
    animation: ${fadeInScale} 0.3s ease forwards;
    &::after {
      opacity: 0;
    }
  }
  &.not-center {
    animation: ${fadeOutScale} 0.3s ease forwards;
    &::after {
      opacity: 1;
    }
  }
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

export const VideoDate = styled.p`
  font-size: 12px;
  color: #8e8e8e;
  margin: 4px 0 0 0;
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

export const ViewsCount = styled.p`
  font-size: 0.9rem;
  color: #ccc;
  margin: 5px 0;
`;

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: #000;
  width: 100%;
  gap: 12px;
`;

export const TopBarTitle = styled.h1`
  color: #fff;
  font-size: 20px;
  margin: 0;
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
  min-width: 66px;
  height: 66px;
  border-radius: 50%;
  background: #262626;
  border: 2px solid #333;
`;
