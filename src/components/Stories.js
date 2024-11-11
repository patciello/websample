import React from "react";
import { FaPlay } from "react-icons/fa";
import "./Stories.css";

export const StoriesContainer = React.memo(({ children }) => (
  <div className="stories-container">{children}</div>
));

export const OuterCard = React.memo(({ children }) => (
  <div className="outer-card">{children}</div>
));

export const StoryCard = React.memo(({ children, onClick }) => (
  <div
    className="story-card"
    role="button"
    tabIndex={0}
    onClick={onClick}
    onKeyPress={(e) => e.key === "Enter" && onClick()}
  >
    {children}
  </div>
));

export const Thumbnail = React.memo(({ src, alt }) => (
  <img className="thumbnail" src={src} alt={alt} loading="lazy" />
));

export const PlayIcon = React.memo(() => (
  <div className="play-icon" aria-label="Play video">
    <FaPlay />
  </div>
));

export const VideoInfo = React.memo(({ children }) => (
  <div className="video-info">{children}</div>
));

export const Title = React.memo(({ children }) => (
  <h3 className="title">{children}</h3>
));

export { TopBarTitle } from "./TopBar";
