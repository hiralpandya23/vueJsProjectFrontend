import axios from 'axios';

const API_URL = "https://backend-0hm7.onrender.com/api";

const ApiService = {
  async getArtworks() {
    try {
      const response = await axios.get(`${API_URL}/artworks`);
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.error('Error fetching artworks:', error);
      return [];
    }
  },
};

export default ApiService;
