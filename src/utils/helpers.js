export const formatVideoUrl = (videoId) => {
  return `https://www.youtube.com/watch?v=${videoId}`;
};

export const handleExternalLink = (url) => {
  window.open(url, "_blank");
};
