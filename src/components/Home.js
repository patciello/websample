/* src/components/Home.js */
import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import "./Home.css";
import * as Stories from "./Stories";
const Home = () => {
  const [youtubeVideos, setYoutubeVideos] = useState([]);
  const channelId = "UCyGlnihqrujBPlGXs6yi42g";
  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;

  useEffect(() => {
    const fetchYouTubeVideos = async () => {
      try {
        console.log("Buscando vídeos do YouTube...");
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
        console.log("Resposta da API do YouTube:", response);
        if (response.data && response.data.items) {
          setYoutubeVideos(response.data.items);
        } else {
          console.error("Nenhum vídeo encontrado.");
        }
      } catch (error) {
        console.error("Erro ao buscar vídeos do YouTube:", error);
      }
    };

    if (apiKey) {
      fetchYouTubeVideos();
    } else {
      console.error("Chave de API do YouTube não configurada corretamente.");
    }
  }, [channelId, apiKey]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const cards = document.querySelectorAll("[data-card]");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [youtubeVideos]);

  const openYouTubeVideo = (videoId) => {
    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
    window.open(videoUrl, "_blank");
  };

  return (
    <Stories.StoriesContainer>
      {youtubeVideos.map((video) => (
        <Stories.OuterCard key={video.id.videoId} data-card>
          <Stories.StoryCard onClick={() => openYouTubeVideo(video.id.videoId)}>
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
  );
};
export default Home;
