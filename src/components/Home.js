/* src/components/Home.js */
import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import "./Home.css";
import * as Stories from "./Stories";

const Home = () => {
  const [youtubeVideos, setYoutubeVideos] = useState([]);
  const channelId = "UCyGlnihqrujBPlGXs6yi42g"; // Substitua pelo ID do canal desejado
  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY; // Substitua pela sua chave de API do YouTube

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

  // Função para abrir o vídeo no app do YouTube
  const openYouTubeVideo = (videoId) => {
    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
    window.open(videoUrl, "_blank"); // Abre o link no navegador ou no app, dependendo do dispositivo
  };

  return (
    <Stories.StoriesContainer>
      {youtubeVideos.map((video) => (
        <Stories.OuterCard key={video.id.videoId}>
          <Stories.StoryCard onClick={() => openYouTubeVideo(video.id.videoId)}>
            <Stories.Thumbnail
              src={video.snippet.thumbnails.high.url}
              alt={video.snippet.title}
            />
            <Stories.PlayIcon />
          </Stories.StoryCard>
          <Stories.VideoInfo>
            <Stories.Title>{video.snippet.title}</Stories.Title>
            <Stories.VideoDate>
              {new Date(video.snippet.publishedAt).toLocaleDateString()}
            </Stories.VideoDate>
          </Stories.VideoInfo>
        </Stories.OuterCard>
      ))}
    </Stories.StoriesContainer>
  );
};

export default Home;
