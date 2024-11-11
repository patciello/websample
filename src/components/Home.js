/* src/components/Home.js */
import { useEffect, useState } from "react";
import React from "react";
import * as Stories from "./Stories";
import logo from "../assets/logos/livres.png";
import "./Home.css";
import { fetchYouTubeVideos } from "../services/youtubeApi";
import { YOUTUBE_CONFIG } from "../constants/config";
import { formatVideoUrl, handleExternalLink } from "../utils/helpers";

const Home = () => {
  const [youtubeVideos, setYoutubeVideos] = useState([]);
  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;

  useEffect(() => {
    const loadVideos = async () => {
      if (apiKey) {
        try {
          const videos = await fetchYouTubeVideos(
            YOUTUBE_CONFIG.CHANNEL_ID,
            apiKey
          );
          setYoutubeVideos(videos);
        } catch (error) {
          console.error("Failed to load videos:", error);
        }
      }
    };

    loadVideos();
  }, [apiKey]);

  const openYouTubeVideo = (videoId) => {
    handleExternalLink(formatVideoUrl(videoId));
  };

  return (
    <div className="container">
      <Stories.TopBar className="top-bar">
        <Stories.Logo src={logo} alt="Livres Platform Logo" />
        <Stories.TopBarTitle>Livres Platform</Stories.TopBarTitle>
      </Stories.TopBar>

      <div className="content">
        <Stories.StoriesContainer>
          {youtubeVideos.map((video) => (
            <Stories.OuterCard key={video.id.videoId}>
              <Stories.StoryCard
                onClick={() => openYouTubeVideo(video.id.videoId)}
              >
                <Stories.Thumbnail
                  src={video.snippet.thumbnails.high.url}
                  alt={video.snippet.title}
                />
                <Stories.PlayIcon />
              </Stories.StoryCard>
              <Stories.VideoInfo>
                <Stories.Title>{video.snippet.title}</Stories.Title>
              </Stories.VideoInfo>
            </Stories.OuterCard>
          ))}
        </Stories.StoriesContainer>
      </div>
    </div>
  );
};

export default Home;
