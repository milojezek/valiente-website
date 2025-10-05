<template>
  <header>
    <div class="logo-container">
      <img :src="valiente_logo" />
      <a href="/">ValienteProject Studio</a>
    </div>
    <nav>
      <router-link to="/">Domů</router-link>
      <router-link to="/about">O nás</router-link>
      <router-link to="/news">Novinky</router-link>
      <router-link to="/work">Naše práce</router-link>
      <router-link to="/contact">Kontakty</router-link>
    </nav>
  </header>
</template>

<script>
import valiente_logo from "@assets/logo/valiente_logo.png";

export default {
  name: "MainNavigation",
  data: function () {
    return {
      valiente_logo: valiente_logo,
    };
  },
};
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--max-width);
  padding: 2rem 0;
  width: 100%;
  position: fixed;
  top: 0;
  box-sizing: border-box;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  background: rgba(255, 255, 255, 0.9);
  z-index: 1000;
}

.logo-container {
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: "MedievalSharp";
}

img {
  height: 100%;
  width: auto;
  object-fit: contain;
  display: block;
}

nav {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}
</style>