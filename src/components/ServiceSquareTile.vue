// ...existing code...
<template>
  <div class="service-tile">
    <img class="tile-image" :src="image" alt="Tile Image" />
    <h3 class="tile-title">{{ title }}</h3>
    <button class="tile-button" @click="$emit('action')">{{ buttonText }}</button>
  </div>
</template>

<script>
export default {
  name: "ServiceSquareTile",
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      default: "Learn More",
    },
  },
};
</script>

<style scoped>
.service-tile {
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  box-sizing: border-box;
}
.tile-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
}
.tile-title {
  margin: 16px 0 8px 0;
  font-size: 1.2rem;
  text-align: center;
}
.tile-button {
  width: 100%;
}
</style>