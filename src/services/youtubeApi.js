import axios from "axios";

const BASE_URL = "https://www.googleapis.com/youtube/v3";

export const fetchYouTubeVideos = async (channelId, apiKey) => {
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: {
        part: "snippet",
        channelId,
        maxResults: 8,
        order: "date",
        type: "video",
        key: apiKey,
      },
    });
    return response.data.items;
  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
    throw error;
  }
};
