<template>
  <div class="page-content">
    <section class="home-section home-intro">
      <div class="column">
        <h1>ValienteProject Studio</h1>
        <h3>Miniatury, 3D tisk a kreativita pro každého</h3>
        <p>Zaměřujeme se na kreativní činnost. Náš tým se skládá z velmi kreativních a pracovitých lidí, kteří vědí, že pro tvorbu není žádný přesný návod nebo postup. Přesně to nás motivuje k tomu, abychom vytvářeli nové a jedinečné projekty.</p>
      </div>
      <div class="column">
        <img class="intro-img" :src="valiente_logo" />
      </div>
    </section>
    <section class="home-section home-services">
      <div class="column">
        <h2>O Nás</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam eros, vitae cursus enim erat nec urna. Mauris non risus vitae sapien dictum cursus.</p>
        <button>Dozvi se více</button>
      </div>
      <div class="column services">
        <ServiceSquareTile
          v-for="(service, idx) in services"
          :key="idx"
          :image="service.image"
          :title="service.title"
          :buttonText="service.buttonText"
        />
      </div>
    </section>
  </div>
</template>

<script>
import valiente_logo from "@assets/logo/valiente_logo.png";
import ServiceSquareTile from "@/components/ServiceSquareTile.vue";

export default {
  name: "HomePage",
  components: { ServiceSquareTile },
  data: function () {
    return {
      valiente_logo: valiente_logo,
      services: [
        { image: valiente_logo, title: "3D Tisk", buttonText: "Objednat" },
        { image: valiente_logo, title: "Miniatury", buttonText: "Objednat" },
        {
          image: valiente_logo,
          title: "Kreativní projekty",
          buttonText: "Objednat",
        },
      ],
    };
  },
};
</script>

<style scoped>
.home-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 2rem 0;
  gap: 1rem;
}

.home-services {
  grid-template-columns: 0.75fr 1.25fr;
}

.home-intro {
  height: 75vh;
}

.column {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.services {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
}

h1 {
  font-family: "MedievalSharp";
  font-size: 3rem;
}

h3 {
  font-size: 1.5rem;
  margin-top: -0.5rem;
}

.intro-img {
  height: 300px;
  width: auto;
  object-fit: contain;
  display: block;
  opacity: 0.5;
}
</style>