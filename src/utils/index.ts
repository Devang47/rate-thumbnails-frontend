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

export const getRandomVideo = async () => {
  try {
    return (await axios.get('http://localhost:8080/' + 'getrandom')).data;
  } catch (error) {
    console.log(error);
  }
};

export const increaseVideoRating = async (id) => {
  try {
    let res = (await axios.get('http://localhost:8080/' + 'score/' + id)).data;
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getTopVideos = async () => {
  try {
    let res = (await axios.get('http://localhost:8080/' + 'leaderboard/')).data;
    return res;
  } catch (error) {
    console.log(error);
  }
};
