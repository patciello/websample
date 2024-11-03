/* src/components/Home.js */
import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import * as Stories from "./Stories";
import logo from "../assets/logos/livres.png";

const Home = () => {
  const [youtubeVideos, setYoutubeVideos] = useState([]);
  const channelId = "UCyGlnihqrujBPlGXs6yi42g";
  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;

  useEffect(() => {
    const fetchYouTubeVideos = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search`,
          {
            params: {
              part: "snippet",
              channelId: channelId,
              maxResults: 8,
              order: "date",
              type: "video",
              key: apiKey,
            },
          }
        );

        if (response.data && response.data.items) {
          setYoutubeVideos(response.data.items);
        }
      } catch (error) {
        console.error("Erro ao buscar vídeos do YouTube:", error);
      }
    };

    if (apiKey) {
      fetchYouTubeVideos();
    }
  }, [channelId, apiKey]);

  const openYouTubeVideo = (videoId) => {
    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
    window.open(videoUrl, "_blank");
  };

  return (
    <div className="container">
      <Stories.TopBar>
        <Stories.Logo src={logo} alt="Livres Platform Logo" />
        <Stories.TopBarTitle>Livres Platform</Stories.TopBarTitle>
      </Stories.TopBar>

      <Stories.HorizontalScroll>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <Stories.StoryCircle key={item} />
        ))}
      </Stories.HorizontalScroll>

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
  );
};

export default Home;
