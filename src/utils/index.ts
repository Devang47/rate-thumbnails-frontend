import axios from 'axios';

export const getYoutubeVideoInfo = async (url) => {
  const response = await axios.post('http://localhost:8080/' + 'getinfo', {
    url,
  });
  if (response.data.error) {
    return { error: response.data.error };
  }
  return response.data;
};
