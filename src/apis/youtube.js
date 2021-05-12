import axios from 'axios';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: 'AIzaSyAZM8U0dX5VOb7T5oYL9npmRVqx-YE60fA',
  },
});
