<template>
  <div id="app">
    <MyHeader :title="'Art Gallery'" />
    <main>
      <ArtworkList :artworks="artworks" />
    </main>
  </div>
</template>

<script>
import ArtworkList from './components/ArtworkList.vue';
import MyHeader from './components/MyHeader.vue';
import ApiService from './services/ApiService.js';

export default {
  name: 'App',
  components: {
    ArtworkList,
    MyHeader,
  },
  data() {
    return {
      artworks: [],
      loading: false
    };
  },
  async created() {
    try {
      this.loading = true;
      this.artworks = await ApiService.getArtworks();
    } catch (error) {
      console.error('Error fetching artworks:', error);
    } finally {
      this.loading = false;
    }
  }
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
