<template>
  <div class="artwork-item">
    <h3>{{ artwork.name }}</h3>
    <p><strong>Artist:</strong> {{ artwork.artist_name }}</p>
    <p><strong>Date of Creation:</strong> {{ artwork.date_of_creation }}</p>
    <p><strong>Art Style:</strong> {{ artwork.art_style }}</p>
    <p><strong>Dimensions:</strong> {{ artwork.dimensions }}</p>
    <p><strong>Significance &amp; History:</strong> {{ artwork.significance_history }}</p>
  </div>
</template>

<script>
export default {
  name: 'ArtworkItem',
  props: {
    artwork: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.artwork-item {
  background-color: #f9f9f9;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  padding: 1rem;
}

.artwork-item h3 {
  margin-top: 0;
}

.artwork-item p {
  margin-bottom: 0.5rem;
}
</style>
