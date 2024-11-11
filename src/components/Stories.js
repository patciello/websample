import React from "react";
import { FaPlay } from "react-icons/fa";
import "./Stories.css";

export const StoriesContainer = ({ children }) => (
  <div className="stories-container">{children}</div>
);

export const OuterCard = ({ children }) => (
  <div className="outer-card">{children}</div>
);

export const StoryCard = ({ children, onClick }) => (
  <div className="story-card" onClick={onClick}>
    {children}
  </div>
);

export const Thumbnail = ({ src, alt }) => (
  <img className="thumbnail" src={src} alt={alt} />
);

export const PlayIcon = () => (
  <div className="play-icon">
    <FaPlay />
  </div>
);

export const VideoInfo = ({ children }) => (
  <div className="video-info">{children}</div>
);

export const Title = ({ children }) => <h3 className="title">{children}</h3>;

export { TopBarTitle } from "./TopBar";
