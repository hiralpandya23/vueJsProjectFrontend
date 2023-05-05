<template>
  <div class="artwork-list">
    <h2>Artwork List</h2>
    <div v-if="loading" class="loading">Loading...</div>
    <div v-else>
      <ul>
        <li v-for="(artwork, index) in artworks" :key="index">
          <ArtworkItem :artwork="artwork"></ArtworkItem>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ArtworkItem from "./ArtworkItem.vue";
import ApiService from "../services/ApiService.js";

export default {
  name: "ArtworkList",
  components: {
    ArtworkItem,
  },
  data() {
    return {
      loading: false,
      artworks: [],
    };
  },
  async created() {
    this.loading = true;
    try {
      const response = await ApiService.getArtworks();
      this.artworks = response;
    } catch (error) {
      console.error("Error fetching artworks:", error);
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style>
.artwork-list {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

h2 {
  margin-top: 50px;
  margin-bottom: 20px;
  font-size: 36px;
  font-weight: bold;
  color: #333;
}

.loading {
  font-size: 24px;
  margin-top: 50px;
}

ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

li {
  margin: 20px;
}

@media (max-width: 600px) {
  h2 {
    font-size: 24px;
  }

  .loading {
    font-size: 18px;
  }

  li {
    margin: 10px;
  }
}
</style>
