import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 144f01324d5c579f66b8ee4ec731fca681781592daf223f18c0f5552ba84ede4'
  }
});
