import axios from 'axios';

const SERVER_URL = 'https://rate-thumbnails.herokuapp.com/';

export const getYoutubeVideoInfo = async (url) => {
  try {
    const response = await axios.post(
      SERVER_URL + 'getinfo/',
      {
        url,
      },
      {
        params: {
          key: import.meta.env.VITE_KEY,
        },
      }
    );
    if (response.data.error) {
      return { error: response.data.error };
    }
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getRandomVideo = async () => {
  try {
    return (
      await axios.get(SERVER_URL + 'getrandom', {
        params: {
          key: import.meta.env.VITE_KEY,
        },
      })
    ).data;
  } catch (error) {
    console.log(error);
  }
};

export const increaseVideoRating = async (id) => {
  try {
    let res = (
      await axios.get(SERVER_URL + 'score/' + id, {
        params: {
          key: import.meta.env.VITE_KEY,
        },
      })
    ).data;
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getTopVideos = async () => {
  try {
    let res = (
      await axios.get(SERVER_URL + 'leaderboard/', {
        params: {
          key: import.meta.env.VITE_KEY,
        },
      })
    ).data;
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const addVideoDocument = async (videoTitle, videoImage) => {
  try {
    await axios.post(
      SERVER_URL + 'create/',
      {
        title: videoTitle,
        image: videoImage,
      },
      {
        params: {
          key: import.meta.env.VITE_KEY,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};
